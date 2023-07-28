import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const ProductCardRoot = styled(Card)({
  maxWidth: 300,
  margin: "16px",
});

const ProductImage = styled(CardMedia)({
  height: 200,
  borderRadius: "8px",
});

const ProductName = styled(Typography)({
  marginTop: "8px",
  fontWeight: "bold",
});

const ProductCategory = styled(Typography)({
  color: "#666",
});

const ProductPrice = styled(Typography)({
  fontWeight: "bold",
  color: "#00aaff",
  marginTop: "8px",
});

const ProductStatus = styled(Typography)({
  color: "#00aa00",
  marginTop: "8px",
});

const ProductRating = styled(Typography)({
  color: "#f5b800",
  marginTop: "8px",
});

const ProductCard = ({ product }) => {
  
  const router = useRouter()
  return (
    <ProductCardRoot style={{cursor: "pointer"}} onClick={()=> router.push(`/products/${product?._id}`)} sx={{p: 2}}>
      <ProductImage image={product["Image"]} alt={product["Product Name"]} />
      <ProductName variant="h6">{product["Product Name"]}</ProductName>
      <ProductCategory variant="subtitle2">{product["Category"]}</ProductCategory>
      <ProductPrice variant="body1">Price: ${product["Price"].toFixed(2)}</ProductPrice>
      <ProductStatus variant="body2">Status: {product["Status"]}</ProductStatus>
      <ProductRating variant="body2">Rating: {product["Rating (Out of 5 Stars)"]}</ProductRating>
    </ProductCardRoot>
  );
};

export default ProductCard;
