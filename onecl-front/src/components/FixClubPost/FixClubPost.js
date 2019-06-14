import React, {Component} from 'react'
import './FixClubPost.css'
import CKEditor from 'ckeditor4-react'

class FixClubPost extends Component {
    state={
        docTitle : null,
        docContent : null,
    };

    docTitleInputHandler = (e) => {
        this.setState({
            docTitle : e.target.value,
        });
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


    render(){
        return(
            <div style={{
                'marginTop' : '20px',
                'border' : '1px solid grey',
                'width' : '100%',
                'boxShadow' : '3px 3px 3px 3px gray',
            }}>
                <textarea style={{
                            'width' : '90%',
                            'height' : '30px',
                            'margin' : '20px',
                            }}
                          placeholder={'제목'}
                          onChange={this.docTitleInputHandler}/>
                <select style={{'marginLeft' : '20px',}}>
                    <option value = '공지게시판'>공지게시판</option>
                    <option value = '자유게시판'>자유게시판</option>
                </select>
                <CKEditor
                    data={this.state.docContent}
                    onChange={this.editorChangeHandler}
                    style={{
                        'margin' : '20px',
                    }}
                    config={{
                        filebrowserBrowseUrl: 'http://127.0.0.1:8000/image/',
                        filebrowserUploadUrl: 'http://127.0.0.1:8000/image/',
                    }}
                />
                <button onClick={this.documentSubmitHandler} style={{'marginRight' : '20px'}}>작성</button>
                <button onClick={this.returnButtonHandler}>돌아가기</button>
                {/*<button onClick={() => {console.log(this.state.docContent)}}>show me doc content</button>*/}
            </div>
        )
    }
}

export default FixClubPost
