
import {NavLink } from 'react-router-dom';
import {Flex} from '@chakra-ui/react'

const listOfLinks=[
    {
      to:"/",
      displatText:"Home"

    },
    {
        to:"/about",
        displatText:"About"
  
      },
      {
        to:"/contact",
        displatText:"Contact"
  
      },
      {
        to:"/tickets",
        displatText:"Tickets"
  
      },
      {
        to:"/login",
        displatText:"Login"
  
      },
]

export default function Navbar(){
    const defaultStyle={color:"blue"};
    const ActiveStyle={color:"red"};

    return(
       <Flex
       align="center"
       justify="space-around"
       bg="gray"
       p={4}>
         <h2>Task Manager</h2>
         {listOfLinks.map((link)=>{
            return <NavLink 
            key={link.to} 
            to={link.to} 
            style={({ activeClassName }) => (activeClassName ? ActiveStyle : defaultStyle)}

            >{link.displatText}</NavLink>
         })}
       
       
       </Flex>
    )
}




