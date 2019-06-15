import React, { Component } from 'react'
import './Signup.css'
import {Button} from "reactstrap";

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      id: '',
      pw: '',
      pw_again: '',
      email: '',
      code: '',

      pwIsValid: false,
      pwCompare: false,

      // UI상태 저장용
      buttonPressed_email: false,
    }
  }

  pwRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20}$)");

  handleChange = (e) => {
      switch (e.target.name) {
          case 'pw':
              if (e.target.name === 'pw') {
                  if (this.pwRegex.test(e.target.value)) {
                      this.setState({
                          pw: e.target.value,
                          pwIsValid: true
                      });
                  }
                  else {
                      this.setState({
                          pw: e.target.value,
                          pwIsValid: false
                      });
                  }
              }
              break;

          case 'pw_again':
              if (e.target.value === this.state.pw) {
                  this.setState({
                      pw_again: e.target.value,
                      pwCompare: true
                  });
              }
              else {
                  this.setState({
                      pw_again: e.target.value,
                      pwCompare: false
                  });
              }
              break;

          case 'id':
              this.props.onIdValidation(0);
              this.setState({
                  id: e.target.value
              });
              break;

          default:
              this.setState({
                  [e.target.name]: e.target.value
              });
              break;
      }
  };

  handleClick_id = () => {
    this.props.onConfirmId(this.state.id);
  };

  handleClick_email = () => {
    this.props.onSendEmail(this.state.email+'@snu.ac.kr');
    this.props.onEmailValidation(0);
    this.setState({
      buttonPressed_email: true
    });
  }

  handleClick_code = () => {
    this.props.onConfirmCode(this.state.code);
    this.setState({
      buttonPressed_code: true,
    })
  }

  handleClick_signUp = () => {
    const {name,id,pw,email, pwIsValid, pwCompare} = this.state;
    const {idIsValid, emailIsValid} = this.props;
    if(!(idIsValid && emailIsValid && pwIsValid && pwCompare)){
      alert('입력하신 정보가 잘못되었거나 유효하지 않습니다. 다시 한 번 확인해 주세요.');
    }
    else {
        try {
            this.props.onSignUp(name,id,pw,email+'@snu.ac.kr');
            alert("회원가입에 성공하였습니다.");
            this.props.history.push("/login/");
        } catch(e){
            alert("회원가입 실패 :" + e.message);
        }
    }
  }

  idUI = () => {
    const {idIsValid} = this.props;
    if(idIsValid===0) return <span className='check' style={{color:'blue'}}>아이디 중복체크를 완료해주세요.</span>
    else if(idIsValid===1) return <span className='check' style={{color:'green'}}>유효한 아이디입니다.</span>
    else return <span className='check' style={{color:'red'}}>유효하지 않거나 이미 가입된 아이디입니다.</span>
  }

  emailUI = () => {
    const {emailSent} = this.props;
    const {buttonPressed_email} = this.state;
    const {codeUI} = this;
    if(!buttonPressed_email) return;
    else{
      if(emailSent===0) return;
      else if(emailSent===2) return <span style={{color:'red'}}>유효하지 않거나 중복된 이메일입니다.</span>
      else return (
          <div>
            <input name='code' type='text' onChange={this.handleChange} />
            <button type='button' onClick={this.handleClick_code}>인증</button>
            {codeUI()}
          </div>
      )
    }
  }

  codeUI = () => {
    const {emailIsValid} = this.props;
    if(emailIsValid===0) return <span className='check' style={{color:'blue'}}>코드 인증을 완료해주세요.</span>
    else if(emailIsValid===1) return <span className='check' style={{color:'green'}}>인증이 완료되었습니다.</span>
    else return <span className='check' style={{color:'red'}}>인증에 실패하였습니다.</span>
  }

  render(){
    const {pw, pw_again, pwIsValid, pwCompare} = this.state;
    const {idUI, emailUI} = this;
    return (
        <div>

          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100">

                <form className='sign-up-form'>
                  <span className="sign-up-form-title">
                    <h2>Sign Up</h2>
                  </span>

                  <div className='name'>
                    <span>
                    <input className='name-input' name='name' type='text' maxLength='20' placeholder='이름' onChange={this.handleChange} />
                    <span className="focus-input100"></span>
                      <span className="symbol-input100">
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </span>
                    </span>
                  </div>

                  <div>
                    <div className='id'>
                      <span className='id-in'>
                        <input className='id-input' name='id' type='text' maxLength='20' placeholder='Username' onChange={this.handleChange} />
                      </span>
                      <button className='confirmation' type='button' onClick={this.handleClick_id}>중복체크</button>
                      <span className="focus-input100"></span>
                      <span className="symbol-input100">
                          <i className="fa fa-id-card-o" aria-hidden="true"></i>
                        </span>
                    </div>
                      {idUI()}
                  </div>

                  <div>
                    <div className='pw'>
                      <span>
                      <input name='pw' type='password' maxLength='20' placeholder='비밀번호' onChange={this.handleChange} />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                      </span>
                    </div>
                      {(pw!=='') && ( !pwIsValid && <span className='check' style={{color: 'red'}}>비밀번호는 영어 대소문자, 숫자, 특수문자를 혼합한 8글자 이상이어야 합니다.</span> )}
                  </div>

                  <div>
                    <div className='pw-again'>
                      <span>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                      <input name='pw_again' type='password' maxLength='20' placeholder='비밀번호 확인' onChange={this.handleChange} />
                      </span>
                    </div>
                      {(pw_again!=='') && ( !pwCompare && <span className='check' style={{color: 'red'}}>입력하신 비밀번호와 일치하지 않습니다.</span> )}
                  </div>

                  <div>
                    <div className='email'>
                      <span className='snu-email'><input name='email' className='email-add' type='text' placeholder='이메일' onChange={this.handleChange} />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                      </span>
                      <h4>@snu.ac.kr</h4>
                      <button className='verify' type='button' onClick={this.handleClick_email}>인증코드 전송</button>
                    </div>
                      {emailUI()}
                  </div>
                  <br /><br />
                  <button className='sign-up-button' type='button' onClick={this.handleClick_signUp}>회원가입</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
  }
}



export default SignUp
