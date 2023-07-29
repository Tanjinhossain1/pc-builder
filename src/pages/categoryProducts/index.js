/* eslint-disable react-hooks/rules-of-hooks */
import { server_url } from "@/components/Constant/constant";
import FeaturedCategoryCard from "@/components/Featured/Category";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${server_url}/products`);
    const data = await res.json();
    return {
      props: {
        products: data,
      },
      revalidate: 5,
    };
  } catch (error) { 
    return {
      props: {
        products: [],
      },
    };
  }
};
 

export default function categoryPage({ products }) {
  const { query,push } = useRouter();
  const allProductDetail = products?.data?.filter(
    (e) => e.category === query.category
  ); 
  const onClickFunc = (id) =>{
    push(`/products/${id}`)
  }
  return (
    <div>
      <Grid container spacing={2} sx={{ width: "80%", mx: "auto", mt: 2 }}>
        {allProductDetail?.map((product, index) => (
          <Grid item key={index} gap={6} xs={12} sm={6} md={6}>
            <FeaturedCategoryCard onClickFunc={onClickFunc} key={index} product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
