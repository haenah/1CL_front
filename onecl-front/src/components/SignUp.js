import React, { Component } from 'react'

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
      buttonPressed_id: false,
      buttonPressed_email: false,
      buttonPressed_code: false,
      buttonPressed_emailagain: false,
    }
  }

  pwRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20}$)");

  handleChange = (e) => {
    if(e.target.name==='pw'){
      // 여기 this.pwRegex 대신에 안에 const pwRegex해야되나 고민했는데 일단 실행해보고 생각하자.
      if(this.pwRegex.test(e.target.value)){
        this.setState({
          pw: e.target.value,
          pwIsValid: true
        });
      }
      else{
        this.setState({
          pw: e.target.value,
          pwIsValid: false
        });
      }
    }

    else if(e.target.name==='pw_again'){
      if(e.target.value===this.state.pw){
        this.setState({
          pw_again: e.target.value,
          pwCompare: true
        });
      }
      else{
        this.setState({
          pw_again: e.target.value,
          pwCompare: false
        });
      }
    }

    else if(e.target.name==='id'){
      this.props.onIdValidation(false);
      this.setState({
        id: e.target.value
      });
    }

    else{
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  handleClick_id = () => {
    this.props.onConfirmId(this.state.id);
    this.setState({
      buttonPressed_id: true
    })
  }

  handleClick_email = () => {
    this.props.onSendEmail(this.state.email+'@snu.ac.kr');
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

  handleClick_emailagain = () => {
    this.props.onEmailValidation(false);
    this.props.onSendEmail(this.state.email+'@snu.ac.kr');
    this.setState({
      buttonPressed_code: false,
      buttonPressed_emailagain: true
    });
  }

  handleClick_signUp = () => {
    const {name,id,pw,email, pwIsValid, pwCompare} = this.state;
    const {idIsValid, emailIsValid, emailNotSended} = this.props;
    if(!(idIsValid && emailIsValid && pwIsValid && pwCompare)){
      alert('입력하신 정보가 잘못되었거나 유효하지 않습니다. 다시 한 번 확인해 주세요.');
    }
    else this.props.onSignUp(name,id,pw,email+'@snu.ac.kr');
  }

  render(){
    console.log('test', this.props.mailNotSended)
    const {name, id, pw, pw_again, pwIsValid, pwCompare, email, code} = this.state;
    const {buttonPressed_id, buttonPressed_email, buttonPressed_code, buttonPressed_emailagain} = this.state;
    const {idIsValid, emailIsValid, emailNotSended} = this.props;
    return (
      <div>
        <div name='nameId'>
          이름 <input name='name' type='text' maxLength='20' onChange={this.handleChange} />
          <br />
          ID <input name='id' type='text' maxLength='20' onChange={this.handleChange} />
          <button onClick={this.handleClick_id}>중복체크</button>
          { buttonPressed_id && (idIsValid ? <span style={{color:'green'}}>유효한 아이디입니다.</span>:<span style={{color:'red'}}>유효하지 않거나 이미 가입된 아이디입니다.</span>)}
        </div>

        <div name='pw'>
          비밀번호 <input name='pw' type='password' maxLength='20' onChange={this.handleChange} />
          {(pw!=='') && ( !pwIsValid && <span style={{color: 'red'}}>유효하지 않은 비밀번호입니다.</span> )}
          <br />
          비밀번호 확인 <input name='pw_again' type='password' maxLength='20' onChange={this.handleChange} />
          {(pw_again!=='') && ( !pwCompare && <span style={{color: 'red'}}>입력하신 비밀번호화 일치하지 않습니다.</span> )}
        </div>

        <div name='email'>
          이메일 <input name='email' type='text' onChange={this.handleChange} /> @snu.ac.kr
          <br />
          {!buttonPressed_email && <button onClick={this.handleClick_email}>인증코드 전송</button>}
          {emailNotSended && <span style={{color:'red'}}>유효하지 않거나 중복된 이메일입니다.</span> }
          { (buttonPressed_email && !emailNotSended) &&
            <div>
              <input name='code' type='text' onChange={this.handleChange} />
              <button onClick={this.handleClick_code}>인증</button>
              <button onClick={this.handleClick_emailagain}>인증코드 재전송</button>
              {buttonPressed_emailagain ? <span style={{color:'green'}}>인증코드가 재전송되었습니다.</span>:<span style={{color:'green'}}>인증코드가 전송되었습니다.</span>}
              {buttonPressed_code && (emailIsValid ? <span style={{color:'green'}}>인증이 완료되었습니다.</span>:<span style={{color:'red'}}>인증에 실패하였습니다.</span>)}
            </div>
          }
        </div>
        <br /><br />
        <button onClick={this.handleClick_signUp}>회원가입</button>
      </div>
    )
  }
}



export default SignUp
