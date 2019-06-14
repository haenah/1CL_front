import React, {Component} from 'react';
import {
  Collapse, DropdownItem, DropdownMenu,
  DropdownToggle,
  Nav, Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";

class MyNavBar extends Component {
    state = {
      isOpen: false,
    };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">logo</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/club_search/">동아리 검색</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/club_register">동아리 등록</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                User
              </DropdownToggle>
              <DropdownMenu right>
                {sessionStorage.getItem('token') ?
                <div>
                  <DropdownItem href={'/mypage'}>
                    마이페이지
                  </DropdownItem>
                  <DropdownItem onClick={() => sessionStorage.clear()}>
                    Logout
                  </DropdownItem>
                </div> :
                <div>
                  <DropdownItem href="/login">
                    Login
                  </DropdownItem>
                  <DropdownItem href="/register">
                    Sign Up
                  </DropdownItem>
                </div>
                }
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MyNavBar;
