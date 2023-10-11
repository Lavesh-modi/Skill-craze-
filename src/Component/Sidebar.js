import React from "react";
// import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Cards from "./Cards";

function Sidebar() {
  return (
    // <CssBaseline />
    <Container maxWidth="lg" sx={{ marginLeft: "0px" }}>
      <Box
        sx={{
        //   bgcolor: "#cfe8fc",
          height: "100vh",
          maxWidth: "30vw",
          position: "relative",
          minWidth: "298px",
        }}
      >
        <Box
          sx={{
            // bgcolor: "#f50057",
            display: "inherit",
            justifyContent: "space-around",

            margin: "auto",
            position: "absolute",
            top: "50%",
            left: "0",
            right: "0",
            transform: "translate(0,-50%)",
          }}
        >
          <Cards />
        </Box>
      </Box>
    </Container>
  );
}

export default Sidebar;
