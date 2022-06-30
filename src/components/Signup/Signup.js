import { useState,useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSignUp } from "../../hooks/useSignup";
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
  const { signup, error, loading } = useSignUp();
  const [values, setValues] = useState({
    email: "",
    password: "",
    userName: "",
    showPassword: false,
  });
  const [loadinga, setLoadinga] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoadinga(false), 3000);
  }, []);
  const [checked, setChecked] = useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(values.email, values.password, values.userName);
  };
  const checkSubmit = (e) => {
    setChecked(true);
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  return (
    <>
      {
        loadinga === false ? (<ThemeProvider theme={theme}>
          <Container
            component="main"
            maxWidth="xs"
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
              <Avatar sx={{ m: 1, mt: 3, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="username"
                      value={values.userName}
                      onChange={handleChange("userName")}
                      required
                      fullWidth
                      id="username"
                      label="User Name"
                      autoFocus
                    />
                  </Grid>
  
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      value={values.email}
                      onChange={handleChange("email")}
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      value={values.password}
                      onChange={handleChange("password")}
                      name="password"
                      label="Password"
                      type={values.showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="new-password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="Toggle Password"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          value={checked}
                          onChange={checkSubmit}
                        />
                      }
                      label="I have read, I approve."
                    />
                  </Grid>
                </Grid>
                {checked && (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                )}
                {!checked && !loading && (
                  <Button
                    type="submit"
                    fullWidth
                    disabled
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                )}
                {loading && (
                 <Typography style={{textAlign: 'center'}}>Hesap oluşturuluyor...</Typography>
                )}
                
  
                {error && <p>{error}</p>}
                <Grid container justifyContent="flex-end">
                  <Grid item sx={{ mb: 3, mt: 2 }}>
                    <Link href="/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>):(<GridLoader color={"#1976d2"} loading={loadinga} css={override} size={100} />)
      }
    </>
  );
}
