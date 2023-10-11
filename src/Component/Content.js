import React from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

import Container from "@mui/material/Container";

function Content() {
  return (
    <Container maxWidth="lg" sx={{bgcolor:'#b2102f'}}>
      <Box
        sx={{
          width: 500,
          height: '100vh',
          backgroundColor: "primary.dark",
        
        }}
      >
      <Box sx={{padding:'10px'}}>
      <Typography variant="h4" gutterBottom>
         Heading
      </Typography>
      <Box sx={{padding:'10px',bgcolor:'#d1ff33'}}> 
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      </Box>
      <Box>
      <Typography variant="h4" gutterBottom>
         Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
         Heading
      </Typography>
      <Box sx={{padding:'10px',bgcolor:'#d1ff33'}}> 
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      </Box>
      <Box sx={{marginTop:'20px'}}>
      <Typography variant="h6" gutterBottom>
         Heading
      </Typography>
      <Box>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        
      </Typography>
      </Box>
      <Box>
      <Typography variant="h4" gutterBottom>
         Heading
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>


      </Box>


      </Box>


      </Box>



        
      </Box>
      </Box>
    </Container>
  );
}

export default Content;
