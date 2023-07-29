import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const PC_COMPONENTS = {
    CPU: 'CPU / Processor',
    Motherboard: 'Motherboard',
    RAM: 'RAM',
    PSU: 'Power Supply Unit',
    Storage: 'Storage Device',
    Monitor: 'Monitor',
  };
  const pc_component = [
    {
      category: "CPU / Processor",
    },
    {
      category: "Motherboard",
    },
    {
      category: "RAM",
    },
    {
      category: "Power Supply Unit",
    },
    {
      category: "Storage Device",
    },
    {
      category: "Monitor",
    },
  ]; 
  
export default function CustomizedAccordions() {
  const [expanded] = React.useState(PC_COMPONENTS);
 

  return (
    <div>
      <Grid container>
        <Grid xs={2}>

        </Grid>
        <Grid xs={8}> 
          <Typography sx={{textAlign: "center", fontSize: 26, textDecoration: "underline", fontWeight: 600,my: 3}}>PC BUILDER</Typography>
    {
        pc_component.map((detail, index) => {
            return (
                <Accordion key={index} expanded={expanded.CPU === PC_COMPONENTS.CPU}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <div style={{display: "flex", justifyContent: "center"}}>
                  <Typography>{detail.category}</Typography>
                  <Typography>CHoose</Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                 {
                    detail.category === "CPU / Processor" ? "okkk" : "noo"
                 }
                </AccordionDetails>
              </Accordion>
            )
        })
    }
       

        
     
        </Grid>
        <Grid xs={2}>

        </Grid>
      </Grid>
    </div>
  );
}