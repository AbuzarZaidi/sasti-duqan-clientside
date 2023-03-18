import React, { useState } from "react";
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

const AddProduct = () => {
  return (
    <Box
      sx={{ width: "95%", mx: "auto", marginTop: "1rem", marginBottom: "5rem" }}
    >
      <Box>
        <Typography variant="h4" component="h3">
          Add Product
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        <Box>
          <TextField
            id="name"
            size="small"
            label="Name"
            variant="outlined"
            sx={{ width: "400px" }}
          />
        </Box>
        <Box>
          <TextField
            id="price"
            size="small"
            label="Price"
            variant="outlined"
            sx={{ width: "400px" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        <Box>
          <TextField
            id="quantity"
            size="small"
            label="Quantity"
            variant="outlined"
            sx={{ width: "400px" }}
          />
        </Box>
        <Box>
          <TextField
            id="category"
            size="small"
            label="Category"
            variant="outlined"
            sx={{ width: "400px" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        <Box>
          <TextField
            id="color"
            size="small"
            label="Color"
            variant="outlined"
            sx={{ width: "400px" }}
          />
        </Box>
        <Box>
          <TextField
            id="size"
            size="small"
            label="Size"
            variant="outlined"
            sx={{ width: "400px" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        <Box>
          <TextField
            id="description"
            size="small"
            label="Description"
            variant="outlined"
            sx={{ width: "910px" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        <Box>
          <TextField
            id="lDescription"
            label="Long Description"
            multiline
            rows={4}
            variant="outlined"
            sx={{ width: "910px" }}
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: "40px", marginLeft: "50px" }}>
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            Visibility
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Public"
              sx={{ marginLeft: "50px" }}
            />
            <FormControlLabel
              sx={{ marginLeft: "150px" }}
              value="male"
              control={<Radio />}
              label="Private"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginTop: "50px", marginLeft: "50px" }}>
          <Typography variant="body1" component="h3" sx={{color:"#000000"}}>
            Cover Image
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#252525",
              borderRadius: "50px",
              marginTop: "10px",
              marginLeft: "50px",
            }}
          >
            Upload Image
          </Button>
        </Box>
        <Box sx={{ marginTop: "50px", marginLeft: "50px" }}>
          <Typography variant="body1" component="h3" sx={{color:"#000000"}}>
            Other Images
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#252525",
              borderRadius: "50px",
              marginTop: "10px",
              marginLeft: "50px",
            }}
          >
            Upload Image
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "50px" }}
      >
        <Button variant="contained" sx={{ backgroundColor: "#FD8004" }}>
          Add Product
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
