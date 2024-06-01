import { Card, CardHeader, CardBody, Heading,Text,Box,Stack,StackDivider, } from '@chakra-ui/react';
export default function TicketCards({Title,Status,Priority}){
    return(
        <Card>
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
               {Title}
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Status
                </Heading>
                <Text pt='2' fontSize='sm'>
               {Status}
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Priority
                </Heading>
                <Text pt='2' fontSize='sm'>
               {Priority}
                </Text>
            </Box>
            </Stack>
        </CardBody>
        </Card>
            )
        }
