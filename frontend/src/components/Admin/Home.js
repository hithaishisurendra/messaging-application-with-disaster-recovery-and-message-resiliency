import React from 'react';
import {Box, Text} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" h="100%">
        <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Welcome to Admin Dashboard.
        </Text>
    </Box>
  )
}

export default Home