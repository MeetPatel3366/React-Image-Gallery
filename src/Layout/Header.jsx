import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div>
      <ul className='flex justify-evenly text-2xl'>
        <li><NavLink to='/' className={({isActive})=>isActive?"text-blue-800 font-bold underline":"text-black"}>Home</NavLink></li>
        <li><NavLink to='/gallery' className={({isActive})=>isActive?"text-blue-800 font-bold underline":"text-black"}>Gallery</NavLink></li>
      </ul>
    </div>
  )
}

export default Header
