import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap';

class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        'overflow': 'hidden',
        'position': 'fixed',
        'bottom': '0',
        'width': '100%',
        'background': 'white',
        'boxShadow': '5px 5px 5px 5px black',
        'height': '50px',
        'fontSize': '25px',
        'textAlign': 'center',
      }}>
        {/*<Link to={`/club/${id}/apply`}>apply!</Link>*/}
        <Button onClick={() => this.props.history.push(`/club/${this.props.id}/apply`)}>Apply!</Button>
      </div>
    )
  }
}

export default Footer;
