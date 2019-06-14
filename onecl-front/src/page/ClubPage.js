import React from 'react';
import HeaderContainer from '../containers/ClubDetail/HeaderContainer'
import FooterContainer from '../containers/ClubDetail/FooterContainer'
import BodyContainer from '../containers/ClubDetail/BodyContainer'
import ModalContainer from '../containers/ClubDetail/ModalContainer'

const ClubPage = ({history, match}) => {
    const {id} = match.params;

    return(
        <div>
            <HeaderContainer id={id}/>
            <BodyContainer id={id} history={history}/>
            <FooterContainer id={id} history={history}/>
            <ModalContainer/>
        </div>
    )
};

export default ClubPage;
