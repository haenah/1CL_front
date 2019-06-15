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
        const url = `${REQUEST_URL}/upload/file/?clubID=${this.props.id}`;
        try{
            const data = await axios.get(url);
            console.log(data);
            this.setState({
                applicantList: data.data.results,
            });
            // this.getUserInfo();
        }catch (e) {
            alert('an error was caught :' + e);
        }
    };
    //
    // getUserInfo = () => {
    //     this.setState({
    //         new_applicantList : this.state.applicantList.map(
    //             async (applicant) => {
    //                 const url = `http://127.0.0.1:8000/auth/user/${applicant.user}`;
    //                 const response = await axios.get(url);
    //             }
    //         )
    //     });
    //     console.log(this.state.new_applicantList)
    // };

    componentDidMount(){
        this.initialize();
    };

    returnButtonHandler = () => {
        this.props.history.push(`/club/${this.props.id}`);
    };

    removeFromList = async (id) => {
        const delete_url = `${REQUEST_URL}/upload/file/${id}`;
        try{
            const response = await axios.delete(delete_url);
            console.log(response)
        }catch (e) {
            alert(e)
        }

        const get_url = `${REQUEST_URL}/upload/file/?clubID=${this.props.id}`;
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
        this.removeFromList(applicant.id)
    };

    failHandler = async (applicant) => {
        alert('불합격 처리되었습니다.')
        this.removeFromList(applicant.id)
    };

    render(){
        return(
            <div>
                {this.state.tmp_applicantList.map(
                    (applicant) => {
                        return(
                            <div>
                                <p style={{'display': 'inline-block'}}>{applicant.user}</p>
                                <a style={{'display': 'inline-block'}} href={applicant.file}>{applicant.name}</a>
                                <button onClick={() => this.passHandler(applicant)}>합격</button>
                                <button onClick={() => this.failHandler(applicant)}>불합격</button>
                            </div>
                        )
                    }
                )}
                <hr />
                <button onClick={this.returnButtonHandler}>돌아가기</button>
            </div>
        )
    }
}

export default ApplicantList;
