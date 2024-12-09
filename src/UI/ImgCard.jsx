import React from 'react'
import { NavLink } from 'react-router'

const ImgCard = ({curImg}) => {
  return (
    <div>
      <NavLink to={`/gallery/${curImg.id}`}>
        <img src={curImg.url} alt={curImg.id} className='rounded-lg'/>
      </NavLink>
    </div>
  )
}

export default ImgCard
