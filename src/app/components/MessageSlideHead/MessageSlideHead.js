import React from 'react'
import Image from 'next/image'
import Mail from './Image/mail.png'
import ArrowUp from './Image/up-chevron.png'
import './MessageSlideHead.css'

export default function MessageSlideHead() {
  return (
  <div className='message-head-div'>
    <div className='message-head flex justify-between p-4'>
      <div>
        <h2>
            Message
        </h2>
      </div>
      <div className='flex'>
        <Image 
            src={Mail}
            alt='mail'
            width={20}
        />
        <Image 
            src={ArrowUp}
            alt='mail'
            width={20}
        />

      </div>
    </div>
</div>
  )
}
