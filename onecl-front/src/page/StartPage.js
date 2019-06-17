import React, {Component} from 'react';
import logo from '../Constants/logo.png';
import {Col, Row} from "reactstrap";


class StartPage extends Component {
  render() {
    return(
      <Row>
        <Col className={'col-md-6'} style={{marginTop: '4em'}}>
          <img style={{width: 500, height: 300}} alt={'Image was not found'} src={logo} />
        </Col>
        <Col className={'col-md-6'} style={{marginTop: '16em'}}>
          <h2>서울대학교 동아리를 한눈에 보세요.</h2>
          <h3 style={{color: '#136a8c'}}>1CL</h3>
        </Col>
      </Row>
    );
  }
}

export default StartPage;
