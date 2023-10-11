import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navbar from '../Component/Navbar';
import Grid from '@mui/material/Grid';
import Searchbar2 from '../Component/Searchbarr';
import Sidebar from '../Component/Sidebar';
import Content from '../Component/Content';

function Company() {
  return (
<Box>
<Navbar></Navbar>

<Box  sx={{ flexGrow: 1,bgcolor:'/my-react-app/public/logo512.png' }}>
<Grid container spacing={2}>
<Grid item xs={4}>
          <Sidebar ></Sidebar>
        </Grid>
        <Grid item xs={8}>
        <Content></Content>
          
        </Grid>



</Grid>



</Box>

</Box>
   
  
  )
}

export default Company
