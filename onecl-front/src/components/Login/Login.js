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

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      alert('로그인에 성공하였습니다.');
      this.props.history.push('/');
    }
  }

  onLogin = (info) => {
    this.props.loginRequest(info);
  };

  onAlreadyLoggedIn() {
    if (sessionStorage.getItem('token')) {
      this.props.history.push('/');
    }
  };

  keyPressHandler = (e) => {
    if (e.key === 'Enter') this.onLogin(this.state)
  }

  render() {
    return (
        <div>
          {this.onAlreadyLoggedIn()}
        {/*<div className='heading-space'>*/}
          {/*<div className='heading'>*/}
            {/*<div className='options'>*/}
              {/*<div className='search-bar'>*/}
                {/*<div className='search'>*/}
                  {/*<input className='search-type' maxLength='2048' type='text' placeholder='Search'></input>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<div className='login-section'>*/}
                {/*<div className='line'></div>*/}
                {/*<a className='login' href='/login'>Login</a>*/}
                {/*<a className='signup' href='/register'>Sign Up Here</a>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}

      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login">
            <form className='sign-up-form'>
                <span className="login-form-title">
                  <h2>Login</h2>
                </span>

              <div className='id'>
                <span>
                  <input
                      type={'text'}
                      placeholder={'Username'}
                      value={this.state.username}
                      onChange={e => this.setState({ username: e.target.value })}
                      onKeyPress={this.keyPressHandler}
                  />
                </span>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </span>
              </div>

              <div className='pw'>
                <span>
                  <input
                      type={'password'}
                      placeholder={'Password'}
                      value={this.state.password}
                      onChange={e => this.setState({ password: e.target.value })}
                      onKeyPress={this.keyPressHandler}
                  />
                </span>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div className="text-center">
						<span className="txt1">
							Forgot&nbsp;
						</span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>

              <div>
                <button
                    className='login-button'
                    //color={'primary'}
                    type='button'
                    onClick={() => this.onLogin(this.state)}
                >
                  Log In
                </button>

                <div className="text-center p-t-70">
                  <a className="txt2" href="/register">
                    Create your Account
                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                  </a>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    )
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func,
  isFetching: PropTypes.bool,
  authenticated: PropTypes.bool,
};

export default Login
