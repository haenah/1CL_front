import React from 'react';
import HeaderContainer from '../../containers/ClubDetail/HeaderContainer'
import FooterContainer from '../../containers/ClubDetail/FooterContainer'
import BoardContainer from '../../containers/ClubDetail/BoardContainer'

const BoardPage = ({history, match}) => {
    const {id} = match.params;

    return(
        <div>
            <HeaderContainer id={id}/>
            <BoardContainer id = {id}/>
            <FooterContainer id={id}/>
        </div>
    )
};

export default BoardPage;
