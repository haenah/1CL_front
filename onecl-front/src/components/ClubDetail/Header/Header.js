import React from 'react'
import './Header.css'

export const Header = ({id, clickInfoPostButton, clickMemberListButton, clickDocListButton}) => {
    return(
        <div className={'wrapper'}>
            <div className={'optionSet'}>
                <button className='headerOptions' onClick={() => clickInfoPostButton()}> recruit </button>
                <button className='headerOptions' onClick={() => clickDocListButton()}> board </button>
                <button className='headerOptions' onClick={() => clickMemberListButton()}> member list </button>
            </div>
        </div>
    )
};

export default Header;
