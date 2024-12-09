import React from 'react'

const Footer = () => {
    const date=new Date();
    
    
  return (
    <div>
        <p className='text-center'>{date.toLocaleDateString()}</p>
    </div>
  )
}

export default Footer