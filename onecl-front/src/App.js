import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Start from "./components/StartPage";
import {
    Col,
    Collapse,
    Container, DropdownItem, DropdownMenu, DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Row,
    UncontrolledDropdown
} from 'reactstrap';
import {SignupPage, ClubsearchPage, LoginPage, MainPage, ClubRegisterPage} from './page';


const App = () => {
    return(
      <div>
              {/*<Switch>*/}
                  {/*<Route exact path={"/"} component={MainPage} />*/}
                  {/*<Route exact path="/register" component={SignupPage}/>*/}
                  {/*<Route exact path="/login" component={LoginPage} />*/}
              {/*</Switch>*/}

          {/*<Navbar color="light" light expand="md">*/}
              {/*<NavbarBrand href="/">logo</NavbarBrand>*/}
              {/*<NavbarToggler />*/}
              {/*<Collapse navbar>*/}
                  {/*<Nav className="ml-auto" navbar>*/}
                      {/*<NavItem>*/}
                          {/*<NavLink href="/club_search/">동아리 검색</NavLink>*/}
                      {/*</NavItem>*/}
                      {/*<NavItem>*/}
                          {/*<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>*/}
                      {/*</NavItem>*/}
                  {/*</Nav>*/}
              {/*</Collapse>*/}
          {/*</Navbar>*/}

          <div>
              <MainPage />
          </div>

              {/*<div className={'row align-items-center'}>*/}
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
              {/*</div>*/}
      </div>
    );
};

export default App;
