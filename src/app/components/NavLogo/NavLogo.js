import React from 'react'
import Image from 'next/image'
import Twitter from './images/twitter.png'

export default function NavLogo() {
  return (
    <div className='px-2 pt-2 pb-5 '>
      <Image 
        src={Twitter}
        alt='twitter'
        width={25}
      />
    </div>
  )
}
