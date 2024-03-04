import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const AccessQueue = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" h="100%">
      <Button mb={5} colorScheme='blue'>Access Queue Messages</Button>
      <Button colorScheme='blue'>Log File Download</Button>
    </Box>
  )
}

export default AccessQueue