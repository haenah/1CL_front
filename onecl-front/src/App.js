import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {SignupPage, ClubsearchPage, LoginPage, MainPage} from './page';
import Start from "./components/StartPage";


const App = () => {
    return(
        <div>
          <MainPage />
          <div>
            <Switch>
                <Route exact path={"/"} component={Start} />
                <Route exact path="/register" component={SignupPage}/>
                <Route exact path="/club_search" component={ClubsearchPage}/>
                <Route exact path="/login" component={LoginPage} />
            </Switch>
          </div>
        </div>
    );
};

export default App;
