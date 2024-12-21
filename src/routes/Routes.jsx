import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from '../ErrorPage/ErrorPage';
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
      {
        path:'/',
        element:<Home/>
      }]
    },
  ]);
  

export default router;