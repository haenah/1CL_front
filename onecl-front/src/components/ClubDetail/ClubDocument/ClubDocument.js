import React, {Component} from 'react';
import {Card, CardBody, CardHeader, CardFooter, CardText, CardTitle, Input, Button, Col, Row} from 'reactstrap';
import {REQUEST_URL} from "../../../Constants/Constants";
import Moment from 'react-moment';

const tmp_doc =
  {
    id: 1,
    title: 'first post',
    content: `<p>HIS에서 동아리원을 모집합니다.</p><p><strong>지원기간 : 5/30 ~ 5/31</strong></p><img style="height:200px; width:142px" src="${REQUEST_URL}/media/0005.jpg"/>`,
    type: 'announcement',
    date: 'date1',
    writer: 'baek',
    comments: [
      {
        id: 1,
        owner: 'someone',
        content: 'something',
        date: 'date',
        docID: 5,
      },
      {
        id: 2,
        owner: 'someone2',
        content: 'something2',
        date: 'date2',
        docID: 5,
      },

    ]
};

class ClubDocument extends Component {
  constructor(props) {
    super(props);
    this.state= {
      comment: '',
    }
  }

  componentWillMount() {
    this.props.getDocument(this.props.docID);
  }

  checkForDocument(clubID) {
    if (this.props.error) {
      this.props.history.push(`/club/${clubID}`);
    }
  }

  handleCommentSubmit() {
    console.log('test');
    const {docID} = this.props;
    this.props.addComment(docID, this.state.comment);
    this.setState({comment: ''});
  }

  render() {
    console.log('doc',this.props);
    const {document, clubID} = this.props;
    return(
      <div>
        {this.checkForDocument(clubID)}
        {document &&  <Card>
          <CardHeader>
            <div style={{display: 'flex', justifyContent: 'space-between',}}>
              <h3>{document.document.title}</h3>
              <h5>작성자: {document.document.owner_name}</h5>
            </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontSize: '14px', color: 'grey'}}><Moment format={'YYYY년 M월 DD일 LT'}>{document.document.date}</Moment></span>
                <span style={{fontSize: '14px', color: 'grey'}}>조회수 {document.document.view}</span>
              </div>
          </CardHeader>
          <CardBody>
            <div
              // style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',}}
              dangerouslySetInnerHTML={
                {__html : document.document.content}
              }>
            </div>
          </CardBody>
          <CardFooter>
            댓글
            <br />
              {document.comments.map(comment =>
                <Card key={comment.id} style={{marginTop: '5px', padding: '12px'}}>
                  <CardTitle style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h5>{comment.owner_name}</h5>
                    <span style={{fontSize: '14px', color: 'grey'}}><Moment format={'YYYY년 M월 DD일 LT'}>{comment.date}</Moment></span>
                  </CardTitle>
                  <CardText>
                    {comment.content}
                  </CardText>
                </Card>
              )}
          </CardFooter>
          <Card style={{padding: '15px', display: 'flex', justifyContent: 'space-between'}}>
            <Row>
              <Col className={'col-md-11'}>
                <Input type={'textarea'} placeholder={'댓글을 입력하세요.'} value={this.state.comment} onChange={e => this.setState({comment: e.target.value})} />
              </Col>
              <Col className={'col-md-1'}>
                <Button style={{marginTop: '10px'}} onClick={() => this.handleCommentSubmit()} color={'primary'}>입력</Button>
              </Col>
            </Row>
          </Card>
        </Card>
        }
      </div>
    );
  }
}

export default ClubDocument;
