import { GitHub, GiteOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
  return (
    <>
      <br /> <br /> <br /> <br />  <br />{" "}
      <br /> <br /> <br />
      <Grid item container>
        <Grid xs={5.5}></Grid>
        <Grid xs={3} md={1}>
          <IconButton
            color="inherit"
            size="large"
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000",
              })
            }
          >
            <GitHub sx={{ fontSize: 34 }} />
          </IconButton>
        </Grid>
        <Grid xs={5.5}></Grid>
      </Grid>
         <br /> <br /> <br /> <br /> <br />  <br />{" "}
      
    </>
  );
}
