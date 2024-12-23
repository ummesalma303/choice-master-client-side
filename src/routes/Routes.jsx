import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";

import ErrorPage from '../ErrorPage/ErrorPage';
import MainLayout from '../layout/MainLayout';

import Queries from '../pages/Queries';
import RecommendationsForMe from '../pages/RecommendationsForMe';
import MyQueries from '../pages/MyQueries';
// import SignIn from '../pages/Login';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import MyRecommendations from '../pages/MyRecommendations';
import AddQueries from '../pages/AddQueries';
import Home from '../Pages/Home';
// import Home from '../pages/Home';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
      {
        path:'/',
        element:<Home/>,
        loader:()=>fetch('http://localhost:5000/recentQueries')
        },
      {
        path:'/queries',
        element:<Queries/>,
        loader:()=>fetch('http://localhost:5000/allQueries')
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
        path:'/myRecommendations',
        element:<PrivateRoute><MyRecommendations/></PrivateRoute>
        },
      {
        path:'/addQueries',
        element:<PrivateRoute><AddQueries/></PrivateRoute>
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