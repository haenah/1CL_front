import React, {Component} from 'react';
import './modal.css';

class Modal extends Component{
    state={
        selectedAuth : null
    };

    optionChangeHandler = (e) => {
        if(e.target.value === '임원') this.setState({selectedAuth : 2});
        if(e.target.value === '일반회원') this.setState({selectedAuth : 3});
    };

    buttonClickHandler = () => {
        const {selectedAuth} = this.state;
        const {changeAuthLevel, clubID, memberID} = this.props;
        changeAuthLevel(clubID, memberID, selectedAuth);
    };

    removeModalHandler = () => {
        const {removeModal} = this.props;
        removeModal();
    };

    keyPressHandler = (e) => {
        if(e.keyCode === 27) {
            this.removeModalHandler();
        }
    };

    render(){
        const {clubID, memberID} = this.props;

        if(!this.props.visible) return null;
        return(
            <div className={'grayBackground'}>
                <div className={'modalWrapper'} tabIndex="1" onKeyDown={this.keyPressHandler}>
                    <div className={'modalLabelWrapper'}><span className={'authChangeLabel'}>회원등급 변경</span></div>
                    <p>clubID : {clubID}</p>
                    <p>memberID : {memberID}</p>
                    <select onChange={this.optionChangeHandler}>
                        <option value={'임원'}>임원</option>
                        <option value={'일반회원'}>일반회원</option>
                    </select>
                    <div className={'modalOptionWrapper'}>
                        <button className={'modalOptions'} onClick={this.removeModalHandler}>취소</button>
                        <button className={'modalOptions'} onClick={this.buttonClickHandler}>확인</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
