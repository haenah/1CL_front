import React from 'react';
import HeaderContainer from '../../containers/ClubDetail/HeaderContainer'
import FooterContainer from '../../containers/ClubDetail/FooterContainer'
import MemberListContainer from '../../containers/ClubDetail/MemberListContainer'

const MemberListPage = ({history, match}) => {
    const {id} = match.params;

    return(
        <div>
            <HeaderContainer id={id}/>
            <MemberListContainer id={id}/>
            <FooterContainer id={id}/>
        </div>
    )
};

export default MemberListPage;
