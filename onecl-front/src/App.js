import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {SignupPage, ClubsearchPage, LoginPage, MainPage} from './page';
import Start from "./components/StartPage";
import {Col, Container} from 'reactstrap';


const App = () => {
    return(
        <div>
          <Container fluid>
            <MainPage />
            <Col md={{size: '12', offset: '1'}}>
              <Switch>
                  <Route exact path={"/"} component={Start} />
                  <Route exact path="/register" component={SignupPage}/>
                  <Route exact path="/club_search" component={ClubsearchPage}/>
                  <Route exact path="/login" component={LoginPage} />
              </Switch>
            </Col>
          </Container>
        </div>
    );
};

export default App;
