import React from 'react'
import Image from 'next/image'
import './SearchBar.css'
import Search from './Images/search.png'

export default function SearchBar() {
  return (
    <form className='search-bar flex ms-5 py-2 px-5'>
        <Image 
            src={Search}
            alt='search'
            width={20}
        />
      <input placeholder='Search'></input>
    </form>
  )
}
