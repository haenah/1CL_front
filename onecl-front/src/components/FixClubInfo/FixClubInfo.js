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
            <div className='limiter'>
                <div className='container-login100'>
                    <div className='wrap-login100'>
                        <span className="fix-title">
                          <h2>동아리 기본 정보 수정하기</h2>
                        </span>
                        <div className='boxbox'>
                            <label className={'inputLabel'}>동아리명</label>
                            <div className='clubName'>
                              <span>
                              <input className='inputField' value={this.state.clubName} onChange={(e) => {this.setState({clubName : e.target.value})}}/>
                              <span className="focus-fix"></span>
                                <span className="symbol-fix">
                                  <i className="fa fa-users" aria-hidden="true"></i>
                                </span>
                              </span>
                            </div>


                            <label className={'inputLabel'}>소속분류</label>
                            <div className='catName'>
                            <span>
                            <input className={'inputField'} value={this.state.clubCat} onChange={(e) => {this.setState({clubCat : e.target.value})}}/>
                            <span className="focus-fix"></span>
                                <span className="symbol-fix">
                                  <i className="fa fa-tag" aria-hidden="true"></i>
                                </span>
                            </span>
                            </div>

                            <label className={'inputLabel'}>소속학과</label>
                            <div className='deptName'>
                              <span>
                              <input className='inputField' value={this.state.clubDept} onChange={(e) => {this.setState({clubDept : e.target.value})}}/>
                              <span className="focus-fix"></span>
                                <span className="symbol-fix">
                                  <i className="fa fa-compass" aria-hidden="true"></i>
                                </span>
                              </span>
                            </div>




                            <label className={'inputLabel'}>지원서 제출 시 주의사항 : </label>
                            <textarea className={'messageField'} placeholder={' 200자 이하로 적어주세요.'} value={this.state.clubApplyMessage} onChange={(e) => {this.setState({clubApplyMessage : e.target.value})}}/>
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
