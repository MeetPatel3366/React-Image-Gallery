import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home'
import AppLayout from './Layout/AppLayout'
import getApiData from './Api/GetApiData'
import getImgDetail from './Api/GetImgDetail'
import Gallery from './Pages/Gallery'
import ImgDetails from './UI/ImgDetails'

const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/gallery',
          element:<Gallery/>,
          loader:getApiData
        },
        {
          path:'/gallery/:imgID',
          element:<ImgDetails/>,
          loader:getImgDetail
        }
      ]

    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App