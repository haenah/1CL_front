import React, {Component} from 'react'

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
            <p>{name}</p>
            <p>{position(auth_level)}</p>
        </div>
    );
};

class MemberList extends Component{

    render() {
        const {MemberList} = this.props;

        return(
            MemberList && MemberList.map(
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
}

export default MemberList
