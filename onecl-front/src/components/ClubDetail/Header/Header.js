import React from 'react'
import './Header.css'

export const Header = ({id, clickInfoPostButton, clickMemberListButton, clickDocListButton}) => {
    return(
        <div className={'wrapper'}>
            <button className='headerOptions' onClick={() => clickInfoPostButton()}> recruit </button>
            <button className='headerOptions' onClick={() => clickDocListButton()}> board </button>
            <button className='headerOptions' onClick={() => clickMemberListButton()}> member list </button>
        </div>
    )
};

export default Header;
