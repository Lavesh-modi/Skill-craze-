import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
export default function Cards() {
  return (
    <Box
    // sx={{
    //   marginTop: "100px",
    //   marginLeft: "300px",
    // }}
    >
      <Card sx={{ maxWidth: 345, borderRadius: "20px" }}>
        {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140

        "
        image="https://images.pexels.com/photos/4074167/pexels-photo-4074167.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
      /> */}
        <Box
          sx={{
            display: "flex",
            gap: "25px",
            padding: "9px",
            marginLeft: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ab003c",
              display: "inline-block",
              width: "4vw",
            }}
          >
            <CardMedia
              // marginLeft="150px"
              component="img"
              alt="green iguana"
              height="48px"
              width="58px"
              image="https://images.pexels.com/photos/4074167/pexels-photo-4074167.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            />
          </Box>
          <Box
            sx={{
              // backgroundColor: "#618833",
              display: "inline-block",
              overflow:"hidden",
            }}
          >
            <Typography gutterBottom variant="h5" component="div" sx={{textTransform:"uppercase",fontFamily:"Lucida Console, Courier New, monospace",fontWeight:'800',fontSize:"1.7rem",letterSpacing:"0.1rem",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>
              Job tittle
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ padding: "6px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center", color: "#1769aa" }}
          >
            Comapany
          </Typography>
          {/* <Box sx={{ display: "flex", justifyItems: "space-between" }}>
            <Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: "14px",
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    fontSize: "14px",
                  }}
                />
                Bangkok,TH
              </Typography>

              <Box>
                <Typography variant="h6" gutterBottom sx={{ fontSize: "14px" }}>
                  <AttachMoneyOutlinedIcon sx={{ fontSize: "14px" }} />
                  8000
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom  sx={{fontSize:"14px"}}>
                <WorkOutlineOutlinedIcon sx={{fontSize:"14px"}} />
                Contract
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom   sx={{fontSize:"14px"}}>
                <QueryBuilderOutlinedIcon  sx={{fontSize:"14px"}} />8 July
              </Typography>
            </Box>
          </Box> */}
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  <LocationOnOutlinedIcon
                    sx={{
                      fontSize: "14px",
                    }}
                  />
                  Bangkok, TH
                </Typography>

                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontSize: "14px" }}
                  >
                    <AttachMoneyOutlinedIcon sx={{ fontSize: "14px" }} />
                    8000
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom sx={{ fontSize: "14px" }}>
                  <WorkOutlineOutlinedIcon sx={{ fontSize: "14px" }} />
                  Contract
                </Typography>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontSize: "14px" }}
                  >
                    <QueryBuilderOutlinedIcon sx={{ fontSize: "14px" }} />8 July
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          {/* <Button size="small">Learn More</Button> */}
          <Button size="small">Apply Now</Button>
        </CardActions>
      </Card>
    </Box>

    // <Container    sx={{ height: "100vh", width: "100vw", p: 0 }}>
    //   <Box sx={{ bgcolor: "#cfe8fc", height: "100%", width: "100%"}} />
    // </Container>
  );
}
