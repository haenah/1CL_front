import {connect} from 'react-redux';
import MessageList from '../../components/Message/MessageList';
import * as actions from "../../actions/Message/index";

const mapStateToProps = (state) => {
    return {
        messageList : state.Message.messageList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageList : (messageList) => {
            dispatch(actions.updateMessageList(messageList))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
