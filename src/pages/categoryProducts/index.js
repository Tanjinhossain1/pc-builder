/* eslint-disable react-hooks/rules-of-hooks */
import { server_url } from "@/components/Constant/constant";
import FeaturedCategoryCard from "@/components/Featured/Category";
import { Grid, Typography } from "@mui/material";
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
  const { query, push } = useRouter();
  const {category, mode} = query;
  const allProductDetail = products?.data?.filter(
    (e) => e.category === category
  ); 

  const onClickFunc = (id) =>{
    push(`/products/${id}`)
  }

  return (
    <div style={{width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: 2}}>
        <Typography sx={{textAlign: "center", fontSize: 30, fontWeight: 600}}>{category}</Typography> 
      <Grid container item spacing={2}>
        {allProductDetail?.map((product, index) => (
          <Grid item key={index} gap={6} xs={12} sm={6} md={6}>
            <FeaturedCategoryCard mode={mode === "pc_builder" ? true : false} onClickFunc={onClickFunc} key={index} product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
