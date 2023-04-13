import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getSingleMessage} from '../../functions/admin/messages'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const SingleMessage = () => {
  const { messageId } = useParams(); // Access productId from URL parameter
  const [messageData, setMessageData] = useState(null); // State to store product data

  useEffect(() => {
    
    const fetchMessageData = async () => {
      try {
        const response = await getSingleMessage(messageId); 
        
        
        setMessageData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchMessageData(); 
  }, [messageId]);
  if (!messageData) {
    return <p>Loading...</p>; 
  }
  return (
    <>
    <Box sx={{marginTop: 3, display: "flex", justifyContent: "center", width: "100%",color:"#000000"}}>
  <Typography variant="h4" gutterBottom>
  <b>Subject:</b>  {messageData.subject}
  </Typography>
</Box>
    <Box sx={{marginTop: 3, display: "flex", justifyContent: "flex-start", width: "80%",marginLeft:2,color:"#000000"}}>
  <Typography variant="h6" gutterBottom>
  <b>Name:</b>  {messageData.name}
  </Typography>
</Box>
    <Box sx={{marginTop: 3, display: "flex", justifyContent: "flex-start", width: "80%",marginLeft:2,color:"#000000"}}>
    <Typography variant="h6" gutterBottom>
  <b>Email:</b>  {messageData.email}
  </Typography>
</Box>
<Box sx={{marginTop: 3, display: "flex", justifyContent: "flex-start", width: "80%",marginLeft:2,color:"#000000",marginBottom:2}}>
        <Typography variant="subtitle1" gutterBottom>
      <b>Detail:</b> {messageData.message}
      </Typography>
    </Box>
    </>
  )
}

export default SingleMessage