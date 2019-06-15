import React, {Component} from 'react'
import './ApplicantList.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
        const url = `http://127.0.0.1:8000/upload/file/?clubID=${this.props.id}`;
        try{
            const data = await axios.get(url);
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

    removeFromList = async (id) => {
        const delete_url = `http://127.0.0.1:8000/upload/file/${id}`;
        try{
            const response = await axios.delete(delete_url);
            console.log(response)
        }catch (e) {
            alert(e)
        }

        const get_url = `http://127.0.0.1:8000/upload/file/?clubID=${this.props.id}`;
        try{
            const response = await axios.get(get_url);
            this.setState({
                applicantList : response.data.results,
            })
        }catch (e) {
            alert(e)
        }
    };

    passHandler = async (applicant) => {
        const url = `http://127.0.0.1:8000/join/`;
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
        this.removeFromList(applicant.id)
    };

    failHandler = async (applicant) => {
        alert('불합격 처리되었습니다.')
        this.removeFromList(applicant.id)
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
                                        {this.state.tmp_applicantList.map(
                                            (applicant) => {
                                                return(
                                                        <tr>
                                                        <td className="column_1" >{applicant.user}</td>
                                                        <td className="column_2" href={applicant.file}>{applicant.name}</td>
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
