import { Box, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const AdminProfile = () => {
  return (
    <Box mb={10}>
        <Image
            borderRadius='full'
            boxSize='150px'
            src='https://gravatar.com/avatar/5965315bba0cccff9cf3aeff55bdef82?s=400&d=robohash&r=x'
            alt='Admin Ji'
        />
        <Stack mt='6' spacing='3'>
            <Heading size='md'>ADMIN</Heading>
        </Stack>
    </Box>
  )
}

export default AdminProfile