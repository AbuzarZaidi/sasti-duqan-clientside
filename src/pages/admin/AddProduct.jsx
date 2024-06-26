import React, { useState } from "react";
import { createProducts } from "../../functions/admin/products";
import Stack from "@mui/material/Stack";
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
  Checkbox,
  CloseIcon,
  AlertTitle,
  MenuItem,
  Alert,
} from "../../utils/MUI";
const AddProduct = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    longDescription: "",
    price: 0,
    stock: 0,
  });
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesShow, setImagesShow] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");


  const [visibility, setVisibility] = useState("private");
  const handleImageUpload = (e) => {
    const uploadedImages = Array.from(e.target.files);
    setImagesShow(uploadedImages)
    setImages(e.target.files);
  };

  const handleImageClick = (index) => {
    // Update the state with the index of the clicked image
    setSelectedImageIndex(index);
  };
  const handleSizeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSizes([...selectedSizes, value]);
    } else {
      setSelectedSizes(selectedSizes.filter((size) => size !== value));
    }
  };

  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedColors([...selectedColors, value]);
    } else {
      setSelectedColors(selectedColors.filter((color) => color !== value));
    }
  };
  const handleVisibilityChange = (event) => {
    setVisibility(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductInfo({ ...productInfo, [name]: value });
  };
  const closeAlertHandler = () => {
    setShowAlert(false);
    setAlertMessage("");
    setAlertType("");
  };
  const addProductHandler = async () => {
    const formData = new FormData();
    formData.append('mainImageIndex',selectedImageIndex)
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
    
    formData.append("name", productInfo.name);
    formData.append("description", productInfo.description);
    formData.append("longDescription", productInfo.longDescription);
    formData.append("price", productInfo.price);
    formData.append("stock", productInfo.stock);
    formData.append("visibility", visibility);
    formData.append("selectedColors", JSON.stringify(selectedColors));
    formData.append("selectedSizes",JSON.stringify(selectedSizes));
    formData.append("selectedCategorys", selectedCategory);
   
    const response=  await createProducts(formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  
    if (response.success === true) {
      setAlertType("success");
    } else if (response.success === false) {
      setAlertType("error");
    }
    setShowAlert(true);
    setAlertMessage(response.message);
    
    setProductInfo({
      name: "",
      description: "",
      longDescription: "",
      price: 0,
      stock: 0,
    });
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedCategory([]);
    setVisibility("private");
  };

  const isButtonDisabled =
    productInfo.name === "" ||
    productInfo.description === "" ||
    productInfo.longDescription === "" ||
    productInfo.price === 0 ||
    productInfo.stock === 0;
  return (
    <>
      {showAlert && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert
            severity={alertType}
            action={
              <CloseIcon fontSize="inherit" onClick={closeAlertHandler} />
            }
          >
            <AlertTitle>
              {alertType === "success" ? "Success" : "Error"}
            </AlertTitle>
            <strong>{alertMessage}</strong>
          </Alert>
        </Stack>
      )}

      <Box
        sx={{
          width: "95%",
          mx: "auto",
          marginTop: "1rem",
          marginBottom: "5rem",
        }}
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
              name="name"
              size="small"
              label="Name"
              variant="outlined"
              value={productInfo.name}
              onChange={handleInputChange}
              sx={{ width: "400px" }}
            />
          </Box>
          <Box>
            <TextField
              id="price"
              name="price"
              size="small"
              type="number"
              label="Price"
              value={productInfo.price}
              onChange={handleInputChange}
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
              id="stock"
              name="stock"
              type="number"
              size="small"
              label="Stock"
              variant="outlined"
              value={productInfo.stock}
              onChange={handleInputChange}
              sx={{ width: "400px" }}
            />
          </Box>
          <Box>
          <TextField
      id="category"
      size="small"
      label="Category"
      variant="outlined"
      select
      value={selectedCategory}
      onChange={handleCategoryChange}
      sx={{ width: "400px" }}
    >
      <MenuItem value="fashion">
        <FormControlLabel
          control={
            <Radio
              checked={selectedCategory === "fashion"}
              value="fashion"
            />
          }
          label="Fashion"
        />
      </MenuItem>
      <MenuItem value="electronics">
        <FormControlLabel
          control={
            <Radio
              checked={selectedCategory === "electronics"}
              value="electronics"
            />
          }
          label="Electronics"
        />
      </MenuItem>
      <MenuItem value="beauty">
        <FormControlLabel
          control={
            <Radio
              checked={selectedCategory === "beauty"}
              value="beauty"
            />
          }
          label="Beauty Products"
        />
      </MenuItem>
    </TextField>

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
              select
              value={selectedColors.join(", ")}
              sx={{ width: "400px" }}
            >
              <MenuItem value="small">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedColors.includes("red")}
                      onChange={handleColorChange}
                      value="red"
                    />
                  }
                  label="Red"
                />
              </MenuItem>
              <MenuItem value="medium">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedColors.includes("green")}
                      onChange={handleColorChange}
                      value="green"
                    />
                  }
                  label="Green"
                />
              </MenuItem>
              <MenuItem value="blue">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedColors.includes("blue")}
                      onChange={handleColorChange}
                      value="blue"
                    />
                  }
                  label="Blue"
                />
              </MenuItem>
            </TextField>
          </Box>
          <Box>
            <TextField
              id="size"
              size="small"
              label="Size"
              variant="outlined"
              select
              value={selectedSizes.join(", ")}
              sx={{ width: "400px" }}
            >
              <MenuItem value="small">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedSizes.includes("small")}
                      onChange={handleSizeChange}
                      value="small"
                    />
                  }
                  label="Small"
                />
              </MenuItem>
              <MenuItem value="medium">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedSizes.includes("medium")}
                      onChange={handleSizeChange}
                      value="medium"
                    />
                  }
                  label="Medium"
                />
              </MenuItem>
              <MenuItem value="large">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedSizes.includes("large")}
                      onChange={handleSizeChange}
                      value="large"
                    />
                  }
                  label="Large"
                />
              </MenuItem>
            </TextField>
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
              name="description"
              size="small"
              label="Description"
              variant="outlined"
              value={productInfo.description}
              onChange={handleInputChange}
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
              id="longDescription"
              name="longDescription"
              label="Long Description"
              value={productInfo.longDescription}
              onChange={handleInputChange}
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
              name="visibility"
              value={visibility}
              onChange={handleVisibilityChange}
            >
              <FormControlLabel
                value="public"
                control={<Radio />}
                label="Public"
                sx={{ marginLeft: "50px" }}
              />
              <FormControlLabel
                sx={{ marginLeft: "150px" }}
                value="private"
                control={<Radio />}
                label="Private"
              />
            </RadioGroup>
          </FormControl>
        </Box>
   
          <Box  sx={{ marginTop: "50px", marginLeft: "50px" }}>
          <Typography
              variant="body1"
              component="h3"
              sx={{ color: "#000000",mb:2}}
            >
               Images
            </Typography>
      <input type="file" multiple onChange={handleImageUpload} />
      <div>
        {imagesShow.length>0&&<Typography sx={{mt:2,mb:1}}>Please Select Main Image!</Typography>}
        {imagesShow.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Image ${index}`}
            onClick={() => handleImageClick(index)}
            style={{ cursor: 'pointer',marginRight:"15px",border: index === selectedImageIndex ? '3px solid #EB7F25' : '1px solid black',marginTop:"10px" }}
            width="100px"
            height="100px"
          />
        ))}
      </div>
      
    </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "50px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FD8004",
              "&:hover": {
                backgroundColor: "#FFA931",
              },
            }}
            onClick={addProductHandler}
            disabled={isButtonDisabled}
          >
            Add Product
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddProduct;
