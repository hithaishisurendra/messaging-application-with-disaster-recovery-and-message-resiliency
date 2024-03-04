import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const AccessDLQ = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" h="100%">
      <Button mb={5} colorScheme='blue'>View DLQ</Button>
      <Button data-testid='serialization' colorScheme='blue'>Select Serialization Method</Button>
    </Box>
  )
}

export default AccessDLQ