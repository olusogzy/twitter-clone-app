import React from 'react'
import Image from 'next/image'
import Home from './images/home.png'
import Email from './images/email.png'
import User from './images/user.png'
import List from './images/list.png'
import More from './images/more.png'
import Search from './images/search.png'
import Notifications from './images/notification.png'
import Community from './images/community.png'
import Premium from './images/twitter.png'
import './Sidebar.css'
import Link from 'next/link'
import '../../page'
// import '../../explore'

export default function Sidebar() {
  return (
    <div className='side-bar '>
        <Link 
         href='./'
         className='flex items-center p-2 side-bar-icon'>
            <Image 
                src={Home}
                alt='home'
                width={23}
            />
            <h1 className='ms-6'>Home</h1>
        </Link>
        <Link 
            href='/explore'
            className='flex items-center p-2 side-bar-icon'>
            <Image 
                src={Search}
                alt='explore'
                width={23}
            />
            <h1 className='ms-6'>Explore</h1>
        </Link>
        <div className='flex items-center p-2 side-bar-icon'>
            <Image 
                src={Notifications}
                alt='notification'
                width={23}
            />
            <h1 className='ms-6'>Notifications</h1>
        </div>
        <div className='flex items-center p-2 side-bar-icon'>
            <Image 
                src={Email}
                alt='email'
                width={23}
            />
            <h1 className='ms-6'>Message</h1>
        </div>
        <div className='flex items-center p-2 side-bar-icon'>
            <Image 
                src={List}
                alt='list'
                width={23}
            />
            <h1 className='ms-6'>Lists</h1>
        </div>
        <div className='flex items-center p-2 side-bar-icon'>
            <Image 
                src={Community}
                alt='home'
                width={23}
            />
            <h1 className='ms-6'>Communities</h1>
        </div>
        <div className='flex items-center p-2 side-bar-icon'>
            <Image 
                src={Premium}
                alt='premium'
                width={22}
            />
            <h1 className='ms-6'>Premium</h1>
        </div>
        <div className='flex items-center p-2 side-bar-icon'>
            <Image 
                src={User}
                alt='user'
                width={23}
            />
            <h1 className='ms-6'>Profile</h1>
        </div>
        <div className='flex items-center p-2 side-bar-icon'>
            <Image 
                src={More}
                alt='More'
                width={23}
            />
            <h1 className='ms-6'>More</h1>
        </div>
        <div className='side-bar-button'>
            <button className=''>Post</button>
        </div>
    </div>
  )
}
