import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

import {
  Input,
  Container,
  Header,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col
} from 'reactstrap';
import {ClubRegisterPage, ClubsearchPage, LoginPage, MainPage, SignupPage} from "../../page";
import {Route, Switch} from "react-router-dom";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      clubs: null,
    }
  }

  componentWillMount() {
    this.props.fetchClubs("전체", "전체");
  }

  componentWillReceiveProps(nextProps) {
    console.log('next', nextProps);
    this.setState({clubs: nextProps.clubs.results});
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSearch(search) {
    const {clubs} = this.props;
    this.setState({search});
    console.log('search', clubs.results.filter(c => c.name === search), "농구".includes(search));
    if (!search) {
      this.setState({clubs: this.props.clubs.results});
    }
    search && this.setState({clubs: clubs.results.filter(c => c.name.includes(search))});
  }

  render() {
    return(
      <div>

        {/*<Row>*/}
          {/*<Col md={{size: 10, offset: 1}}>*/}
          {/*<div className='heading-space'>*/}
            {/*<div className='heading'>*/}
              {/*<div className='options'>*/}
                {/*<a href={'/'}>logo</a>*/}
                {/*<div className='search-bar'>*/}
                  {/*<div className='search'>*/}
                    {/*<input className='search-type' maxLength='2048' type='text' placeholder='검색'/>*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className='login-section'>*/}
                  {/*<div className='line' />*/}
                  {/*<a className='login' href='/login'>Login</a>*/}
                  {/*<a className='signup' href='/register'>Sign Up Here</a>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
          {/*</Col>*/}
        {/*</Row>*/}

          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">logo</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/club_search/">동아리 검색</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>

          {/*<div style={{height: '50%'}}>*/}
          {/*<Sidebar*/}
            {/*sidebar={*/}
              {/*<div>*/}
                {/*<div style={{backgroundColor: 'lightblue', padding: '16px'}}>*/}
                 {/*동아리 리스트*/}
                {/*</div>*/}
                {/*<Input name={'search'} type={'text'} value={this.state.search} onChange={e => this.handleSearch(e.target.value)} placeholder={'검색'} />*/}
                {/*<div style={{margin: '8px', height: '1px', backgroundColor: 'black'}} />*/}
                {/*<div>*/}
                  {/*{this.state.clubs && this.state.clubs.map(c =>*/}
                    {/*<div key={c.id} style={{display: 'block', textAlign: 'center', justifyContent: 'center', borderBottom: '1px solid lightgrey', padding: '16px', color: 'grey'}}>*/}
                      {/*<a style={{textDecoration: 'none'}} href={c.id}>{c.name}</a>*/}
                    {/*</div>*/}
                    {/*)*/}
                  {/*}*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*}*/}
            {/*docked*/}
            {/*shadow={false}*/}
            {/*styles={*/}
              {/*{*/}
                {/*sidebar: {*/}
                  {/*background: "white",*/}
                {/*}*/}
              {/*}*/}
            {/*}*/}
          {/*>*/}
            {/*<Switch>*/}
              {/*<Route exact path="/club_search" component={ClubsearchPage}/>*/}
              {/*<Route exact path="/club_register" component={ClubRegisterPage}/>*/}
              {/*<Route exact path="/register" component={SignupPage}/>*/}
              {/*<Route exact path="/login" component={LoginPage} />*/}
            {/*</Switch>*/}
          {/*</Sidebar>*/}
          {/*</div>*/}
      </div>
    );
  }
}

Main.propTypes = {
  clubs: PropTypes.object,
  fetchClubs: PropTypes.func,
};

export default Main;
