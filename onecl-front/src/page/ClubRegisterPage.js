import React from 'react';
import ClubRegisterContainer from '../containers/ClubRegister/ClubRegisterContainer'

const ClubRegisterPage = ({history}) => {
    return(
        <div>
            <ClubRegisterContainer
                history={history}
            />
        </div>
    );
};

export default ClubRegisterPage;
