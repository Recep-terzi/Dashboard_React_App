import { useState,useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment,IconButton } from "@mui/material";
import {useNavigate } from "react-router-dom"
import { useLogin } from "../../hooks/useLogin";
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
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

export default function SignIn() {
  const {login,error,loading} = useLogin();
  
  const [loadinga, setLoadinga] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoadinga(false), 3000);
  }, []);
 
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    login(values.email,values.password)
    alertify.success('Giriş başarıyla gerçekleşti.')
    navigate('/dashboard')
    
    
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const {navigate} = useNavigate()
  return (
    <>
    {
      loadinga === false ? (<ThemeProvider theme={theme}>
      
        <Container component="main" maxWidth="xs" sx={{backgroundColor:"#fff",borderRadius:"10px",boxShadow:"1px 1px 2px rgba(0,0,0,0.5)"}}>
          
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main",mt:3 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                value={values.email}
                onChange={handleChange("email")}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={values.password}
                onChange={handleChange("password")}
                name="password"
                label="Password"
                type={values.showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{endAdornment:(
                  <InputAdornment position="end">
                    <IconButton aria-label="Toggle Password" onClick={handleClickShowPassword} edge="end">
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}}
                
              />
              
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {
                !loading && <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              }
              {
                loading && <Button
                type="submit"
                fullWidth
                disabled
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Waiting
              </Button>
              }
             
              {error && <p>{error}</p>}
              <Grid container sx={{mb:3}}>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
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
