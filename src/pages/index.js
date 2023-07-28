import Head from 'next/head';
import { Grid } from '@mui/material'; 
import ProductCard from '@/components/Products/Product'; 
import { useEffect, useState } from 'react'; 

export default function Home({ products }) {
  const [allProducts, setAllProducts] = useState(null);
  

  const getRandomProducts = (products, count) => {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  };
  
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Fetch data here only on the client-side
      const data = getRandomProducts(products?.data, 6);
   setAllProducts(data)
    }
  }, [products?.data]);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Grid container spacing={2} sx={{ width: "80%", mx: "auto", mt: 5 }}>
            {allProducts?.map((product, index) => (
              <Grid  item key={index} xs={12} sm={6} md={4}> 
                <ProductCard key={index} product={product} /> 
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    revalidate: 5,
  };
};
