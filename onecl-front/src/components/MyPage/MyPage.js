import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem} from "reactstrap";
import './MyPage.css'

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
        <div className="limiter-prof">
            <div className="container-prof">
                <div className="wrap-prof">
                    <div className="box-prof">
                    <div className="intro">
                    <div className="prof-img">
                    </div>
                  <div>
                    {this.loginCheck()}
                    <h3>
                      <span>이름: </span>
                      <span>{sessionStorage.getItem('name')}</span>
                      <br/>
                    </h3>


                      <h6 className="font-colour">
                          <span style={{'font-weight': 'bold'}}><strong>ID: </strong></span>
                        <span>{sessionStorage.getItem('username')}</span>
                        <br/>
                      </h6>

                      <h6>
                    <span style={{'font-weight': 'bold'}}><strong>EMAIL: </strong></span>
                    <span>{sessionStorage.getItem('email')}</span>
                      </h6>

                    <div>
                      내가 가입한 동아리:
                      <br />
                      <ListGroup>
                        {joinList.results && joinList.results.map(join => <ListGroupItem key={join.club_id} tag={'a'} href={`/club/${join.club_id}`}>{join.club_name}</ListGroupItem>)}
                      </ListGroup>
                    </div>
                  </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>

    );
  }
}

export default MyPage;
