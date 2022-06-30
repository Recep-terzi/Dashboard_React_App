import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './Footer.module.css'
const Footer = () => {
  return (
    <footer style={{marginTop:"40px"}}>
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor="text.secondary"
      color="white"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}  sx={{fontSize:"30px",transition:"0.5s",'&:hover':{fontSize:"33px",transition:"0.5s",color:"red"}}}>Help</Box>
            <Box >
              <Link href="/" color="inherit" style={{textDecoration:"none"}} sx={{transition:"0.5s",'&:hover':{color:"red",transition:"0.5s"}}}>
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" style={{textDecoration:"none"}} sx={{transition:"0.5s",'&:hover':{color:"red",transition:"0.5s"}}}>
                Support
              </Link>
            </Box>
            
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}  sx={{fontSize:"30px",transition:"0.5s",'&:hover':{fontSize:"33px",transition:"0.5s",color:"red"}}}>Account</Box>
            <Box>
              <Link href="/" color="inherit" style={{textDecoration:"none"}} sx={{transition:"0.5s",'&:hover':{color:"red",transition:"0.5s"}}}>
                Login
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" style={{textDecoration:"none"}} sx={{transition:"0.5s",'&:hover':{color:"red",transition:"0.5s"}}}>
                Register
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}  sx={{fontSize:"30px",transition:"0.5s",'&:hover':{fontSize:"33px",transition:"0.5s",color:"red"}}}>Messages</Box>
            <Box>
              <Link href="/" color="inherit" style={{textDecoration:"none"}} sx={{transition:"0.5s",'&:hover':{color:"red",transition:"0.5s"}}}>
                Backup
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" style={{textDecoration:"none"}} sx={{transition:"0.5s",'&:hover':{color:"red",transition:"0.5s"}}}>
                History
              </Link>
            </Box>
            
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }} sx={{transition:"0.5s",'&:hover':{color:"red",transition:"0.5s",fontSize:"20px"}}}>
          Pyson Dashboard &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  </footer>
  )
}

export default Footer