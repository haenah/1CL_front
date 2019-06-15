import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem} from "reactstrap";

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    this.props.fetchJoin();
  }

  loginCheck() {
    if (!sessionStorage.getItem('token')) {
      this.props.history.push('/login');
    }
  }

  render() {
    const joinList = this.props.joinList;
    return(
      <div>
        {this.loginCheck()}
        <span>아이디: </span>
        <span>{sessionStorage.getItem('username')}</span>
        <br/>
        <span>이름: </span>
        <span>{sessionStorage.getItem('name')}</span>
        <br/>
        <span>Email: </span>
        <span>{sessionStorage.getItem('email')}</span>

        <div>
          내가 가입한 동아리:
          <br />
          <ListGroup>
            {joinList.results && joinList.results.map(join => <ListGroupItem key={join.club_id} tag={'a'} href={`/club/${join.club_id}`}>{join.club_name}</ListGroupItem>)}
          </ListGroup>
        </div>

      </div>

    );
  }
}

export default MyPage;
