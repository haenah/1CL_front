import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Start from "./components/StartPage";
import {Col, Container} from 'reactstrap';
import {SignupPage, ClubsearchPage, LoginPage, MainPage, ClubRegisterPage} from './page';


const App = () => {
    return(
        <div>
            {/*<MainPage />*/}
            {/*<Col md={{size: '12', offset: '1'}}>*/}
              <Switch>
                  <Route exact path={"/"} component={MainPage} />
                  <Route exact path="/register" component={SignupPage}/>
                  <Route style={{'background-color':'grey'}} exact path="/club_search" component={ClubsearchPage}/>
                  <Route exact path="/club_register" component={ClubRegisterPage}/>
                  <Route exact path="/login" component={LoginPage} />
              </Switch>
            {/*</Col>*/}
        </div>
    );
};

export default App;
