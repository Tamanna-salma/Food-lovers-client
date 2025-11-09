import React, { use } from 'react'
import { AuthContext } from './AuthProvider';
import { useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
 const {loading,user}=use(AuthContext);
 const location=useLocation()
 if(loading){
    return<Loading></Loading>;
 }
 if(user && user ?.email){
    return children;
 }
  return (
    <div>
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    </div>
  )
}

export default PrivateRoute