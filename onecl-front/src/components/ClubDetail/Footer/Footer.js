import React, {Component} from 'react'
import {Button} from 'reactstrap';

class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      if(this.props.authLevel !== 0) return null;
    return (
      <div style={{
        'position': 'fixed',
        'bottom': '0',
        'width': '100%',
        'background': 'white',
        'height': '50px',
        'fontSize': '25px',
        'textAlign': 'center',
      }}>
        {/*<Link to={`/club/${id}/apply`}>apply!</Link>*/}
        {/*<button className={'apply-button'} >Apply!</button>*/}
          <button className={'apply-btn'} onClick={() => this.props.history.push(`/club/${this.props.id}/apply`)}>Apply!</button>

      </div>
    )
  }
}

export default Footer;
