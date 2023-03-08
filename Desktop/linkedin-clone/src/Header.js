import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/OtherHouses';
import NetworkIcon from '@mui/icons-material/PeopleAlt';
import JobIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsIcon from '@mui/icons-material/NotificationsActive';

function header() {
  return (
    <div className='header'>
      <div className="header__left">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
            alt=""
        />

        <div className="header__search">
            <SearchIcon/>
            <input type="text"/>
        </div>    
        
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={NetworkIcon} title='My Network'/>
        <HeaderOption Icon={JobIcon} title='Jobs'/>
        <HeaderOption Icon={MessageIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" title='me' />
      </div>

    </div>
  )
}

export default header
