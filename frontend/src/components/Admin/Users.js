import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Users = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
    
  //   axios.get('/api/chat')
  //     .then((response) => {
  //       console.log(response);
  //       setUsers(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);


  return (
    <Box display="flex" flexDirection="column" alignItems="center" h="100%">
      <Heading as='h5' size='sm' mb={7}>
        Registered Users
      </Heading>

      <SimpleGrid spacing={4} templateColumns="repeat(3, 1fr)">
            <Card width="20rem" textAlign="center">
              <CardHeader>
                <Image
                    margin="auto"
                    borderRadius='full'
                    boxSize='150px'
                    src='https://gravatar.com/avatar/01953be58efba70371f44f14d2afeb08?s=400&d=robohash&r=x'
                    alt='Admin Ji'
                    mb="4"
                />
                <Heading size='md'> Humpty Sharma </Heading>
              </CardHeader>
              <CardBody>
                <Text>Email: humpty@gmail.com</Text>
                <Text>Status: Online</Text>
              </CardBody>
              <CardFooter>
                <Button width="100%" colorScheme='red'>Unregister User</Button>
              </CardFooter>
            </Card>
            
            <Card textAlign="center">
              <CardHeader>
                <Image
                    margin="auto"
                    borderRadius='full'
                    boxSize='150px'
                    src='https://gravatar.com/avatar/320d996b124d6f7edba748d9d8f4610a?s=400&d=robohash&r=x'
                    alt='Admin Ji'
                    mb="4"
                />
                <Heading size='md'> Dipti Kaur </Heading>
              </CardHeader>
              <CardBody>
                <Text>Email: dipti@gmail.com</Text>
                <Text>Status: Online</Text>
              </CardBody>
              <CardFooter>
                <Button width="100%" colorScheme='red'>Unregister User</Button>
              </CardFooter>
            </Card>

            <Card textAlign="center">
              <CardHeader>
                <Image
                    margin="auto"
                    borderRadius='full'
                    boxSize='150px'
                    src='https://gravatar.com/avatar/a4f03caafef6d8f0af98f3e78ade520f?s=400&d=robohash&r=x'
                    alt='Admin Ji'
                    mb="4"
                />
                <Heading size='md'> John Smilga </Heading>
              </CardHeader>
              <CardBody>
                <Text>Email: smilga@gmail.com</Text>
                <Text>Status: Offline</Text>
              </CardBody>
              <CardFooter>
                <Button width="100%" colorScheme='red'>Unregister User</Button>
              </CardFooter>
            </Card>

          </SimpleGrid>
    </Box>
    
    
  )
}

export default Users