// import { Box,Container,Typography,Link } from '@mui/system'
import { Container, Typography, Link,Box } from '@mui/material';
import React from 'react'

function Footer() {
  return (
 
      <footer>
      <Container>
        <Typography variant="body2" color="#2196f3" align="center">
          Your Footer Content Here
        </Typography>
        <Typography variant="body2" color="#2196f3" align="center">
          <Link color="inherit" href="#">
            Link to Something
          </Link>
        </Typography>
      </Container>
    </footer>

    
    
  )
}

export default Footer
