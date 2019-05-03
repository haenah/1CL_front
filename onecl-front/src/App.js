import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {SignupPage, ClubsearchPage} from './page';


const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/register" component={SignupPage}/>
                <Route exact path="/club_search" component={ClubsearchPage}/>
            </Switch>
        </div>
    );
};

export default App;
