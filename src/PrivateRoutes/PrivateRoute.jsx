import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location =useLocation()
    const {user,loading} = useContext(AuthContext);
    // const {user,loading} = useState(AuthContext)
    // console.log(loading,user)
    if (loading) {
        // console.log(loading)
        return <div className='h-20'><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (user) {
        // console.log(user)
        return children
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;