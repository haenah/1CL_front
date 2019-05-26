import React, {Component} from 'react'

class ClubInfo extends Component{
    initialize = () => {
        const { getAuthLevel, getMemberList, getDocumentList, getInfoPost } = this.props;
        const {id} = this.props;

        getAuthLevel(id);
        getMemberList(id);
        getDocumentList(id);
        getInfoPost(id);
    };

    componentDidMount() {
        this.initialize();
    }

    render() {
        const {infoPost} = this.props;
        return(
            <div>
                {infoPost}
            </div>
        )
    }
}

export default ClubInfo
