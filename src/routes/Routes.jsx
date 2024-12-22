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
// import SignIn from '../pages/Login';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';


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
        element:<PrivateRoute><RecommendationsForMe/></PrivateRoute>
        },
      {
        path:'/myQueries',
        element:<PrivateRoute><MyQueries/></PrivateRoute>
        },
      {
        path:'/login',
        element:<Login/>
        },
      {
        path:'/register',
        element:<Register/>
        },
      ]
    },
  ]);
  

export default router;