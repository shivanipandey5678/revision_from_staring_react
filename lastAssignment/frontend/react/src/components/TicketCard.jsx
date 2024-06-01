import { Card, CardHeader, CardBody, Heading,Text,Box,Stack,StackDivider,CardFooter,Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export default function TicketCards({id,title,status,priority}){
    let navigate=useNavigate();
    return(
        <Card m={6}>
        <CardHeader>
            <Heading size='md'>Ticket</Heading>
        </CardHeader>

        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
               Title
                </Heading>
                <Text pt='2' fontSize='sm'>
               {title}
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Status
                </Heading>
                <Text pt='2' fontSize='sm'>
               {status}
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Priority
                </Heading>
                <Text pt='2' fontSize='sm'>
               {priority}
                </Text>
            </Box>
            </Stack>
        </CardBody>
        <CardFooter>
            <Button colorScheme='blue' onClick={()=>{navigate(`/ticket/view/${id}`)}}>View ticket</Button>
        </CardFooter>
        </Card>
            )
        }
