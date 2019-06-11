import React from 'react'
import {Link} from 'react-router-dom'

const Footer = ({id}) => {
    return(
        <div style={{
            'overflow' : 'hidden',
            'position': 'fixed',
            'bottom': '0',
            'width': '100%',
            'background' : 'white',
            'boxShadow' : '5px 5px 5px 5px black',
            'height' : '50px',
            'fontSize' : '25px',
            'textAlign' : 'center',
        }}>
            <Link to={`/club/${id}/apply`}>apply!</Link>
        </div>
    )
};

export default Footer;
