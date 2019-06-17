import React, {Component} from 'react'
import axios from 'axios'
import {REQUEST_URL} from "../../../Constants/Constants";
import {ListGroup, ListGroupItem, Modal, ButtonToolbar, Button} from 'reactstrap';
import MessageModal from '../MessageModal'

const config = {
    headers : {
        authorization : 'token ' + sessionStorage.getItem('token')
    }
};

class MessageList extends Component {
    state={
        messageList : [],
        modalShow : false,
    };

    async componentDidMount(){
        const url = REQUEST_URL + '/message/';
        try{
            const response = await axios.get(url, config);
            console.log(response);
            this.setState({
                messageList : response.data.results,
            });
            this.props.updateMessageList(response.data.results)
        }catch (e) {
            console.log('get message list' + e)
        }
    }

    toggle() {
        this.setState(prevState => ({
            modalShow: !prevState.modalShow
        }));
    }

    deleteAll = async () => {
        const delete_url = REQUEST_URL + '/message/delete_all';
        const get_url = REQUEST_URL + '/message/';
        if(window.confirm('읽은 메세지를 모두 삭제하시겠습니까?')){
            try{
                await axios.delete(delete_url, config);
                const response = await axios.get(get_url, config);
                this.props.updateMessageList(response.data.results);
                alert('읽은 메세지를 모두 삭제하였습니다.');
            }catch (e) {
                alert('일괄 삭제 실패 ' + e)
            }
        }
    };

    render(){
        const {messageList} = this.props;
        let modalClose = () => this.setState({ modalShow: false });
        return(
            <div>
                <h1><strong>쪽지함</strong></h1>
                <div>자신에게 온 쪽지를 확인할 수 있습니다.</div>
                <button onClick={this.deleteAll}>읽은 메세지 모두 삭제</button>
                <hr/>
                {messageList && messageList.map(
                    message =>{
                        return(
                            <div className={'messageForm'}>
                                <span style={{'display' : 'inline-block'}}>제목 : </span>
                                <div
                                    className={'messageTitle'}
                                    key={message.id}
                                    dangerouslySetInnerHTML={
                                        {__html : message.title}}
                                />
                                <div className={'isRead'}>
                                    {message.read ? '읽음' : '읽지않음'}
                                </div>
                                <MessageModal
                                    history = {this.props.history}
                                    id = {message.id}
                                    buttonLabel = {'자세히'}
                                    title = {message.title}
                                    date = {message.date}
                                    content = {message.content}
                                    updateMessageList = {this.props.updateMessageList}
                                />
                                <hr/>
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default MessageList
