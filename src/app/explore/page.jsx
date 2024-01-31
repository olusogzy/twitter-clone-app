import React from 'react'
import NavLogo from '../components/NavLogo/NavLogo'
import Sidebar from '../components/sidebar/Sidebar'

export default function explore() {
  return (
    <div>
      <div className='ps-16'>
        <NavLogo />
        <Sidebar />
      </div>
    </div>
  )
}
