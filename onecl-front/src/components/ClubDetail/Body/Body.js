import React, {Component} from 'react'
import CKEditor from 'ckeditor4-react'

const Document = ({title}) => {
    return(
        <div>
            <p>{title}</p>
        </div>
    );
};

const Member = ({name, auth_level}) => {
    const position = (auth_level) => {
        switch (auth_level){
            case 0 :
                return 'master';
            case 1 :
                return 'executive';
            case 2 :
                return 'normal member';
            default :
                return 'normal member';
        }
    };

    return(
        <div>
            <p style={{'display':'inline-block', 'width':'250px'}}>{name}</p>
            <p style={{'display':'inline-block', 'width':'250px'}}>{position(auth_level)}</p>
        </div>
    );
};


class Body extends Component{
    state = {
        isPost : false,
        docTitle : null,
        docContent : '내용을 작성하세요.',
    };
    initialize = () => {
        const { getAuthLevel, getMemberList, getDocumentList, getInfoPost } = this.props;
        const {id} = this.props;

        getAuthLevel(id);
        getMemberList(id);
        getDocumentList(id);
        getInfoPost(id);
    };

    componentDidMount() {
        this.initialize();
    };

    postButtonHandler = () => {
        this.setState({
            isPost : true,
        })
    };

    returnButtonHandler = () => {
        if (window.confirm('작성중인 정보가 사라집니다. 계속하시겠습니까?'))
        {
            this.setState({
                isPost : false,
                docTitle : null,
                docContent : '내용을 입력하세요.',
            })
        }
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

    documentSubmitHandler = () => {
        const {submitDocument} = this.props;
        const {docTitle, docContent} = this.state;
        submitDocument(docTitle, docContent);
    };

    componentWillReceiveProps(props){
        if(this.props.componentStatus !== props.componentStatus){
            this.setState({
                isPost : false,
                docTitle : null,
                docContent : '내용을 입력하세요.'
            })
        }
    };

    render() {
        const {componentStatus} = this.props;
        const {documentList, memberList, infoPost} = this.props;
        const tmp_docList = [
            {
                id: 1,
                title: 'first post',
            },
            {
                id: 2,
                title: 'second post',
            },
            {
                id: 3,
                title: 'third post',
            },
        ];
        const tmp_memList = [
            {
                id: 1,
                name: 'baek geun young',
                auth_level: 0,
            },
            {
                id: 2,
                name: 'ahn jae won',
                auth_level: 3,
            },
            {
                id: 3,
                name: 'seo jun won',
                auth_level: 2,
            },
        ];
        const tmp_infoPost = 'his information post';

        const docList = tmp_docList.map(
            (document) => {
                return(
                    <Document
                        key={document.id}
                        title={document.title}
                    />
                )
            }
        );

        if(componentStatus === 2){
            return(
                tmp_memList.map(
                    (member) => {
                        return(
                            <Member
                                key={member.id}
                                name={member.name}
                                auth_level={member.auth_level}
                            />
                        )
                    }
                )
            )
        }
        if(componentStatus === 1){
            if(this.state.isPost){
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
                        />
                        <button onClick={this.documentSubmitHandler} style={{'marginRight' : '20px'}}>작성</button>
                        <button onClick={this.returnButtonHandler}>돌아가기</button>
                        {/*<button onClick={() => {console.log(this.state.docContent)}}>show me doc content</button>*/}
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <button onClick={this.postButtonHandler}>글쓰기</button>
                        <div>
                            {docList}
                        </div>
                    </div>
                )
            }
        }
        else{
            return(
                <div>
                    {/*{infoPost}*/}
                    {tmp_infoPost}
                </div>
            )
        }
    }
}

export default Body;
