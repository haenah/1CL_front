import React, {Component} from 'react';
import './modal.css';

class Modal extends Component{
    state={
        selectedAuth : 1,
    };

    optionChangeHandler = (e) => {
        if(e.target.value === '임원') this.setState({selectedAuth : 2});
        if(e.target.value === '일반회원') this.setState({selectedAuth : 1});
    };

    buttonClickHandler = () => {
        const {selectedAuth} = this.state;
        const {changeAuthLevel, joinID , clubID, updateMemberList} = this.props;
        console.log('join id : ' + joinID);
        changeAuthLevel(joinID, selectedAuth);
        alert('회원 등급 변경이 완료되었습니다.');
        updateMemberList(clubID);
        this.removeModalHandler();
    };

    removeModalHandler = () => {
        const {removeModal} = this.props;
        this.setState({
            selectedAuth: 1,
        });
        removeModal();
    };

    keyPressHandler = (e) => {
        if(e.keyCode === 27) {
            this.removeModalHandler();
        }
    };

    render(){
        const {joinID, username} = this.props;

        if(!this.props.visible) return null;
        return(
            <div className={'grayBackground'}>
                <div className={'modalWrapper'} tabIndex="1" onKeyDown={this.keyPressHandler}>
                    <div className={'modalLabelWrapper'}><span className={'authChangeLabel'}>회원등급 변경</span></div>
                    <p>username : {username}</p>
                    <select onChange={this.optionChangeHandler}>
                        <option value={'일반회원'}>일반회원</option>
                        <option value={'임원'}>임원</option>
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
