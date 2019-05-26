import React from 'react'
import {Link} from 'react-router-dom'

const Footer = ({id}) => {
    return(
        <div>
            <Link to={`/club/${id}/apply`}>apply!</Link>
        </div>
    )
};

export default Footer;
