import React, {Component} from 'react'
import './AssignMaster.css'
import axios from 'axios'
import {Input, ListGroup, ListGroupItem} from "reactstrap";
import Autosuggest from 'react-autosuggest'

const base_url = 'http://127.0.0.1:8000/';

const config = {
    headers : {
        'authorization' : 'token ' + sessionStorage.getItem('token'),
        'content-type' : 'application/json',
    }
};

const languages = [
    {
        name: 'C',
        id: '1',
        year: 1972
    },
    {
        name: 'Elm',
        id: '2',
        year: 2012
    },
    {
        name: 'java',
        id: '3',
        year: 1998
    },
    {
        name: 'C#',
        id: '4',
        year: 1999
    },
    {
        name: 'C++',
        id: '5',
        year: 2000
    }
];

const getSuggestionValue = suggestion => `${suggestion.user_name} (${suggestion.user_username})`;

class AssignMaster extends Component {
    state = {
        searchKey : null,
        memberList: [],
        selectedMember : null,
        value: '',
        suggestions: [],
    };

    getSuggestions = value => {
        console.log(value);
        const inputValue = value.trim().toLowerCase();
        console.log(inputValue);
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.state.memberList.filter(mem =>
            mem.user_name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    renderSuggestion = (suggestion) => (
        <ListGroupItem value={suggestion.name} onClick={() => {console.log('suggest', suggestion.user_username); this.setState({selectedMember: suggestion.user_username})}}>
            {suggestion.user_name} <span style={{color: 'grey', fontSize: '12px'}}>({suggestion.user_username})</span>
        </ListGroupItem>
    );

    masterAssignHandler = async () => {
        const url = base_url + `join/delegate/`;
        const data = {
            club : this.props.id,
            username : this.state.selectedMember
        };
        if(window.confirm('정말로 동아리장을 위임하시겠습니까?')){
            try{
                await axios.put(url, data, config);
                alert('동아리장 위임이 완료되었습니다.');
                this.props.history.push(`/club/${this.props.id}`)
            }catch (e) {
                alert('동아리장 위임 실패 :' + e)
            }
        }
    };

    returnButtonHandler = () => {
        this.props.history.push(`/club/${this.props.id}`);
    };

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    async componentDidMount(){
        const url = base_url + `join/?club=${this.props.id}&auth_level=1`;
        try{
            const response = await axios.get(url, config);
            this.setState({
                memberList: response.data.results,
            });
            console.log(this.state.memberList)
        } catch (e) {
            alert('권한이 없습니다.');
            this.props.history.push(`/club/${this.props.id}`)
        }
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render(){
        const message1 = '원하는 회원에게 동아리 회장직을 위임할 수 있습니다.';
        const message2 = '회장직을 위임받을 사람과 충분히 상의한 후에 진행하시기 바랍니다.';
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: '위임할 멤버의 이름을 입력하세요.',
            value,
            onChange: this.onChange
        };
        return(
            <div className='limiter'>
                <div className='container-assign'>
                    <div className='wrap-assign'>
                        <div className={'assignMasterWrapper'}>
                            <p className={'clubApplyTitle'}><strong>동아리 회장 위임</strong></p>
                            <hr/>
                            <div className={'message'}>
                                <li>{message1}</li>
                                <li>{message2}</li>
                            </div>

                            {/*<div className='assign'>*/}
                              {/*<span>*/}
                              <Autosuggest
                                  suggestions={suggestions}
                                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                  getSuggestionValue={getSuggestionValue}
                                  renderSuggestion={s => <ListGroup>{this.renderSuggestion(s)}</ListGroup>}
                                  inputProps={inputProps}
                              />
                              {/*<span className="focus-assign"></span>*/}
                                {/*<span className="symbol-assign">*/}
                                  {/*<i className="fa fa-user" aria-hidden="true"></i>*/}
                                {/*</span>*/}
                              {/*</span>*/}

                            {/*</div>*/}

                            <hr/>
                            <button className={'assign-btn'} onClick={this.masterAssignHandler}>위임하기</button>
                        </div>
                        <br></br>

                    <button style={{'margin': '30px', 'borderRadius' : '10px', 'float':'right'}} onClick={this.returnButtonHandler}>돌아가기</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default AssignMaster;
