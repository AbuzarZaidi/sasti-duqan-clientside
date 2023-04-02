import React, { useState, useEffect } from "react";
import { getAllMessages,deleteMessage } from "../../functions/admin/messages";
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
const AllProducts = () => {
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
  const deleteHandler = async (multiId) => {
   
    const result = await deleteMessage(multiId);
    console.log(result.result);
    const data = [];
    if (result.result) {
      const filteredMessages = messages.filter((message) => {
        return !multiId.includes(message.id);
      });
      setMessages(filteredMessages);
    }
  };

  return (
    <Box
      sx={{ width: "95%", mx: "auto", marginTop: "1rem", marginBottom: "5rem" }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Box>
          <Typography variant="h4" component="h3">
            All Messages
          </Typography>
        </Box>
        <Box>
         
        </Box>
      </Box>
      <Box>
      <AllMessagesGrid  rows={messages} deleteHandler={deleteHandler}/>
        {/* <AllProductsGrid
          rows={messages}
          // deleteHandler={deleteHandler}
          // updateHandler={updateHandler}
        /> */}
      </Box>
    </Box>
  );
};

export default AllProducts;
