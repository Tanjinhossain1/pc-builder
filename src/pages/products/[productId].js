/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/ProductDetail.module.css'; // Create this CSS file to style the page

const inter = Inter({ subsets: ['latin'] });

// export default function productId({product}) {
//     console.log('product  ', product)
//   return (
//     <div>productId {product?.data?.productName}</div>
//   )
// }
const ProductDetail = ({ product }) => {
    return (
      <>
        <Head>
          <title>{product?.data?.productName}</title>
          <meta name="description" content={`Details of ${product?.data?.productName}`} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className={styles.productContainer}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <img src={product?.data?.image} alt={product?.data?.productName} width={500} height={500} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom>
                  {product?.data?.productName}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Category: {product?.data?.category}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Price: ${product?.data?.price.toFixed(2)}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Status: {product?.data?.status}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Rating: {product['rating']}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </main>
      </>
    );
  };
  
  export default ProductDetail;
  
export const getStaticProps = async ({ params }) => {
  const { productId } = params;
  const res = await fetch(`http://localhost:3000/api/products/?productId=${productId}`);
  const data = await res.json();
  console.log(' ', params, data)
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/products/`);
  const data = await res.json();
  console.log('first ', data)
  const paths = data.data.map((product) => ({
    params: { productId: product._id },
  })); 
  return {
    paths: paths,
    fallback: false, // Set this to "false" if you want to show a 404 page for non-existent "productId"s
  };
};
