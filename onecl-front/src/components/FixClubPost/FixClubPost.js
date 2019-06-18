import React, {Component} from 'react'
import './FixClubPost.css'
import CKEditor from 'ckeditor4-react'
import {REQUEST_URL} from "../../Constants/Constants";
import axios from 'axios';
import * as actions from "../../actions/ClubDetail";
import api from "../../api";

class FixClubPost extends Component {
    state={
        docTitle : null,
        docContent : null,
        authLevel : 0,
    };

    editorChangeHandler = (e) => {
        this.setState({
            docContent : e.editor.getData(),
        });
    };

    returnButtonHandler = () => {
        if (window.confirm('작성중인 정보가 사라집니다. 계속하시겠습니까?'))
        {
            this.setState({
                docTitle : null,
                docContent : '내용을 입력하세요.',
            });
            this.props.history.push(`/club/${this.props.id}`);
        }
    };

    async componentDidMount(){
        const url = `http://3.219.198.5:8000/join/auth_level/?club=${this.props.id}`;
        const config = {
            headers : {
                'authorization' : 'token ' + sessionStorage.getItem('token')
            }
        };
        try{
            let response;
            if(sessionStorage.getItem('token') === null) response = await axios.get(url);
            else response = await axios.get(url, config);
            this.setState({
                authLevel : response.data.auth_level,
            });
            if(response.data.auth_level !== 3){
                console.log(response);
                alert('권한이 없습니다.');
                this.props.history.push(`/club/${this.props.id}`)
            }
        }catch (e) {
            console.log('get auth level : ' + e)
        }

        this.props.getInfoPost(this.props.id);
        this.setState({
            docContent : this.props.infoPost,
        });
    };

    documentSubmitHandler = () => {
        const {id, fixIntroPost} = this.props;
        const {docContent} = this.state;

        console.log(id, docContent);
        fixIntroPost(id, docContent);
        alert('소개글 수정이 완료되었습니다.');
        this.props.history.push(`/club/${id}`)
    };

    render(){
        if(this.state.authLevel !== 3) return null;
        return(
            <div className='limiter'>
                <div className='container-login100'>
                    <div className='wrap-fixinfo'>
                        <span className="fix-title">
                          <h2>동아리 소개글 수정</h2>
                        </span>
                        <div style={{
                            'marginTop' : '20px',
                            'border' : '1px solid grey',
                            'width' : '100%',
                            'boxShadow' : '3px 3px 3px 3px gray',
                        }}>
                            <CKEditor
                                data={this.state.docContent}
                                onChange={this.editorChangeHandler}
                                style={{
                                    'margin' : '20px',
                                }}
                                config={{
                                    filebrowserBrowseUrl: `${REQUEST_URL}/upload/image/?clubID=${this.props.id}`,
                                    filebrowserUploadUrl: `${REQUEST_URL}/upload/image/?clubID=${this.props.id}`,
                                }}
                            />
                            <button onClick={this.documentSubmitHandler} style={{'margin' : '20px', 'borderRadius': '10px'}}>작성</button>
                            <button style={{'borderRadius': '10px'}} onClick={this.returnButtonHandler}>돌아가기</button>
                            {/*<button onClick={() => {console.log(this.state.docContent)}}>show me doc content</button>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FixClubPost
