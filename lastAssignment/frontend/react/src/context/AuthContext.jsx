import { createContext ,useState} from "react";

export let AuthContext=createContext();

export default function AuthContextProvider({children}){
    let [authDetails,setAuthDetails]=useState({
        isLogin:false,
        token:null,
    })
    function logout(){
        setAuthDetails({
            isLogin:false,
            token:null,
        })
    }


    function login(token){
        setAuthDetails({
            isLogin:true,
            token:token,
        })
    }
    return <AuthContext.Provider value={{authDetails,logout,login}}>{children}</AuthContext.Provider>
}