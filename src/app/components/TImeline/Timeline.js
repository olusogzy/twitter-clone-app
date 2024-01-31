'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Settings from './Images/settings.png'
import './Timeline.css'
import NewPost from '../NewPost/NewPost'

export default function Timeline() {
    const [visible, setVisible] = useState(<NewPost />)
  

  return (
    <div>
        <nav className='navbar flex item-center'>
            <button onClick={() =>{setVisible(<NewPost />)}}>For you</button>
            <button onClick={() =>{setVisible(false)}}>Followimg</button>
            <div className=''>
            <Image 
                src={Settings}
                alt='settings'
                width={13}
                height={13}
            />
            </div>
        </nav>
        {visible ? visible : <NewPost />}

        
      
    </div>
  )
}
