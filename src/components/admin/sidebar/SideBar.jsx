import React from 'react';
import { Box } from '@mui/material';

const SideBar = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center',mx:"auto",marginTop:"10px" }}>
   <Box
  sx={{
    backgroundImage: `url("/img/logo3.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100px',
    width: '100px',
  }}
/> 
      
    </Box>
  );
};

export default SideBar;
{/* <img src="img/logo3.png" alt="" />
<Box
  sx={{
    backgroundImage: `url("img/logo3.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100px',
    width: '100px',
  }}
/> */}