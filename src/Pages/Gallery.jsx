import React from 'react'
import { useLoaderData } from 'react-router';
import ImgCard from '../UI/ImgCard';

const Gallery = () => {
    const galleryData= useLoaderData()
    console.log(galleryData);
  return (
    <div className='m-5'>
      <ul className='grid grid-cols-4 gap-6'>
        {
            galleryData && galleryData.photos.map((curImg)=>{
                return(
                    <>
                        <ImgCard key={curImg.id} curImg={curImg}/>
                    </>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Gallery
