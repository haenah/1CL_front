import React, {Component} from 'react';
import FileSubmitContainer from '../containers/ClubApply/FileSubmitContainer'
import HeaderContainer from '../containers/ClubDetail/HeaderContainer'

const ClubApplyPage = ({history, match}) => {
    const {id} = match.params;
    return(
        <div>
            <FileSubmitContainer
                clubID={id}
                history={history}
            />
        </div>
    )
};

export default ClubApplyPage;
