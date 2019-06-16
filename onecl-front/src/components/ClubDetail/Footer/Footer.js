import React, {Component} from 'react'
import {Button} from 'reactstrap';
import './Footer.css'
class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      if(this.props.authLevel !== 0) return null;
    return (
      <div className={'footer'}>
        {/*<Link to={`/club/${id}/apply`}>apply!</Link>*/}
        {/*<button className={'apply-button'} >Apply!</button>*/}
          <button className={'apply-btn'} onClick={() => this.props.history.push(`/club/${this.props.id}/apply`)}>Apply!</button>

      </div>
    )
  }
}

export default Footer;
