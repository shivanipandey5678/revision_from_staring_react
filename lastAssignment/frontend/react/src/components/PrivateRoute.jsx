import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {Navigate} from 'react-router-dom'



export default function PrivateRoute({children}){

    let islogin=useContext(AuthContext);
    if(!islogin){
        return <Navigate to="/login"/>
    }
  return children
}
