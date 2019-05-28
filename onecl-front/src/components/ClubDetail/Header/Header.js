import React from 'react'
import './Header.css'

export const Header = ({id, clickInfoPostButton, clickMemberListButton, clickDocListButton}) => {
    return(
        <div className={'wrapper'}>
            <button className='options' onClick={() => clickInfoPostButton()}> recruit </button>
            <button className='options' onClick={() => clickDocListButton()}> board </button>
            <button className='options' onClick={() => clickMemberListButton()}> member list </button>
        </div>
    )
};

export default Header;
