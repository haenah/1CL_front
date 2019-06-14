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

        <ListGroup>
          {joinList.results && joinList.results.map(club => <ListGroupItem key={club.id} tag={'a'} href={`/club/${club.id}`}>{club.id}</ListGroupItem>)}
        </ListGroup>

      </div>

    );
  }
}

export default MyPage;
