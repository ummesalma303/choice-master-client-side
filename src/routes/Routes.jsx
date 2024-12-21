import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from '../ErrorPage/ErrorPage';
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home';
import Queries from '../pages/Queries';
import RecommendationsForMe from '../pages/RecommendationsForMe';
import MyQueries from '../pages/MyQueries';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
      {
        path:'/',
        element:<Home/>
        },
      {
        path:'/queries',
        element:<Queries/>
        },
      {
        path:'/recommendationsForMe',
        element:<RecommendationsForMe/>
        },
      {
        path:'/myQueries',
        element:<MyQueries/>
        },
      ]
    },
  ]);
  

export default router;