import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = ({id}) => {
    return(
        <div className={'wrapper'}>
            <Link className='options' to={`/club/${id}/`}> recruit </Link>
            <Link className='options' to={`/club/${id}/board/`}> board </Link>
            <Link className='options' to={`/club/${id}/member_list/`}> member list </Link>
        </div>
    )
};

export default Header;
