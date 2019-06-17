import React, {Component} from 'react'
import axios from 'axios'
import {REQUEST_URL} from "../../../Constants/Constants";
import {ListGroup, ListGroupItem, Modal, ButtonToolbar, Button, Badge, Card, Row} from 'reactstrap';
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

    async componentWillMount(){
        const url = REQUEST_URL + '/message/';
        try{
            const response = await axios.get(url, config);
            console.log(response);
            this.props.updateMessageList(response.data.results);
        }catch (e) {
            console.log('get message list' + e)
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const {messageList} = this.props;
        messageList.length !== 0 && this.setState({
            messageList : this.props.messageList,
        });
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
                this.setState({messageList: this.props.messageList});
                alert('읽은 메세지를 모두 삭제하였습니다.');
            }catch (e) {
                alert('일괄 삭제 실패 ' + e)
            }
        }
    };

    render(){
        const {messageList} = this.state;
        return(
            <div>
                <h1><Badge color={'info'}>쪽지함</Badge></h1>
                <div style={{fontSize: '15px', color: 'grey'}}>자신에게 온 쪽지를 확인할 수 있습니다.</div>
                <Button style={{marginTop: '10px'}} color={'primary'} onClick={this.deleteAll}>읽은 메세지 모두 삭제</Button>
                <hr/>
                <ListGroup>
                    {messageList && messageList.map(
                        message =>{
                            return(
                                <ListGroupItem key={message.id}>
                                    <div style={{margin: '10px'}}>
                                        <Row>
                                            제목:&nbsp;
                                            <div
                                              key={message.id}
                                              dangerouslySetInnerHTML={
                                                  {__html : message.title}}
                                            />&nbsp;&nbsp;
                                            <div>
                                                {!message.read && <Badge pill color={'info'}>새 메세지</Badge>}
                                            </div>
                                        </Row>
                                        <Row style={{marginTop: '10px'}}>
                                            <MessageModal
                                                history = {this.props.history}
                                                id = {message.id}
                                                buttonLabel = {'자세히'}
                                                title = {message.title}
                                                date = {message.date}
                                                content = {message.content}
                                                updateMessageList = {this.props.updateMessageList}
                                            />
                                        </Row>
                                    </div>
                                </ListGroupItem>
                            )
                        })}
                </ListGroup>
            </div>
        )
    }
}

export default MessageList
