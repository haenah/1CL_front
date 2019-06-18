import React, {Component} from 'react'
import './ApplicantList.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {REQUEST_URL} from "../../../Constants/Constants";

class ApplicantList extends Component{
    state={
        applicantList : [],
        tmp_applicantList : [
            {
                user : '음정훈',
                name : '지원서1',
            },
            {
                user : '백근영',
                name : '지원서2',
            },
            {
                user : '안재원',
                name : '지원서3',
            },
        ],
    };

    initialize = async () => {
        const auth_url =`${REQUEST_URL}/join/auth_level/?club=${this.props.id}`;
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

        const url = `http://3.219.198.5:8000/upload/file/?clubID=${this.props.id}`;
        try{
            const data = await axios.get(url, config);
            this.setState({
                applicantList: data.data.results,
            });
        }catch (e) {
            alert('an error was caught :' + e);
        }
    };

    componentDidMount(){
        this.initialize();
    };

    returnButtonHandler = () => {
        this.props.history.push(`/club/${this.props.id}`);
    };

    removeFromList = async (id, flag) => {
        let delete_url;
        if(flag) delete_url = `${REQUEST_URL}/upload/file/${id}/?apply=true`;
        else delete_url = `${REQUEST_URL}/upload/file/${id}/?apply=false`;
        const config = {
            headers : {
                'authorization' : 'token ' + sessionStorage.getItem('token')
            }
        };
        try{
            const response = await axios.delete(delete_url, config);
            console.log(response)
        }catch (e) {
            alert(e)
        }

        const get_url = `${REQUEST_URL}/upload/file/?clubID=${this.props.id}`;
        try{
            const response = await axios.get(get_url, config);
            this.setState({
                applicantList : response.data.results,
            })
        }catch (e) {
            alert(e)
        }
    };

    passHandler = async (applicant) => {
        const url = `${REQUEST_URL}/join/`;
        try{
            const data = {
                user : applicant.user,
                club : this.props.id,
            };
            const config = {
                headers : {
                    authorization : 'token ' + sessionStorage.getItem('token')
                }
            };
            await axios.post(url, data, config);
            alert('가입 승인이 완료되었습니다.');
        }catch (e) {
            alert('an error was caught : ' + e)
        }
        this.removeFromList(applicant.id, true)
    };

    failHandler = async (applicant) => {
        alert('불합격 처리되었습니다.');
        this.removeFromList(applicant.id, false)
    };

    render(){
        return(
            <div>
                <div className="limiter">
                    <div className="container-list">
                        <div className="wrap-list">
                            <div className="table-list">
                                <table className="table_list">
                                    <thead>
                                    <tr className="table100-head">
                                        <th className="column_1">Name</th>
                                        <th className="column_2">Application Form</th>
                                        <th className="column_3">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*<tr>*/}
                                    {/*    <td className="column_1" >dummy1</td>*/}
                                    {/*    <td className="column_2" href={'#'}>dummy2</td>*/}
                                    {/*    <td className="column_3">*/}
                                    {/*        <button style={{'margin-right': '20px', 'border-radius' : '10px'}} onClick={() => this.passHandler('')}>합격</button>*/}
                                    {/*        <button style={{'border-radius' : '10px'}} onClick={() => this.failHandler('')}>불합격</button>*/}
                                    {/*    </td>*/}
                                    {/*</tr>*/}
                                        {this.state.applicantList.map(
                                            (applicant) => {
                                                return(
                                                        <tr>
                                                        <td className="column_1" >{applicant.user_name}</td>
                                                        <td className="column_2" > <a href={applicant.file}>{applicant.name}</a></td>
                                                        <td className="column_3">
                                                            <button className={'accept'} style={{'margin-right': '20px', 'border-radius' : '10px'}} onClick={() => this.passHandler(applicant)}>합격</button>
                                                            <button className={'decline'} style={{'border-radius' : '10px'}} onClick={() => this.failHandler(applicant)}>불합격</button>
                                                        </td>
                                                        </tr>
                                                )
                                            }
                                        )}
                                    </tbody>
                                </table>
                                <hr />
                                <button style={{'margin-bottom': '20px','border-radius' : '10px'}} onClick={this.returnButtonHandler}>돌아가기</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ApplicantList;
