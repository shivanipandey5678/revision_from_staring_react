
// import {NavLink } from 'react-router-dom';
// import {Flex,Button} from '@chakra-ui/react'
// import { useContext ,useEffect} from "react";
// import { AuthContext } from "../context/AuthContext";
// import {useNavigate} from 'react-router-dom'

// const listOfLinks=[
//     {
//       to:"/",
//       displatText:"Home"

//     },
//     {
//         to:"/about",
//         displatText:"About"
  
//       },
//       {
//         to:"/contact",
//         displatText:"Contact"
  
//       },
//       {
//         to:"/tickets",
//         displatText:"Tickets"
  
//       },
//       {
//         to:"/login",
//         displatText:"Login"
  
//       },
// ]

// export default function Navbar(){
//     let Navigate=useNavigate();
//     let {authDetails:{isLogin},logout}=useContext(AuthContext);
//     const defaultStyle={color:"blue"};
//     const activeStyle={color:"red"};

//     useEffect(()=>{
//         if(!isLogin){
//            return Navigate("/login")
//         }
//     },[isLogin, Navigate])

//     return(
//        <Flex
//        align="center"
//        justify="space-around"
//        bg="gray"
//        p={4}>
//          <h2>Task Manager</h2>
//          {listOfLinks.map((link)=>{
//             return <NavLink 
//             key={link.to} 
//             to={link.to} 
//             style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}

//             >{link.displatText}</NavLink>
//          })}
//          {isLogin && (
//         <Button colorScheme="red" onClick={logout}>
//           Logout
//         </Button>
//       )}
       
       
       
//        </Flex>
//     )
// }












import { Flex, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const listOfLinks = [
  { to: '/', displayText: 'Home' },
  { to: '/about', displayText: 'About' },
  { to: '/contact', displayText: 'Contact' },
  { to: '/tickets', displayText: 'Tickets' },
  
  
];

export default function Navbar() {
    let navigate=useNavigate()
  const { authDetails: { isLogin }, logout } = useContext(AuthContext);
  const defaultStyle = { color: 'blue' };
  const activeStyle = { color: 'red' };

  return (
    <Flex
      align="center"
      justify="space-around"
      bg="gray"
      p={4}
    >
      <h2>Task Manager</h2>
      {listOfLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
        >
          {link.displayText}
        </NavLink>
      ))}
      {isLogin && (
        <Button colorScheme="red" onClick={logout}>
          Logout
        </Button> 
      )}
      {!isLogin && (  <Button colorScheme="red" onClick={()=>{navigate("/login")}}>
          Login
        </Button> )}
     
    </Flex>
  );
}
