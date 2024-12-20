import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <div>
        <div className='flex justify-evenly items-center mt-20'>
            <div>
                <h1 className='text-4xl'>Welcome To Image Gallery</h1>
                <NavLink to='/gallery'>
                <button className='bg-blue-500 p-5 rounded-md text-white font-bold mt-10'>Explore Gallery</button>
                </NavLink>
            </div>
            <div>
                <img src='./Home.png' alt="img" className='w-60 h-60 rounded-lg'  />
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.5" d="M0,192L21.8,202.7C43.6,213,87,235,131,240C174.5,245,218,235,262,213.3C305.5,192,349,160,393,160C436.4,160,480,192,524,213.3C567.3,235,611,245,655,250.7C698.2,256,742,256,785,240C829.1,224,873,192,916,170.7C960,149,1004,139,1047,154.7C1090.9,171,1135,213,1178,208C1221.8,203,1265,149,1309,133.3C1352.7,117,1396,139,1418,149.3L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
    </div>
  )
}

export default Home