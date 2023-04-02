import React, { useState,useEffect } from "react";
import { getAllMessages } from "../../functions/admin/messages";
import {
  Button,
  FormLabel,
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "../../utils/MUI";
import AllMessagesGrid from "../../components/admin/allmessages/AllMessagesGrid";

const AllMessages = () => {
  const [messages,setMessages]=useState([])
  useEffect(() => {
    const fetchData=async()=>{
const result=await getAllMessages("public");
console.log(result)
if(result.data.length>0){
  setMessages(result.data)
  console.log(result.data)
}
    }
    fetchData();
  }, [])
  return (
    <Box
      sx={{ width: "95%", mx: "auto", marginTop: "1rem", marginBottom: "5rem" }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
        <Box>
          <Typography variant="h4" component="h3">
            All Messages
          </Typography>
        </Box>
      </Box>
      <Box>
        <AllMessagesGrid  rows={messages}/>
      </Box>
    </Box>
  );
};

export default AllMessages;
