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
      loggedIn: !!sessionStorage.getItem('token'),
    };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token || sessionStorage.getItem('token')) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  }

  handleLogOut() {
    sessionStorage.clear();
    alert('로그아웃 되었습니다');
  }

  render() {
    return(
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img style={{'height' : '40px'}} src='http://127.0.0.1:8000/media/1CL_logo.png'/></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/club_search/">동아리 검색</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/club_register">동아리 등록</NavLink>
            </NavItem>
            {this.state.loggedIn ? <div style={{display: 'flex', justifyContent: 'center'}}>
              <NavItem>
                <NavLink href={'/mypage'}>내 정보</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={'/'} onClick={() => this.handleLogOut()}>로그아웃</NavLink>
              </NavItem>
              <span style={{marginTop: '8px'}}>{`${sessionStorage.getItem('name')} 님, 환영합니다!`}</span>
            </div> :
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <NavItem>
                  <NavLink href={'/login'}>로그인</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={'/register'}>회원가입</NavLink>
                </NavItem>
              </div>
            }
          </Nav>
      </Navbar>
    );
  }
}

export default MyNavBar;
