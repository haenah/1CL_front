import React, {Component} from 'react';
import {Badge, Button, Card, Col, Input, InputGroup, ListGroup, ListGroupItem, Row} from "reactstrap";

class AddClubDocumentCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategoryID: '',
      newCategoryName: '',
    }
  }

  componentWillMount() {
    this.props.fetchCategoryList(this.props.clubID);
  }

  handleDeleteButton() {
    const {selectedCategoryID} = this.state;
    if (!selectedCategoryID) {
      alert('게시판 유형을 선택해주세요.');
    } else {
      this.props.removeDocCategory(+selectedCategoryID, this.props.clubID);
    }
  }

  handleAddButton() {
    const {newCategoryName} = this.state;
    if (!newCategoryName) {
      alert('게시판 유형을 입력해주세요');
    } else {
      this.props.addDocCategory(newCategoryName, this.props.clubID);
    }
  }

  renderDocTypeList() {
    const {doc_type_list} = this.props;
    if (doc_type_list) {
      if (doc_type_list.results.length === 0) {
        return <span>현재 동아리 게시판이 없습니다. 게시판을 추가해보세요!</span>;
      } else {
        return (
          <div>
            <h3><Badge color={'info'}>게시판</Badge></h3>
            <ListGroup style={{marginTop: '15px'}}>
              {doc_type_list.results.map(type => <ListGroupItem className={'justify-content-between'} style={{minWidth: '500px'}} key={type.id}>{type.name}{type.club === null && <Badge color={'primary'} style={{marginLeft: '5px'}} pill>!</Badge>}</ListGroupItem>)}
            </ListGroup>
            <span style={{fontSize: '12px', color: 'grey', marginTop: '12px'}}>! 표시가 돼 있는 게시판은 기본 게시판이며 수정할 수 없습니다.</span>
          </div>
        );
      }
    }
    return null;
  }

  render() {
    console.log('props', this.props);
    const {doc_type_list} = this.props;
    return(
      <div>
        <Row>
          <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={'col-md-7'}>
            {/*<ListGroup>*/}
              {/*{doc_type_list && doc_type_list.results.map(type => {return (type.club !== null && <ListGroupItem key={type.id}>{type.name}</ListGroupItem>)})}*/}
            {/*</ListGroup>*/}
            {this.renderDocTypeList()}
          </Col>
          <Col className={'col-md-5'}>
            <h3><Badge color={'info'}>변경사항</Badge></h3>
            <div style={{marginTop: '15px'}}>
              <Input type={'select'} value={this.state.selectedCategoryID} onChange={e => this.setState({selectedCategoryID: e.target.value})}>
                <option value={''}>게시판 유형을 선택해주세요.</option>
                {doc_type_list && doc_type_list.results.map(type => {return (type.club !== null && <option value={type.id} key={type.id}>{type.name}</option>)})}
              </Input>
              <Button style={{marginTop: '10px'}} color={'danger'} onClick={() => this.handleDeleteButton()}>삭제</Button>
              <Input style={{marginTop: '10px'}} type={'text'} maxLength={20} value={this.state.newCategoryName} placeholder={'게시판 이름'} onChange={e => this.setState({newCategoryName: e.target.value})} />
              <Button style={{marginTop: '10px'}} color={'info'} onClick={() => this.handleAddButton()} >추가</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddClubDocumentCategory;
