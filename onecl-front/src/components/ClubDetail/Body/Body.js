import React, {Component} from 'react'

const Document = ({title}) => {
    return(
        <div>
            <p>{title}</p>
        </div>
    );
};

const Member = ({name, auth_level}) => {
    const position = (auth_level) => {
        switch (auth_level){
            case 0 :
                return 'master';
            case 1 :
                return 'executive';
            case 2 :
                return 'normal member';
            default :
                return 'normal member';
        }
    };

    return(
        <div>
            <p style={{'display':'inline-block', 'width':'250px'}}>{name}</p>
            <p style={{'display':'inline-block', 'width':'250px'}}>{position(auth_level)}</p>
        </div>
    );
};


class Body extends Component{
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
        const {componentStatus} = this.props;
        const {documentList, memberList, infoPost} = this.props;
        const tmp_docList = [
            {
                id: 1,
                title: 'first post',
            },
            {
                id: 2,
                title: 'second post',
            },
            {
                id: 3,
                title: 'third post',
            },
        ];
        const tmp_memList = [
            {
                id: 1,
                name: 'baek geun young',
                auth_level: 0,
            },
            {
                id: 2,
                name: 'ahn jae won',
                auth_level: 3,
            },
            {
                id: 3,
                name: 'seo jun won',
                auth_level: 2,
            },
        ];
        const tmp_infoPost = 'his information post';

        if(componentStatus === 2){
            return(
                tmp_memList.map(
                    (member) => {
                        return(
                            <Member
                                key={member.id}
                                name={member.name}
                                auth_level={member.auth_level}
                            />
                        )
                    }
                )
            )
        }
        if(componentStatus === 1){
            return(
                tmp_docList && tmp_docList.map(
                    (document) => {
                        return(
                            <Document
                                key={document.id}
                                title={document.title}
                            />
                        )
                    }
                )
            )
        }
        else{
            return(
                <div>
                    {/*{infoPost}*/}
                    {tmp_infoPost}
                </div>
            )
        }
    }
}

export default Body;
