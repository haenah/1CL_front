import React from 'react'
import './Header.css'

export const Header = ({id, clickInfoPostButton, clickMemberListButton, clickDocListButton, clickAdminButton}) => {
    return(
        <div className={'headerWrapper'}>
            <div className={'optionSet'}>
                <button className='headerOptions' onClick={() => clickAdminButton()}>동아리 관리</button>
                <button className='headerOptions' onClick={() => clickInfoPostButton()}> 동아리 소개 </button>
                <button className='headerOptions' onClick={() => clickDocListButton()}> 게시판 </button>
                <button className='headerOptions' onClick={() => clickMemberListButton()}> 회원 목록 </button>
            </div>
        </div>
    )
};

export default Header;
