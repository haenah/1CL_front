import React from 'react';
import HeaderContainer from '../containers/ClubDetail/HeaderContainer'
import FooterContainer from '../containers/ClubDetail/FooterContainer'
import BodyContainer from '../containers/ClubDetail/BodyContainer'

const ClubPage = ({history, match}) => {
    const {id} = match.params;

    return(
        <div>
            <HeaderContainer id={id}/>
            <BodyContainer id={id}/>
            <FooterContainer id={id}/>
        </div>
    )
};

export default ClubPage;
