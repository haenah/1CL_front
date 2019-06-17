import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Moment from 'react-moment'
import axios from 'axios';
import {REQUEST_URL} from "../../../Constants/Constants";

const config = {
    headers : {
        'authorization' : 'token ' + sessionStorage.getItem('token')
    }
};

class MessageModal extends React.Component {
    state={
        modal : false,
    };

    toggle = async () => {
        const get_url = REQUEST_URL + '/message/';
        const get_detail_url = REQUEST_URL + `/message/${this.props.id}`;
        try{
            const res = await axios.get(get_detail_url, config);
            const response = await axios.get(get_url, config);
            this.props.updateMessageList(response.data.results);
        }catch (e) {
            console.log('toggle error' + e)
        }
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
};

    remove_toggle = async () => {
        const get_url = REQUEST_URL + '/message/';
        try{
            const response = await axios.get(get_url, config);
            this.props.updateMessageList(response.data.results);
        }catch (e) {
            console.log('remove toggle error' + e)
        }
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    removeMessage = async() => {
        const get_url = REQUEST_URL + '/message/';
        const delete_url = `${get_url}${this.props.id}`;
        try{
            await axios.delete(delete_url, config);
            const response = await axios.get(get_url, config);
            this.props.updateMessageList(response.data.results);
            alert('쪽지가 삭제되었습니다.');
            this.remove_toggle()
        }catch (e) {
            alert('쪽지 삭제 실패.' + e)
        }
    };

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                        <div dangerouslySetInnerHTML={{__html : this.props.title}}/> </ModalHeader>
                    <ModalBody>
                        <div className={'messageDate'}>날짜 : <Moment format={'YYYY년 M월 DD일 LT'}>{this.props.date}</Moment></div>
                        <br/>
                        <div dangerouslySetInnerHTML={{__html : this.props.content}}/>
                    </ModalBody>
                    <ModalFooter className={'modalFooter'}>
                        <Button color="primary" onClick={this.toggle}>닫기</Button>
                        <Button color={"danger"} onClick={this.removeMessage}>삭제</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default MessageModal;
