import React from 'react'
import Image from 'next/image'
import './NewPost.css'
import Profile from './Images/profile.jpg'
import Photo from './Icons/image.svg'
import Smiley from './Icons/smile.svg'
import Location from './Icons/map-pin.svg'
import Globe from './Icons/globe.svg'

export default function NewPost() {
  return (
    <div>
        <div className='flex pt-3'>
            <div>
                <Image 
                    src={Profile}
                    alt='profile'
                    width={37}
                    style={{borderRadius:'50%'}}
                />
            </div>
            <form 
                className='ms-4 '
            >
                <input placeholder='What is happening?!'></input>
                <div className='reply my-5 px-2 py-1 flex'>
                    <Image 
                        src={Globe}
                        alt='alt'
                        width={15}
                    />
                    <p className='reply-text ms-2'>Everyone can reply</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex post-icon'>
                        <Image 
                            src={Photo}
                            alt='photo'
                            width={15}
                            className='mx-2'
                        />
                        <Image 
                            src={Smiley}
                            alt='simle'
                            width={15}
                            className='mx-2'
                        />
                        <Image 
                            src={Location}
                            alt='location'
                            width={15}
                            className='mx-2'
                        />
                    </div>
                    <div>
                        <button>Post</button>
                    </div>
                </div>
            </form>
        </div>
      
    </div>
  )
}
