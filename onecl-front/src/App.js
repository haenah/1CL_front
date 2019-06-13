import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Start from "./components/StartPage";
import {Col, Container} from 'reactstrap';
import {SignupPage, ClubsearchPage, LoginPage, MainPage, ClubRegisterPage, ClubPage, ClubDocumentPage, ClubApplyPage, ApplicantListPage} from './page';

const App = () => {
    return(
        <div>
          <Container fluid>
            {/*<MainPage />*/}
            {/*<Col md={{size: '12', offset: '1'}}>*/}
              <Switch>
                  <Route exact path={"/"} component={MainPage} />
                  <Route exact path="/register" component={SignupPage}/>
                  <Route exact path="/club_search" component={ClubsearchPage}/>
                  <Route exact path="/club_register" component={ClubRegisterPage}/>
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/club/:id" component={ClubPage} />
                  <Route exact path="/club/:id/apply" component={ClubApplyPage} />
                  <Route exact path="/club/:clubID/document/:id" component={ClubDocumentPage} />
                  <Route exact path="/club/:id/recruiter" component={ApplicantListPage} />
              </Switch>
            {/*</Col>*/}
          </Container>
        </div>
    )
};

export default App;
