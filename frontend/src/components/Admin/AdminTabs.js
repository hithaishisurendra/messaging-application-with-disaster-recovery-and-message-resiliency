import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import AdminProfile from './AdminProfile';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useHistory} from "react-router-dom";
import { faHome, faUser, faLayerGroup, faCubesStacked } from '@fortawesome/free-solid-svg-icons';

const AdminTabs = () => {
  const history = useHistory();
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
      textAlign="center"
    >
      <AdminProfile />

      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
        mb={4}
      >
        {/* <Router> */}
          <Box
            cursor="pointer"
            px={3}
            py={2}
            borderRadius="lg"
            bg="#E8E8E8"
            color="black"
            mb={2}
          >
            <Link to = "/admin">
              <Text>
                <FontAwesomeIcon style={{marginRight: "1rem"}} icon={faHome} />
                  Home
              </Text>
            </Link>
          </Box>

          <Box
            cursor="pointer"
            px={3}
            py={2}
            borderRadius="lg"
            bg="#E8E8E8"
            color="black"
            mb={2}
          >
            <Link to = "/admin/users">
              <Text>
                <FontAwesomeIcon style={{marginRight: "1rem"}} icon={faUser} />
                  Users
              </Text>
            </Link>
          </Box>

          <Box
            cursor="pointer"
            px={3}
            py={2}
            borderRadius="lg"
            bg="#E8E8E8"
            color="black"
            mb={2}
          >
            <Link to = "/admin/accessqueue">
              <Text>
                  <FontAwesomeIcon style={{marginRight: "1rem"}} icon={faLayerGroup} />
                  Access Queue
              </Text>
            </Link>
          </Box>

          <Box
            cursor="pointer"
            px={3}
            py={2}
            borderRadius="lg"
            bg="#E8E8E8"
            color="black"
            mb={2}
          >
            <Link to = "/admin/accessdlq">
              <Text>
                <FontAwesomeIcon style={{marginRight: "1rem"}} icon={faCubesStacked} />
                  Access DLQ
              </Text>
            </Link>
          </Box>

          {/* <Box >
            <Link to = "/">
              <Button size={'lg'} w="100%" mt={170} onClick={() => history.push("/")} colorScheme='blue'>Logout</Button>
            </Link>
          </Box> */}
        {/* </Router> */}
        <Button size={'lg'} w="100%" mt={170} onClick={() => history.push("/")} colorScheme='blue'>Logout</Button>
      </Box>
          
    </Box>
  )
}

export default AdminTabs