import React from 'react'
import MessageListContainer from '../containers/Message/MessageListContainer';

const MessagePage = ({history}) => {
    return(
        <div>
            <MessageListContainer history={history}/>
        </div>
    )
};

export default MessagePage;
