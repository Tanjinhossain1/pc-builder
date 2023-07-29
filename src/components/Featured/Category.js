import React, { useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { PcBuilderContext } from "../ContextApi/PcBuilderContext";

const FeaturedCategoryCard = ({ product, onClickFunc, mode }) => {
  const router = useRouter();
  const { pcBuildDetail,setPcBuildDetail } = useContext(PcBuilderContext);

  const { image, productName, category, price, status, rating } = product;
  
  const onAddToBuild = (latestProduct) => {
    // Create a copy of the current pcBuildDetail
    const updatedPcBuildDetail = { ...pcBuildDetail };
  
    // Check if the product with the same _id already exists in the products array
    const existingProductIndex = updatedPcBuildDetail.products.findIndex(
      (product) => product._id === latestProduct._id
    );
  
    if (existingProductIndex !== -1) {
      // Product with the same _id already exists, update its quantity (or perform other actions)
      const existingProduct = updatedPcBuildDetail.products[existingProductIndex];
      existingProduct.quantity += 1;
    } else {
      // Product with the _id does not exist, add the new product to the products array
      updatedPcBuildDetail.products.push(latestProduct);
    }
  
    // Update the pcBuildDetail state
    setPcBuildDetail(updatedPcBuildDetail);
  
    // Navigate to the '/pcBuilder' page
    router.push('/pcBuilder');
  };
  
  
  return (
    <Card
      onClick={() =>
        mode === true ? null :
        onClickFunc
          ? onClickFunc(product?._id)
          : router.push(`/categoryProducts/?category=${category}`)
      }
      sx={{ display: "flex", maxWidth: 600, margin: "auto", cursor: "pointer" }}
    >
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt={productName}
        sx={{ objectFit: "cover", width: "50%" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="overline"
          gutterBottom
          sx={{ textTransform: "uppercase" }}
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="subtitle1">Price: ${price}</Typography>
        <Typography variant="subtitle1">Status: {status}</Typography>
        <Typography variant="subtitle1">Rating: {rating} ⭐</Typography>
        <Typography variant="subtitle1">
          {mode === true ? ( 
          <>
            <Button onClick={()=> onAddToBuild(product)} sx={{mx: 2}} size="small" variant="contained">
              Add To Build
            </Button> 
            <Button onClick={()=> router.push(`/categoryProducts/?category=${category}`)} size="small" variant="contained">
              Detail
            </Button> 
          </>
          ) : null}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeaturedCategoryCard;
