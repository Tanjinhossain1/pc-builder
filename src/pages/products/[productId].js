/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head';
import { Grid, Typography } from '@mui/material'; 
import styles from '@/styles/ProductDetail.module.css'; // Create this CSS file to style the page
import { server_url } from '@/components/Constant/constant';
 
export const getStaticPaths = async () => {
  try{ 
    const res = await fetch(`${server_url}/products`);
    const data = await res.json();
    console.log('first ', data)
    const paths = data.data.map((product) => ({
      params: { productId: product._id },
    })); 
    return {
      paths: paths,
      fallback: false, // Set this to "false" if you want to show a 404 page for non-existent "productId"s
    };
  }catch (error) { 
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ params }) => {
  try{
    const { productId } = params;
    const res = await fetch(`${server_url}/products/?productId=${productId}`);
    const data = await res.json(); 
    return {
      props: {
        product: data,
      },
      revalidate: 10,
    };
  }catch (error) { 
    return {
      props: {}, 
    };
  }
 
};

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
          <Grid container item spacing={2}>
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
              Individual Rating: {product?.data?.rating} ⭐
              </Typography>
              <Typography variant="h6" gutterBottom>
              Average Rating: {product?.data['avRating']} ⭐
              </Typography>
              <Typography variant="h6" gutterBottom>
              Brand: {product?.data['brand']}
              </Typography>
              <Typography variant="h6" gutterBottom>
              model: {product?.data['model']}
              </Typography>
              <Typography variant="h6" gutterBottom>
              model: {product?.data['model']}
              </Typography>
              <Typography variant="h6" gutterBottom>
              specification: {product?.data['specification']}
              </Typography>
              <Typography variant="h6" gutterBottom>
              port: {product?.data['port']}
              </Typography>
              <Typography variant="h6" gutterBottom>
              resolution: {product?.data['resolution']}
              </Typography> 
              <Typography variant="h6" gutterBottom>
              reviews:- {
                product?.data?.reviews.map(e => <li key={e._id}>{e}</li>)
              } 
              </Typography>
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
