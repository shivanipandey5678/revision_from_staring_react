
import {Card,CardHeader,Heading,CardBody,StackDivider,Stack,Box,Text,Container,HStack,Button,CardFooter} from '@chakra-ui/react'
 import {useState,useEffect} from 'react';
 import { useParams ,useNavigate} from 'react-router-dom';
 import axios  from 'axios';
 import ErrorIndicator from '../components/ErrorIndicater';
 import LoadingIndiacter from '../components/LoadingIndiacter';

export default function TicketView(){
    let {id}=useParams();
    const navigate = useNavigate();
     let [singleTicket,setSingleTicket]=useState({})
     let [err,setErr]=useState(false);
     let [loading,setLoading]=useState(false);


    async function fetchAndDisplay(id){
        setLoading(true)
        try {
           
            let res=await axios(`http://localhost:3000/tickets/${id}`);
            setSingleTicket(res?.data)
            setLoading(false)

        } catch (error) {
            setErr(true);
            setLoading(false)
        }
       }
    useEffect(()=>{
        fetchAndDisplay(id)
    },[id]);


    async function deleteTicket() {
        try {
          let res = await axios({
            method: "delete",
            url: `http://localhost:3000/tickets/${id}`,
          });
    
          if (res.status === 200) {
            navigate("/tickets");
          }
        } catch (error) {
          console.log(error);
        }
      }

    if(loading){
        return <LoadingIndiacter/>
    }

    if(err){
        return <ErrorIndicator/>
    }
    const { title, description, assignee, status, priority } = singleTicket;
    return (
        <Container paddingTop={50}>
        <Card key={id}>
  <CardHeader>
    <Heading size='md'>Ticket</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        title:{title}
        </Heading>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        status:{status}
        </Heading>
       
      </Box>
      <Box>
       
        <Text pt='2' fontSize='sm'>
        description:{description}
        </Text>
        <Text pt='2' fontSize='sm'>
        priority:{priority}
        </Text>
        <Text pt='2' fontSize='sm'>
        assignee:{assignee}
        </Text>

      </Box>
    </Stack>
  </CardBody>
  <CardFooter>
          <HStack spacing={4}>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => {
                navigate(`/ticket/edit/${id}`);
              }}
            >
              Edit Ticket
            </Button>
            <Button variant="outline" colorScheme="red" onClick={deleteTicket}>
              Delete Ticket
            </Button>
          </HStack>
    </CardFooter>

</Card>
</Container>
    )
}


