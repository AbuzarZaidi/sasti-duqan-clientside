import React from "react";
import { Grid,Box } from "../../../utils/MUI";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
const PageStructure = (props) => {
  return (
    <Grid container>
      <Grid
        item
        xs={0}
        md={2}
        lg={2.2}
        // sx={{
        //   display: { xs: "none", md: "flex", lg: "flex" },
        //   backgroundColor: "#262626",
        //   height: "100vh",
        //   position: "fixed",
        //   top: 0
        // }}
      >
        <Box sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          backgroundColor: "#262626",
          height: "100vh",
          position: "fixed",
          width:"19%",
          top: 0
        }}>
 <SideBar />
        </Box>
       
      </Grid>
      <Grid item xs={12} md={10} lg={9.8} sx={{ backgroundColor: "#F5F5F5" }}>
        <TopBar />
        <Grid
          container
          sx={{
            backgroundColor: "#ffffff",
            width: "96%",
            mx: "auto",
            borderRadius: "8px 8px 8px 8px",
            marginTop: "-50px",
            marginBottom: "10px",
            zIndex: "1000",
            overflow: "auto"
          }}
        >
          {props.children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageStructure;
