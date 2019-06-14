import React, {Component} from 'react'
import axios from 'axios'
import './FixClubInfo.css'

class FixClubInfo extends Component{
    state={
        clubName : null,
        clubCat : null,
        clubDept : null,
        clubApplyMessage : null,
    };

    initialize = async () => {
        const url = `http://127.0.0.1:8000/club/${this.props.id}`;
        const tokenString = 'token ' + sessionStorage.getItem('token');
        const config = {
            headers : {
                'authorization' : tokenString,
            }
        };
        const response = await axios.get(url, config);
        this.setState({
            clubName : response.data.name,
            clubCat : response.data.category,
            clubDept : response.data.dept,
        });
    };

    componentDidMount(){
        this.initialize();
    };

    returnButtonHandler = () => {
        this.props.history.push(`/club/${this.props.id}`);
    };

    clubInfoSubmitHandler = () => {

    };

    render(){
        return(
            <div>
                <label className={'inputLabel'}>동아리명</label>
                <input className={'inputField'} value={this.state.clubName} onChange={(e) => {this.setState({clubName : e.target.value})}}/>
                <label className={'inputLabel'}>소속분류</label>
                <input className={'inputField'} value={this.state.clubCat} onChange={(e) => {this.setState({clubCat : e.target.value})}}/>
                <label className={'inputLabel'}>소속학과</label>
                <input className={'inputField'} value={this.state.clubDept} onChange={(e) => {this.setState({clubDept : e.target.value})}}/>
                <label className={'inputLabel'}>지원서 제출 시 주의사항</label>
                <textarea className={'messageField'} value={this.state.clubApplyMessage} onChange={(e) => {this.setState({clubApplyMessage : e.target.value})}}/>
                <div className={'buttonWrapper'}>
                    <button style={{'marginRight' : '20px'}} onClick={this.returnButtonHandler}>돌아가기</button>
                    <button onClick={this.clubInfoSubmitHandler}>확인</button>
                </div>
            </div>
        )
    };
}

export default FixClubInfo;
