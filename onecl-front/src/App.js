import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {SignupPage, ClubsearchPage, LoginPage} from './page';


const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/register" component={SignupPage}/>
                <Route exact path="/club_search" component={ClubsearchPage}/>
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </div>
    );
};

export default App;
