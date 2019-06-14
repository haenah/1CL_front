import React, {Component} from 'react';

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  loginCheck() {
    if (!sessionStorage.getItem('token')) {
      this.props.history.push('/login');
    }
  }

  render() {
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
      </div>
    );
  }
}

export default MyPage;
