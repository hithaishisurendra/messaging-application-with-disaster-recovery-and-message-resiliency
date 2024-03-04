import { Box } from '@chakra-ui/react'
import React from 'react'
import Home from './Home'
import { Route, Switch } from 'react-router-dom'
import Users from './Users';
import AccessQueue from './AccessQueue';
import AccessDLQ from './AccessDLQ';

const TabContent = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Switch>
        <Route exact path = "/admin" > <Home /> </Route>
        <Route path = "/admin/users"><Users /></Route>
        <Route path = "/admin/accessqueue"><AccessQueue /> </Route>
        <Route path = "/admin/accessdlq"><AccessDLQ /> </Route>
      </Switch>
    </Box>
  )
}

export default TabContent