import React, {Component} from 'react';
import {Card, CardBody, CardHeader, CardFooter, CardText, CardTitle} from 'reactstrap';
import {REQUEST_URL} from "../../../Constants/Constants";

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
  }

  render() {
    return(
      <div>
        <Card>
          <CardHeader>
            {tmp_doc.title}
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <span>{tmp_doc.writer}</span>
              <span>{tmp_doc.date}</span>
            </div>
          </CardHeader>
          <CardBody>
            <div
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',}}
              dangerouslySetInnerHTML={
                {__html : tmp_doc.content}
              }>
            </div>
          </CardBody>
          <CardFooter>
            댓글
            <br />
              {tmp_doc.comments.map(comment =>
                <Card style={{marginTop: '5px'}}>
                  <CardTitle>
                    {comment.owner}
                  </CardTitle>
                  <CardText>
                    {comment.content}
                  </CardText>
                </Card>
              )}
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default ClubDocument;
