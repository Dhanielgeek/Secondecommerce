import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Category from './Pages/Category';
import Layout from './Components/Layout';
import Cart from './Pages/Cart';
import Detail from './Pages/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: '/category',
        element:<Category/>
      },
      {
        path: '/cart',
        element:<Cart/>
      },
      {
        path: '/detail/:id',
        element:<Detail/>
      }
    ]
  }

]);

const App = () => {
  
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
