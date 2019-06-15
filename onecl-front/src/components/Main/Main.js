import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavBar from './Navbar';

import {Container, Input} from 'reactstrap';
import {
  ApplicantListPage, AssignMasterPage,
  ClubApplyPage,
  ClubDocumentPage,
  ClubRegisterPage,
  ClubsearchPage, FixClubInfoPage, FixClubPostPage,
  LoginPage,
  SignupPage
} from "../../page";
import {Route, Switch} from "react-router-dom";
import MyPage from "../../page/MyPage";
import ClubPage from "../../page/ClubPage";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      clubs: null,
      isOpen: false,
    }
  }

  componentWillMount() {
    this.props.fetchClubs();
  }

  componentWillReceiveProps(nextProps) {
    nextProps.clubs && this.setState({clubs: nextProps.clubs.results});
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSearch(search) {
    const {clubs} = this.props;
    this.setState({search});
    if (!search) {
      this.setState({clubs: this.props.clubs.results});
    }
    search && this.setState({clubs: clubs.results.filter(c => c.name.includes(search))});
  }

  render() {
    return(
      <div>
          <div style={{paddingTop: '56px'}}>
            <Sidebar
              sidebar={
                <div>
                  <div style={{backgroundColor: 'lightblue', padding: '16px'}}>
                   동아리 리스트
                  </div>
                  <Input name={'search'} type={'text'} value={this.state.search} onChange={e => this.handleSearch(e.target.value)} placeholder={'검색'} />
                  <div style={{margin: '8px', height: '1px', backgroundColor: 'black'}} />
                  <div>
                    {this.state.clubs && this.state.clubs.map(c =>
                      <div key={c.id} style={{display: 'block', textAlign: 'center', justifyContent: 'center', borderBottom: '1px solid lightgrey', padding: '16px', color: 'grey'}}>
                        <a style={{textDecoration: 'none'}} href={`/club/${c.id}`}>{c.name}</a>
                      </div>
                      )
                    }
                  </div>
                </div>
              }
              docked
              shadow={false}
              styles={
                {
                  sidebar: {
                    background: "white",
                  }
                }
              }
            >
              <MyNavBar token={this.props.token} user={this.props.login} />
              <Container style={{marginTop: '1em'}} fluid>
                <Switch>
                  <Route exact path="/club_search" component={ClubsearchPage}/>
                  <Route exact path="/club_register" component={ClubRegisterPage}/>
                  <Route exact path="/register" component={SignupPage}/>
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/mypage" component={MyPage} />
                  <Route exact path="/club/:id" component={ClubPage} />
                  <Route exact path="/club/:id/apply" component={ClubApplyPage} />
                  <Route exact path="/club/:clubID/document/:id" component={ClubDocumentPage} />
                  <Route exact path="/club/:id/recruiter" component={ApplicantListPage} />
                  <Route exact path="/club/:id/fix_club_info" component={FixClubInfoPage} />
                  <Route exact path="/club/:id/fix_club_post" component={FixClubPostPage} />
                  <Route exact path="/club/:id/assign_next_master" component={AssignMasterPage} />
                </Switch>
              </Container>
            </Sidebar>
          </div>
      </div>
    );
  }
}

Main.propTypes = {
  clubs: PropTypes.object,
  fetchClubs: PropTypes.func,
};

export default Main;
