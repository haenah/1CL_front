import React, {Component} from 'react'
import axios from 'axios'
import './FileSubmit.css'
import {REQUEST_URL} from "../../../Constants/Constants";

class FileSubmit extends Component{
    state={
        selectedFile : null,
    };

    fileSelectHandler = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    };

    fileSubmitHandler = async () => {
        const {clubID} = this.props;
        const url = `${REQUEST_URL}/upload/file/?clubID=${clubID}`;
        const tokenString = 'token ' + sessionStorage.getItem('token');
        const config = {
            headers: {
                'content-type' : 'multipart/form-data',
                'authorization' : tokenString,
            }
        };
        const fd = new FormData();
        fd.append('file', this.state.selectedFile, this.state.selectedFile.name);

        try{
            await axios.post(url, fd, config);
            alert('동아리 지원이 완료되었습니다.');
            this.props.history.push(`/club/${clubID}`)
        } catch(e){
            alert('이미 지원한 동아리입니다.');
        }
    };

    checkAuth = (authLevel) => {
        if(authLevel && authLevel > 0){
            alert('이미 가입되어 있는 동아리입니다.');
            this.props.history.push(`/club/${this.props.clubID}`)
        }
        if(authLevel && authLevel === -1){
            alert('로그인 후 이용할 수 있는 기능입니다.');
            this.props.history.push(`/club/${this.props.clubID}`)
        }
    };

    componentDidMount(){
        const {getApplyMessage, getAuthLevel, clubID} = this.props;
        getAuthLevel(clubID);
        getApplyMessage(clubID);
    };

    componentWillReceiveProps(props){
        if(props.authLevel !== this.props.authLevel){
            this.checkAuth(props.authLevel)
        }
    }

    render(){
        const {applyMessage} = this.props;
        return(
            <div className="limiter">
                <div className="container-apply">
                    <div className="wrap-apply">
                        <div className={'fileSubmitWrapper'}>
                            <p className={'clubApplyTitle'}><strong>동아리 지원</strong></p>
                            <div className={'applyMessage'}>
                                {
                                    applyMessage && applyMessage.split('\n').map( line => {
                                        return (<span>{line}<br/></span>)
                                    })
                                }
                            </div>
                            <hr/>
                            <div className={'submit-file'}>
                                <input className={'upload'} type={'file'} style={{'textAlign':'center'}}onChange={this.fileSelectHandler} />
                                <span className="focus-file"></span>
                                    <span className="symbol-file">
                                      <i className="fa fa-folder" aria-hidden="true"></i>
                                    </span>
                            </div>
                            <button style={{'marginRight' : '20px', 'border-radius' : '10px'}} onClick={this.fileSubmitHandler}>제출</button>
                            <button style={{'border-radius' : '10px', 'margin':'20px'}} onClick={() => {this.props.history.push(`/club/${this.props.clubID}`)}}>돌아가기</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FileSubmit;
