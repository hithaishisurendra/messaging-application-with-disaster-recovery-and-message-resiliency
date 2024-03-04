import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import AdminHeader from '../components/Admin/AdminHeader'
import AdminTabs from '../components/Admin/AdminTabs'
import TabContent from "../components/Admin/TabContent";
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const AdminDashboard = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if(user) history.push("/admin");
  }, [history]);

  return (
    <div style={{width: "100%"}}>
      <Router>
        <AdminHeader />
          <Box 
            display = "flex"
            justifyContent="space-between"
            w="100%"
            h="91.5vh"
            p="10px"
          >
            <AdminTabs />
            
            <TabContent /> 
          </Box>
      </Router>
    </div>
  )
}

export default AdminDashboard
