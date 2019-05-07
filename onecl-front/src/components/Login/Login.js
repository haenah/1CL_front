import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Input} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <div>
        <div>
          <Input
            type={'text'}
            placeholder={'Username'}
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })
            }
          />
          <Input
            type={'password'}
            placeholder={'Password'}
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <div>
          <Button
            color={'primary'}
            type={'submit'}
            onClick={() => this.props.loginRequest(this.state)}
          >
            Log In
          </Button>
        </div>
      </div>

    )
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func,
};

export default Login
