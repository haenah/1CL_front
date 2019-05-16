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

        <body>

        <div className='heading-space'>
          <div className='heading'>
            <div className='options'>
              <div className='search-bar'>
                <div className='search'>
                  <input className='search-type' maxLength='2048' type='text' placeholder='Search'></input>
                </div>
              </div>
              <div className='login-section'>
                <div className='line'></div>
                <a className='login' href='/login'>Login</a>
                <a className='signup' href='/register'>Sign Up Here</a>
              </div>
            </div>
          </div>
        </div>

      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login">
            <form className='sign-up-form'>
                <span className="login-form-title">
                  <h2>Login</h2>
                </span>

              <div className='id'>
                <span>
                  <Input
                      type={'text'}
                      placeholder={'Username'}
                      value={this.state.username}
                      onChange={e => this.setState({ username: e.target.value })
                      }
                  />
                </span>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-id-card-o" aria-hidden="true"></i>
                </span>
              </div>

              <div className='pw'>
                <span>
                  <Input
                      type={'password'}
                      placeholder={'Password'}
                      value={this.state.password}
                      onChange={e => this.setState({ password: e.target.value })}
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
                <Button
                    className='login-button'
                    color={'primary'}
                    type={'submit'}
                    onClick={() => this.props.loginRequest(this.state)}
                >
                  Log In
                </Button>

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
        </body>
    )
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func,
};

export default Login
