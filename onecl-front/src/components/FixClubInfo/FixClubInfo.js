import React, {Component} from 'react'
import axios from 'axios'
import './FixClubInfo.css'

const base_url = `http://127.0.0.1:8000/club/`;
const tokenString = 'token ' + sessionStorage.getItem('token');
const config = {
    headers : {
        'authorization' : tokenString,
    }
};

class FixClubInfo extends Component{
    state={
        clubName : null,
        clubCat : null,
        clubDept : null,
        clubApplyMessage : null,
    };

    initialize = async () => {
        const url = base_url + `${this.props.id}/`;
        try{
            const response = await axios.get(url, config);
            this.setState({
                clubName : response.data.name,
                clubCat : response.data.category,
                clubDept : response.data.dept,
                clubApplyMessage : response.data.apply_message,
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

    clubInfoSubmitHandler = async () => {
        const url = base_url + `${this.props.id}/`;
        const data = {
            name : this.state.clubName,
            category : this.state.clubCat,
            dept : this.state.clubDept,
            apply_message : this.state.clubApplyMessage,
        };
        try{
            const res = await axios.put(url, data, config);
            console.log(res);
            alert('정보 수정이 완료되었습니다.');
            this.returnButtonHandler()
        }catch (e) {
            alert('정보 수정에 실패하였습니다.' + e)
        }
    };

    render(){
        return(
            <div>
                <label className={'inputLabel'}>동아리명</label>
                <input disabled={true} className={'inputField'} value={this.state.clubName} onChange={(e) => {this.setState({clubName : e.target.value})}}/>
                <label className={'inputLabel'}>소속분류</label>
                <input disabled={true} className={'inputField'} value={this.state.clubCat} onChange={(e) => {this.setState({clubCat : e.target.value})}}/>
                <label className={'inputLabel'}>소속학과</label>
                <input disabled={true} className={'inputField'} value={this.state.clubDept} onChange={(e) => {this.setState({clubDept : e.target.value})}}/>
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
