import React, {Component} from 'react'
import CKEditor from 'ckeditor4-react'
import {Link} from 'react-router-dom';
import './Body.css'
import {Table} from "reactstrap";
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const Member = ({name, auth_level, clubID, joinID, buttonClickHandler}) => {
    const position = (auth_level) => {
        switch (auth_level){
            case 1 :
                return '일반 회원';
            case 2 :
                return '임원';
            case 3 :
                return '회장';
            default :
                return '비회원';
        }
    };

    return(
        <div style={{'margin' : '20px'}}>
            <p style={{'display':'inline-block', 'width':'250px'}}>{name}</p>
            <p style={{'display':'inline-block', 'width':'250px'}}>{position(auth_level)}</p>
            <button className='change-lvl-button' disabled={auth_level === 3} onClick={() => buttonClickHandler(clubID, joinID, name)}>등급 변경</button>
        </div>
    );
};

class Body extends Component{
    state = {
        isPost : false,
        docTitle : null,
        docContent : '내용을 작성하세요.',
        selectedType : 1,
    };


    initialize = () => {
        const { getAuthLevel, getMemberList, getDocumentList, getInfoPost, getDocTypeList, searchDocument } = this.props;
        const {clubID} = this.props;

        getAuthLevel(clubID);
        getMemberList(clubID);
        searchDocument('all', clubID);
        getInfoPost(clubID);
        getDocTypeList(clubID);
    };

    componentDidMount() {
        this.initialize();
    };

    postButtonHandler = () => {
        this.setState({
            isPost : true,
        });
        this.props.startPost();
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
        const {submitDocument, clubID} = this.props;
        const {docTitle, docContent, selectedType} = this.state;
        submitDocument(docTitle, docContent, selectedType, clubID);
    };

    categorySearchHandler = (e) => {
        const {searchDocument, clubID} = this.props;
        searchDocument(e.target.value, clubID);
    };

    componentWillReceiveProps(props){
        if(this.props.componentStatus !== props.componentStatus){
            this.setState({
                isPost : false,
                docTitle : null,
                docContent : '내용을 입력하세요.'
            })
        }

        if((this.props.post_complete !== props.post_complete) && props.post_complete){
            alert("게시글 작성에 성공했습니다.");
            this.setState({
                isPost : false,
                docTitle : null,
                docContent : '내용을 입력하세요.'
            })
        }
    };

    authChangeButtonHandler = (clubID, joinID, username) => {
        console.log(this.props.memberList);
        this.props.authChangeModalVisualize(clubID, joinID, username);
    };

    renderDocList(docList, clubID) {
        return (
          <div>
              <ReactTable
                getTrProps={(state, rowInfo) => ({
                    onClick: () => this.props.history.push(`/club/${clubID}/document/${rowInfo.original.id}`)
                })}
                data={docList}
                columns={[
                    {
                        Header: "제목",
                        accessor: "title",
                    },
                    {
                        Header: "게시판",
                        accessor: 'type_name',
                    },
                    {
                        Header: "날짜",
                        accessor: 'date',
                    },
                    {
                        Header: '작성자',
                        accessor: 'owner',
                    }
                ]}
                defaultPageSize={20}
                style={{
                    height: '400px',
                }}
                className={'-striped -highlight'}
              />
          </div>
        );
    }

    render() {
        const {componentStatus, id, history} = this.props;
        const {documentList, memberList, infoPost, docTypeList} = this.props;

        const memList = !memberList.results ? null : memberList.results.map(
            (member) => {
                return(
                    <div>
                        <Member
                            key={member.id}
                            name={member.user}
                            auth_level={member.auth_level}
                            joinID={member.id}
                            clubID={member.club}
                            buttonClickHandler={this.authChangeButtonHandler}
                        />
                        <hr/>
                    </div>
                )
            }
        );

        if(componentStatus === 3){
            return(
                <div className={'adminOptionWrapper'}>
                    <p className={'adminMessage'}>{'원하시는 옵션을 선택하세요.'}</p>
                    <div className={'adminOptionSet'}>
                        <button className={'adminOption'} onClick={() => {history.push(`/club/${id}/fix_club_info`)}}>동아리 기본 정보 수정</button>
                        <button className={'adminOption'} onClick={() => {history.push(`/club/${id}/fix_club_post`)}}>동아리 소개글 수정</button>
                        <button className={'adminOption'} onClick={() => {history.push(`/club/${id}/recruiter`)}}>지원자 관리</button>
                        <button className={'adminOption'} onClick={() => {history.push(`/club/${id}/assign_next_master`)}}>차기 회장 임명</button>
                    </div>
                </div>
            )
        }

        if(componentStatus === 2){
            return(
                <div className='container-notice'>
                <div className={'memListWrapper'}>
                    <div className={'labelWrapper'}>
                        <p className={'memListLabel'}>회원 이름</p>
                        <p className={'memListLabel'}>등급</p>
                        <hr/>
                    </div>
                    {memList}
                </div>
                </div>
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
                        <select style={{'marginLeft' : '20px',}} onChange={(e) => {this.setState({selectedType: e.target.value})}}>
                            {docTypeList && docTypeList.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                        </select>
                        <CKEditor
                            data={this.state.docContent}
                            onChange={this.editorChangeHandler}
                            style={{
                                'margin' : '20px',
                            }}
                            config={{
                                filebrowserBrowseUrl: `http://127.0.0.1:8000/upload/image/?clubID=${id}`,
                                filebrowserUploadUrl: `http://127.0.0.1:8000/upload/image/?clubID=${id}`,
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
                    <div className={'feed'}>
                        <select className={'categorySelect'} onChange={this.categorySearchHandler}>
                            <option value= 'all'>전체</option>
                            {docTypeList && docTypeList.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                        </select>
                        <button className={'postButton'} style={{'border-radius' : '10px'}} onClick={this.postButtonHandler}>글쓰기</button>
                        <div className={'docListWrapper'}>
                            {/*{docList}*/}
                            {this.renderDocList(documentList, id)}
                        </div>
                    </div>
                )
            }
        }
        else{
            return(
                <div className={'container-notice'}>
                    <div className={'wrap-notice'}>
                        <div className={'notice'}
                            dangerouslySetInnerHTML={
                            {__html : infoPost}
                        }>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Body;
