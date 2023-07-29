import Head from "next/head";
import { Grid, Typography } from "@mui/material";
import ProductCard from "@/components/Products/Product";
import { useEffect, useState } from "react";
import { getRandomCategoryProducts, getRandomProducts } from "@/utils/productUtils";
import FeaturedCategoryCard from "@/components/Featured/Category";
import { server_url } from "@/components/Constant/constant";

export default function Home({ products }) {
  const [allProducts, setAllProducts] = useState(null);
  const [allCategoryProducts, setAllCategoryProducts] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Fetch data here only on the client-side
      const data = getRandomProducts(products?.data, 6);
      const categoryData = getRandomCategoryProducts(products?.data, 7);
      setAllProducts(data);
      setAllCategoryProducts(categoryData);
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
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "26px",
              fontWeight: "600",
              mt: 3,
            }}
          >
            Products
          </Typography>
          <Grid container spacing={2} sx={{ width: "80%", mx: "auto", mt: 2 }}>
            {allProducts?.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <ProductCard key={index} product={product} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "26px",
              fontWeight: "600",
              mt: 3,
            }}
          >
            Featured Category
          </Typography>
          <Grid container spacing={2} sx={{ width: "80%", mx: "auto", mt: 2 }}>
            {allCategoryProducts?.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <FeaturedCategoryCard key={index} product={product} />
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  try{

    const res = await fetch(`${server_url}/products`);
    const data = await res.json();
    return {
      props: {
        products: data,
      },
      revalidate: 5,
    };
  } catch (error) {
    console.error('Error fetching data for index page:', error);
    return {
      props: {
        products: [],
      },
    };
  }
};
