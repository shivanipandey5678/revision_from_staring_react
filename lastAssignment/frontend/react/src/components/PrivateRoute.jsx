import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {Navigate} from 'react-router-dom'



export default function PrivateRoute({children}){

    let {authDetails:{isLogin}}=useContext(AuthContext);
    if(!isLogin){
        return <Navigate to="/login"/>
    }
  return children
}
