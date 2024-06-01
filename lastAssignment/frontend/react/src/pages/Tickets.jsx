import {Button,Flex,SimpleGrid} from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import LoadingIndiacter from '../components/LoadingIndiacter';
import ErrorIndicator from '../components/ErrorIndicater';
import TicketCards from '../components/TicketCard';
import axios from "axios";


export default function Tickets(){
    let [tickets,setTickets]=useState([]);
    let [error,setError]=useState(false);
    let [loading,setLoading]=useState(false)
    let navigate=useNavigate();

    async function FetchAndDisplayData(){
        try {
             setLoading(true)
            let res=await axios("http://localhost:3000/tickets");
            setTickets(res?.data);
           
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
            
        }
        }
        useEffect(()=>{
            FetchAndDisplayData()
        },[])

        if(error){
            return <ErrorIndicator/>
        }
        if(loading){
            console.log(error)
            return <LoadingIndiacter/>
        }

       


    return (
        <>
        <Flex 
        direction="row-reverse"
        m={3}>
         <Button colorScheme='red' variant='outline' onClick={()=>{navigate("/ticket/create")}}>
                Create Ticket
        </Button>
        
        </Flex>
        <SimpleGrid>
           {tickets.map((ticket)=>{
            return <TicketCards   {...ticket} key={ticket.id}/>
           })}
           
        </SimpleGrid>

        </>
    )
}