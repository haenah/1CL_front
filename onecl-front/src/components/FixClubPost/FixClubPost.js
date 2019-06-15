import React, {Component} from 'react'
import './FixClubPost.css'
import CKEditor from 'ckeditor4-react'

class FixClubPost extends Component {
    state={
        docTitle : null,
        docContent : null,
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

    componentDidMount(){
        this.props.getInfoPost(this.props.id);
        this.setState({
            docContent : this.props.infoPost,
        })
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
        return(
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
                        filebrowserBrowseUrl: `http://127.0.0.1:8000/upload/image/?clubID=${this.props.id}`,
                        filebrowserUploadUrl: `http://127.0.0.1:8000/upload/image/?clubID=${this.props.id}`,
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
