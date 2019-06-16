import React from 'react'
import './Header.css'

export const Header = ({id, authLevel, clickInfoPostButton, clickMemberListButton, clickDocListButton, clickAdminButton}) => {

    if(authLevel === 3){
        return(
            <div className={'headerWrapper'}>
                <div className={'optionSet'}>
                    <button className='headerOptions1' onClick={() => clickAdminButton()}>동아리 관리</button>
                    <button className='headerOptions2' onClick={() => clickInfoPostButton()}> 동아리 소개 </button>
                    <button className='headerOptions3' onClick={() => clickDocListButton()}> 게시판 </button>
                    <button className='headerOptions4' onClick={() => clickMemberListButton()}> 회원 목록 </button>
                </div>
            </div>
        )
    }

    else if(authLevel === 2){
        return(
            <div className={'headerWrapper'}>
                <div className={'optionSet'}>
                    <button className='headerOptions2' onClick={() => clickInfoPostButton()}> 동아리 소개 </button>
                    <button className='headerOptions3' onClick={() => clickDocListButton()}> 게시판 </button>
                    <button className='headerOptions4' onClick={() => clickMemberListButton()}> 회원 목록 </button>
                </div>
            </div>
        )
    }

    else if(authLevel === 1) {
        return(
            <div className={'headerWrapper'}>
                <div className={'optionSet'}>
                    <button className='headerOptions2' onClick={() => clickInfoPostButton()}> 동아리 소개 </button>
                    <button className='headerOptions3' onClick={() => clickDocListButton()}> 게시판 </button>
                </div>
            </div>
        )
    }

    else {
        return(
            <div className={'headerWrapper'}>
                <div className={'optionSet'}>
                    <button className='headerOptions2' onClick={() => clickInfoPostButton()}> 동아리 소개 </button>
                </div>
            </div>
        )
    }
};

export default Header;
