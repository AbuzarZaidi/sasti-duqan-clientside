import React, { useState, useEffect } from "react";
import {
  getAllPrivateProducts,
  deleteProduct,
  updateProductStatus,
} from "../../functions/admin/products";
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
import AllProductsGrid from "../../components/admin/allproducts/AllProductsGrid";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllPrivateProducts("");
      if (result.data.length > 0) {
        setProducts(result.data);
      }
    };
    fetchData();
  }, []);
  const deleteHandler = async (multiId) => {
    console.log(multiId);
    const result = await deleteProduct(multiId);
    console.log(result.result);
    const data = [];
    if (result.result) {
      const filteredProducts = products.filter((product) => {
        return !multiId.includes(product.id);
      });
      setProducts(filteredProducts);
    }
  };
  const updateHandler = async (id, status) => {
    const response = await updateProductStatus(id, status);
    if (response.result.length > 0) {
      const result = await getAllPrivateProducts("");
      if (result.data.length > 0) {
        setProducts(result.data);
        console.log(result.data);
      }
    }
  };
 
  return (
    <Box
      sx={{ width: "95%", mx: "auto", marginTop: "1rem", marginBottom: "5rem" }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Box>
          <Typography variant="h4" component="h3">
            All Product
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FD8004",
              "&:hover": {
                backgroundColor: "#FFA931",
              },
            }}
          >
            New Product
          </Button>
        </Box>
      </Box>
      <Box>
        <AllProductsGrid
          rows={products}
          deleteHandler={deleteHandler}
          updateHandler={updateHandler}
        />
      </Box>
    </Box>
  );
};

export default AllProducts;
