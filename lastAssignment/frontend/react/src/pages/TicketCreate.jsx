import { Input,VStack,Textarea,Select,Button,Container} from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
export default function TicketCreate(){
    let navigate=useNavigate();
    let [title,setTitle]=useState("");
    let [description,setDescription]=useState("");
    let [assignee,setAssignee]=useState("");
    let [status,setStatus]=useState("");
    let [priority,setPriority]=useState("");

    async function handleCreateTicket(){
        try {
            const newTicket={
                title,
                description,
                assignee,
                status,
                priority,
            }

            let res=await axios({
                method:"post",
                url:"http://localhost:3000/tickets",
                data:newTicket,
            })
            if(res.status===201){
                navigate("/tickets")
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        

    }

    
    

    return <>
        <Container>
    <VStack spacing={6}>
       
        <Input placeholder='Title' size='lg' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <Textarea placeholder='Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        <Select placeholder='Assignee name' value={assignee} onChange={(e)=>{setAssignee(e.target.value)}}>
            <option value='Rahul'>Rahul</option>
            <option value='Sakshi'>Sakshi</option>
            <option value='Abdul'>Abdul</option>
            <option value='Saharan'>Saharan</option>
            <option value='Varun '>Varun</option>
        </Select>
        <Select placeholder='Select Status' value={status} onChange={(e)=>{setStatus(e.target.value)}}>
            <option value='Pending'>Pending</option>
            <option value='Progress'> Progress</option>
            <option value='Completed'>Completed</option>
        </Select>
        <Select placeholder='Select Priority' value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
        <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>

            
        </Select>
        <Button colorScheme='teal' variant='outline' onClick={handleCreateTicket}>
            Create Ticket 
        </Button>



    </VStack>
    </Container>



    

    
    
    
    
    
    </>
}