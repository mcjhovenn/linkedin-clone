import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {


  const recentItem = (topic) => (
    <div className='sidebar_recentItem'>
        <span className='sidebar_hash'>#</span>
        <p>{topic}</p>
    </div>  
  ) 

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80" alt=""></img>
            <Avatar className='sidebar__avatar'/>
            <h2>Mc Gocotano</h2>
            <h4>mcjhovenngocotano@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statnumber'>123</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statnumber'>111</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar
