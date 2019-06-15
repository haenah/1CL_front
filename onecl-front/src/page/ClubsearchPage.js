import React from 'react';
import CategoryContainer from '../containers/Clubsearch/CategoryContainer';
import ClubListContainer from '../containers/Clubsearch/ClubListContainer';

const ClubsearchPage = ({history}) => {
    return(
        <div style={{'height': '100vh', 'background': 'linear-gradient(-135deg, #c0dcf3, white)'}}>
            <CategoryContainer/>
            <ClubListContainer history={history} />
        </div>
    );
};

export default ClubsearchPage;
