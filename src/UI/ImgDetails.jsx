import React from 'react'
import { useLoaderData } from 'react-router'

const ImgDetails = () => {
  const img=useLoaderData()
 

  const {description,title,url,id} =img.photo;

  return (
    <div>
        <div className='grid grid-cols-2 my-20 mx-48 p-16 bg-blue-700 text-white rounded-lg'>
            <div>
                <img src={url} alt={`img${id}`} className='w-96 gap-96 rounded-lg' />
            </div>
            <div className='mt-7'>
                <h1 className='text-4xl'>{title}</h1>
                <p className='mt-8'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ImgDetails