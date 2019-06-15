import React from 'react';
import MainContainer from "../containers/Main/MainContainer";

const MainPage = ({history}) => {
    return(
        <div>
          <MainContainer
            history={history}
          />
        </div>
    );
};

export default MainPage;
