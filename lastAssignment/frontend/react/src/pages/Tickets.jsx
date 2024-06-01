import {Button,Flex,SimpleGrid,Container,Select} from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import LoadingIndiacter from '../components/LoadingIndiacter';
import ErrorIndicator from '../components/ErrorIndicater';
import TicketCards from '../components/TicketCard';
import axios from "axios";


export default function Tickets(){
    const [sortOrderValue, setSortOrderValue] = useState("");
    const [filterValue, setFilterValue] = useState("");
    let [tickets,setTickets]=useState([]);
    let [error,setError]=useState(false);
    let [loading,setLoading]=useState(false)
    let navigate=useNavigate();

    async function FetchAndDisplayData(sortOrderValue, filterValue){
        setLoading(true)
       


        
        try {
            let queryParams = {};
            if (filterValue) {
              queryParams.status = filterValue;
            }
      
            if (sortOrderValue) {
              queryParams._sort = "priority";
              queryParams._order = sortOrderValue;
            }
             
            let res = await axios({
                method: "get",
                url: `http://localhost:3000/tickets`,
                params: queryParams,
              });
            setLoading(false)
            setTickets(res?.data);
           
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
            
        }
        }
        useEffect(()=>{
            FetchAndDisplayData(sortOrderValue, filterValue)
        },[sortOrderValue, filterValue])

        if(error){
            console.log(error)
        }
        if(loading){
           
            return <LoadingIndiacter/>
        }

       


    return (
        <Container maxW="1000px" >
        <Flex 
        direction="row-reverse"
        m={8}
        rowGap={6}
        columnGap={6}
        >
         <Button colorScheme='red' variant='outline' onClick={()=>{navigate("/ticket/create")}}>
                Create Ticket
        </Button>
        
        </Flex>
        <Flex>
        <Select placeholder='Sort by Priority'  value={sortOrderValue} onChange={(e)=>{setSortOrderValue(e.target.value)}}>
            <option value='asc' >Low to High</option>
            <option value='desc' >High to Low</option>
           
        </Select>
        <Select placeholder='Filter by Status'  value={filterValue}  onChange={(e)=>{setFilterValue(e.target.value)}}>
            <option value='pending'>Pending</option>
            <option value='progress'>Progress</option>
            <option value='completed'>Completed</option>
        </Select>
        </Flex>
        <SimpleGrid columns={{base:1,md:2,lg:3}}>
           {tickets.map((ticket)=>{
          
            return <TicketCards   {...ticket} key={ticket.id}/>
           })}
           
        </SimpleGrid>
        </Container>

        
    )
}