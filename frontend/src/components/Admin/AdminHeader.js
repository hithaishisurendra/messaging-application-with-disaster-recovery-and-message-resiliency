import React from 'react';
import {Box, Text } from '@chakra-ui/react';


const AdminHeader = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >

        <Text fontSize="2xl" fontFamily="Work sans">
          ADMIN DASHBOARD
        </Text>
      </Box>

      
    </>
  )
}

export default AdminHeader