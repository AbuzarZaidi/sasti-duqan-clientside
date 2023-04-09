import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const SingleMessage = () => {
  const message = useSelector((state) => state.messageData.message);

  return (
    <>
    <Box sx={{marginTop: 3, display: "flex", justifyContent: "center", width: "100%",color:"#000000"}}>
  <Typography variant="h4" gutterBottom>
  <b>Subject:</b>  {message.subject}
  </Typography>
</Box>
    <Box sx={{marginTop: 3, display: "flex", justifyContent: "flex-start", width: "80%",marginLeft:2,color:"#000000"}}>
  <Typography variant="h6" gutterBottom>
  <b>Name:</b>  {message.name}
  </Typography>
</Box>
    <Box sx={{marginTop: 3, display: "flex", justifyContent: "flex-start", width: "80%",marginLeft:2,color:"#000000"}}>
    <Typography variant="h6" gutterBottom>
  <b>Email:</b>  {message.email}
  </Typography>
</Box>
<Box sx={{marginTop: 3, display: "flex", justifyContent: "flex-start", width: "80%",marginLeft:2,color:"#000000",marginBottom:2}}>
        <Typography variant="subtitle1" gutterBottom>
      <b>Detail:</b> {message.message}
      </Typography>
    </Box>
    </>
  )
}

export default SingleMessage