/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Button, Grid, IconButton, Paper, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { PcBuilderContext } from "@/components/ContextApi/PcBuilderContext";
import { DeleteForever } from "@mui/icons-material";
import { server_url } from "@/components/Constant/constant";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const PC_COMPONENTS = {
  CPU: "CPU / Processor",
  Motherboard: "Motherboard",
  RAM: "RAM",
  PSU: "Power Supply Unit",
  Storage: "Storage Device",
  Monitor: "Monitor",
}; 

export default function CustomizedAccordions({pc_component}) {
  const router = useRouter();

  const [availableToCompleteBuild, setAvailableToCompleteBuild] = React.useState(false);

  const { pcBuildDetail, setPcBuildDetail } =
    React.useContext(PcBuilderContext);
  const [expanded] = React.useState(PC_COMPONENTS);

  const onDeleteProduct = (productId) => {
    // Create a copy of the current pcBuildDetail
    const updatedPcBuildDetail = { ...pcBuildDetail };

    // Find the index of the product with the matching _id
    const productIndex = updatedPcBuildDetail.products.findIndex(
      (product) => product._id === productId
    );

    // If the product with the _id is found, remove it from the array
    if (productIndex !== -1) {
      updatedPcBuildDetail.products.splice(productIndex, 1);
      setPcBuildDetail(updatedPcBuildDetail);
    }
  };

  // Function to check if there are exactly 6 unique categories
  const checkCategories = () => {
    if (pcBuildDetail.products) {
      // Get all unique categories from the products array
      const uniqueCategories = [...new Set(pcBuildDetail.products.map(product => product.category))];

      // Check if there are exactly 6 unique categories
      setAvailableToCompleteBuild(uniqueCategories.length === 5 || 4);
    }
  };

  // Call the checkCategories function when pcBuildDetail or its products change
  React.useEffect(() => {
    checkCategories();
  }, [pcBuildDetail.products]);

  return (
    <div style={{marginBottom: 30}}>
      <Grid item container>
        <Grid xs={2}></Grid>
        <Grid xs={8}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 26,
              textDecoration: "underline",
              fontWeight: 600,
              my: 3,
            }}
          >
            PC BUILDER
          </Typography>
          <div style={{textAlign: "end"}}>
          <Button disabled={availableToCompleteBuild === true ? false : true} sx={{mb: 2}} size="medium" variant="contained" >Complete</Button>
          </div>
          {pc_component?.data?.map((detail, index) => {
            return (
              <Accordion
                key={index}
                expanded={expanded.CPU === PC_COMPONENTS.CPU}
                sx={{ mt: 2 }}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header" 
                  sx={{backgroundColor: "#d6b3f5"}}
                >
                  <Grid item container>
                    <Grid xs={12} md={8} lg={10}>
                      <Typography>{detail.category}</Typography>
                    </Grid>
                    <Grid xs={12} md={4} lg={2}>
                      <Button
                        onClick={() =>
                          router.push(
                            `/categoryProducts/?category=${detail.category}&mode=pc_builder`
                          )
                        }
                        size="small"
                        variant="contained"
                      >
                        Choose/Select
                      </Button>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <Paper sx={{bgcolor: "#fff0ff"}}>
                  <AccordionDetails>
                    <Grid gap={1} item container>
                      {pcBuildDetail.products
                        ? pcBuildDetail.products[0]
                          ? pcBuildDetail.products?.map((product) => {
                              return (
                                <Grid xs={12} key={product?._id}>
                                  {detail.category === product?.category ? (
                                    <Paper sx={{bgcolor: "#f5f5f5"}}>
                                      <Grid item container>
                                        <Grid gap={2} xs={10}>
                                          <Grid item container>
                                            <Grid xs={4}>
                                              <img
                                                height={50}
                                                width={50}
                                                src={product?.image}
                                              />
                                            </Grid>
                                            <Grid sx={{mt: 1.5}} xs={12} md={2} >
                                              <Typography variant="subtitle1">
                                                Price: ${product?.price}
                                              </Typography>
                                            </Grid>
                                            <Grid sx={{mt: 1.5}} xs={12} md={2} >
                                              <Typography variant="subtitle1">
                                                Status: {product?.status}
                                              </Typography>
                                            </Grid>
                                            <Grid sx={{mt: 1.5}} xs={12} md={2} >
                                              <Typography variant="subtitle1">
                                                Rating: {product?.rating} ⭐
                                              </Typography>
                                            </Grid>
                                          </Grid>
                                        </Grid>

                                        <Grid
                                          xs={2}
                                          marginTop={0.5}
                                          textAlign={"center"}
                                          alignItems={"center"}
                                        >
                                          <IconButton
                                            onClick={() =>
                                              onDeleteProduct(product?._id)
                                            }
                                          >
                                            <DeleteForever htmlColor="red" />
                                          </IconButton>
                                        </Grid>
                                      </Grid>
                                    </Paper>
                                  ) : null}
                                </Grid>
                              );
                            })
                          : null
                        : null}
                    </Grid>
                  </AccordionDetails>
                </Paper>
              </Accordion>
            );
          })}
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </div>
  );
}


export const getServerSideProps = async () => {
    try {
      const res = await fetch(`${server_url}/category`);
      const data = await res.json();
      return {
        props: {
          pc_component: data,
        }, 
      };
    } catch (error) { 
      return {
        props: {
          pc_component: [],
        },
      };
    }
  };