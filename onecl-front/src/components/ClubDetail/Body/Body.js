import React, {Component} from 'react'
import CKEditor from 'ckeditor4-react'
import './Body.css'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {REQUEST_URL} from "../../../Constants/Constants";
import {Button, Col, Input, Row} from "reactstrap";
import Moment from "react-moment";
import {AUTH_LEVEL_STRINGS} from '../../../Constants/Constants';


class Body extends Component{
    state = {
        isPost : false,
        docTitle : null,
        docContent : '내용을 작성하세요.',
        selectedType : 5,
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
                        Cell: row => <Moment format={'YYYY년 M월 DD일 LT'}>{row.original.date}</Moment>
                    },
                    {
                        Header: '작성자',
                        Cell: row => <span>{row.original.owner_name} <span style={{fontSize: '14px', color: 'grey'}}>({row.original.owner_username})</span></span>,
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

        if(componentStatus === 3){
            return(
                <div className={'adminOptionWrapper'}>
                    <p className={'adminMessage'}>{'원하시는 옵션을 선택하세요.'}</p>
                    <div className={'logoWrapper'}>
                        <img style={{'height' : '70px'}} src='http://3.219.198.5:8000/media/1CL_logo.png'/>
                    </div>
                    <div className={'adminOptionSet'}>
                        <button className={'adminOption1'} onClick={() => {history.push(`/club/${id}/fix_club_info`)}}>동아리 기본 정보 수정</button>
                        <button className={'adminOption2'} onClick={() => {history.push(`/club/${id}/fix_club_post`)}}>동아리 소개글 수정</button>
                        <br></br>
                        <button className={'adminOption3'} onClick={() => {history.push(`/club/${id}/recruiter`)}}>지원자 관리</button>
                        <button className={'adminOption4'} onClick={() => {history.push(`/club/${id}/assign_next_master`)}}>차기 회장 임명</button>
                        <br></br>
                        <button className={'adminOption5'} onClick={() => {history.push(`/club/${id}/manage_doctype`)}}>게시판 카테고리 추가</button>
                        <button className={'adminOption6'}>CHOOSE ONE</button>

                    </div>
                </div>
            )
        }

        if(componentStatus === 2){
            return(
                <div>
                    <div>
                        {memberList && <ReactTable
                          data={memberList.results}
                          columns={[
                              {
                                  Header: "회원 ID",
                                  accessor: "user_username",
                              },
                              {
                                  Header: "회원 이름",
                                  accessor: "user_name",
                              },
                              {
                                  Header: "등급",
                                  Cell: row => (<span>{AUTH_LEVEL_STRINGS[row.original.auth_level]}</span>)
                              },
                              {
                                  Header: "변경",
                                  Cell: row => (<Button size={'sm'} style={{'display' : 'inline-block'}} color={row.original.auth_level === 3 ? 'secondary' : 'primary'} disabled={row.original.auth_level === 3} onClick={() => this.authChangeButtonHandler(row.original.club, row.original.id, row.original.user_username)}>등급 변경</Button>)
                              },
                          ]}
                          defaultPageSize={20}
                          style={{
                              height: '400px',
                          }}
                          className={'-striped -highlight'}
                        />}
                    </div>
                </div>
            )
        }
        if(componentStatus === 1){
            if(this.state.isPost){
                return(
                    <div className="limiter">
                        <div className="container-login100">
                            <div className="wrap-write">
                                <span className="sign-up-form-title">
                                  <h2>게시판 글쓰기</h2>
                                </span>
                                <div className="post">
                                    <textarea style={{
                                        'width' : '90%',
                                        'height' : '30px',
                                        'margin' : '20px',
                                    }}
                                      placeholder={'제목'}
                                      onChange={this.docTitleInputHandler}/>
                                    <select style={{'display':'inline-block', 'marginLeft': '20px'}} onChange={(e) => {this.setState({selectedType: e.target.value})}}>
                                        {docTypeList && docTypeList.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                                    </select>
                                    <CKEditor
                                        data={this.state.docContent}
                                        onChange={this.editorChangeHandler}
                                        style={{
                                            'margin' : '20px',
                                        }}
                                        config={{
                                            filebrowserBrowseUrl: `http://3.219.198.5:8000/upload/image/?clubID=${id}`,
                                            filebrowserUploadUrl: `http://3.219.198.5:8000/upload/image/?clubID=${id}`,
                                        }}
                                    />
                                    {/*<button onClick={() => {console.log(this.state.docContent)}}>show me doc content</button>*/}
                                </div>

                                <button style={{'margin' : '20px 0 20px 0', 'padding' : '0 20px 0 20px', 'border-radius' : '10px'}} onClick={this.documentSubmitHandler}>작성</button>
                                <button style={{'border-radius' : '10px', 'margin':'20px 0 20px 0'}} onClick={this.returnButtonHandler}>돌아가기</button>
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div style={{marginTop: '10px'}} className={'feed'}>
                      <Row>
                        <Col className={'col-md-2'}>
                          <Input bsSize={'small'} type={'select'} label={'게시판 필터'} onChange={this.categorySearchHandler}>
                              <option value= 'all'>전체</option>
                              {docTypeList && docTypeList.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                          </Input>
                        </Col>
                        <Col>
                          <Button color={'info'} style={{'borderRadius' : '10px'}} onClick={this.postButtonHandler}>글쓰기</Button>
                        </Col>
                      </Row>
                        <div style={{marginTop: '15px'}} className={'docListWrapper'}>
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
