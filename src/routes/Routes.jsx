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
import QueryDetails from '../pages/QueryDetails';
import UpdateQuery from '../pages/UpdateQuery';
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
        loader:()=>fetch('https://b10a11-server-side-ummesalma303.vercel.app/recentQueries')
        },
      {
        path:'/queries',
        element:<Queries/>,
        // loader:()=>fetch('https://b10a11-server-side-ummesalma303.vercel.app/allQueries')
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
        path:'/queryDetails/:id',
        element:<PrivateRoute><QueryDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`https://b10a11-server-side-ummesalma303.vercel.app/allQueries/${params.id}`)
        },
        {
          path:'/updateQuery/:id',
          element:<UpdateQuery></UpdateQuery>
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