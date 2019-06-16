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
        const auth_url =`http://127.0.0.1:8000/join/auth_level/?club=${this.props.id}`;
        const config = {
            headers : {
                'authorization' : 'token ' + sessionStorage.getItem('token')
            }
        };
        try{
            let response;
            if(sessionStorage.getItem('token') === null) response = await axios.get(auth_url);
            else response = await axios.get(auth_url, config);
            this.setState({
                authLevel : response.data.auth_level,
            });
            if(response.data.auth_level !== 3){
                console.log(response);
                alert('권한이 없습니다.');
                this.props.history.push(`/club/${this.props.id}`)
            }
        }catch (e) {
            alert('알 수 없는 오류입니다.' + e);
            console.log('get auth level : ' + e)
        }

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
            <div className='limiter'>
                <div className='container-login100'>
                    <div className='wrap-login100'>
                        <span className="fix-title">
                          <h2>동아리 기본 정보 수정하기</h2>
                        </span>
                        <div className='boxbox'>
                            <label className={'inputLabel'}>동아리명</label>
                            <div className={'clubName'}>
                                <span>
                                <input disabled={true} className={'inputField'} value={this.state.clubName} onChange={(e) => {this.setState({clubName : e.target.value})}}/>
                                <span className="focus-fix"></span>
                                    <span className="symbol-fix">
                                      <i className="fa fa-users" aria-hidden="true"></i>
                                    </span>
                                </span>
                            </div>
                            <label className={'inputLabel'}>소속분류</label>
                            <div className='catName'>
                                <span>
                                <input disabled={true} className={'inputField'} value={this.state.clubCat} onChange={(e) => {this.setState({clubCat : e.target.value})}}/>
                                <span className="focus-fix"></span>
                                    <span className="symbol-fix">
                                      <i className="fa fa-tag" aria-hidden="true"></i>
                                    </span>
                                </span>
                            </div>

                            <label className={'inputLabel'}>소속학과</label>
                            <div className='deptName'>
                              <span>
                              <input disabled={true} className='inputField' value={this.state.clubDept} onChange={(e) => {this.setState({clubDept : e.target.value})}}/>
                              <span className="focus-fix"></span>
                                <span className="symbol-fix">
                                  <i className="fa fa-compass" aria-hidden="true"></i>
                                </span>
                              </span>
                            </div>

                            <label className={'inputLabel'}>지원서 제출 시 주의사항</label>
                            <textarea className={'messageField'} value={this.state.clubApplyMessage} onChange={(e) => {this.setState({clubApplyMessage : e.target.value})}}/>
                            <div className={'buttonWrapper'}>
                                <button style={{'marginRight' : '20px', 'border-radius' : '10px'}} onClick={this.returnButtonHandler}>돌아가기</button>
                                <button style={{'border-radius' : '10px'}}onClick={this.clubInfoSubmitHandler}>확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default FixClubInfo;
