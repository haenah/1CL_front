import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {SignupPage, ClubsearchPage, MainPage, LoginPage} from './page';


const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/register" component={SignupPage}/>
                <Route exact path="/club_search" component={ClubsearchPage}/>
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </div>
    );
};

export default App;
