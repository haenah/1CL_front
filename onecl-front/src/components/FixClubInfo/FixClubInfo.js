import React, {Component} from 'react'
import axios from 'axios'
import './FixClubInfo.css'
import {REQUEST_URL} from "../../Constants/Constants";
import {Input} from "reactstrap";

class FixClubInfo extends Component{
    state={
        clubName : null,
        clubCat : null,
        clubDept : null,
        clubApplyMessage : null,
    };

    initialize = async () => {
        const url = `${REQUEST_URL}/club/${this.props.id}`;
        const tokenString = 'token ' + sessionStorage.getItem('token');
        const config = {
            headers : {
                'authorization' : tokenString,
            }
        };
        try{
            const response = await axios.get(url, config);
            this.setState({
                clubName : response.data.name,
                clubCat : response.data.category,
                clubDept : response.data.dept,
            });
        }catch (e) {
            alert('권한이 없습니다.');
            this.props.history.push(`/club/${this.props.id}`);
        }
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
                <Input className={'inputField'} value={this.state.clubName} onChange={(e) => {this.setState({clubName : e.target.value})}}/>
                <label className={'inputLabel'}>소속분류</label>
                <Input className={'inputField'} value={this.state.clubCat} onChange={(e) => {this.setState({clubCat : e.target.value})}}/>
                <label className={'inputLabel'}>소속학과</label>
                <Input className={'inputField'} value={this.state.clubDept} onChange={(e) => {this.setState({clubDept : e.target.value})}}/>
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
