import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const FeaturedCategoryCard = ({product}) => {
    const {
        image,
        productName,
        category,
        price,
        status,
        rating,
      } = product
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardContent>
        <Typography variant="overline" gutterBottom sx={{ textTransform: 'uppercase' }}>
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          Price: ${price} | Status: {status} | Rating: {rating} ⭐
        </Typography>
      </CardContent>
      <img src={image} alt={productName} style={{ width: '100%', objectFit: 'cover' }} />
    </Card>
  );
};

export default FeaturedCategoryCard;
