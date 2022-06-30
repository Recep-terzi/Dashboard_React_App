import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EarningPage from "../EarningPage/EarningPage";
import { useAuthcontext } from "../../hooks/useAuthContext";
import React, { useState, useEffect } from "react";
import GridLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
const override = css`
  display:flex;
  text-align:center;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 100vh;
  margin:0 auto;

`;
const theme = createTheme();

export default function SignUp() {
  const { user } = useAuthcontext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
     {
      loading === false ? ( <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="md"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4" sx={{ mt: 5, mb: 2 }}>
              Data Form
            </Typography>
            <Box noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <EarningPage uid={user.uid} />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>):(<GridLoader color={"#1976d2"} loading={loading} css={override} size={100} />)
     }
    </>
  );
}
