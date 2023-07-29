import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const FeaturedCategoryCard = ({product, onClickFunc}) => {
    const router = useRouter()
    const {
        image,
        productName,
        category,
        price,
        status,
        rating,
      } = product;

  return (
    <Card onClick={()=>onClickFunc ? onClickFunc(product?._id) : router.push(`/categoryProducts/?category=${category}`)} sx={{ display: 'flex', maxWidth: 600, margin: 'auto', cursor: "pointer" }}>
    <CardMedia
      component="img"
      height="150"
      image={image}
      alt={productName}
      sx={{ objectFit: 'cover', width: '50%' }}
    />
    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="overline" gutterBottom sx={{ textTransform: 'uppercase' }}>
        {category}
      </Typography>
      <Typography variant="h5" component="div">
        {productName}
      </Typography>
      <Typography variant="subtitle1" >
        Price: ${price}
      </Typography>
      <Typography variant="subtitle1" >
        Status: {status}
      </Typography>
      <Typography variant="subtitle1" >
        Rating: {rating} ⭐
      </Typography>
    </CardContent>
  </Card>
  );
};

export default FeaturedCategoryCard;
