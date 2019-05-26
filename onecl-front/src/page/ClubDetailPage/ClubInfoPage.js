import React from 'react';
import HeaderContainer from '../../containers/ClubDetail/HeaderContainer'
import FooterContainer from '../../containers/ClubDetail/FooterContainer'
import ClubDetailContainer from '../../containers/ClubDetail/ClubDetailcontainer'

const ClubInfoPage = ({history, match}) => {
    const {id} = match.params;

    return(
        <div>
            <HeaderContainer id={id}/>
            <ClubDetailContainer id={id}/>
            <FooterContainer id={id}/>
        </div>
    )
};

export default ClubInfoPage;
