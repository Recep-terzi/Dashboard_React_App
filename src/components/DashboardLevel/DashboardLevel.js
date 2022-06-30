import * as React from "react";
import "./DashboardLevel.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import { useCollection } from "../../hooks/useCollection";
import { useAuthcontext } from "../../hooks/useAuthContext";
const DashboardLevel = () => {
  const { user } = useAuthcontext();
  const { belge } = useCollection("dashboard1", ["uid", "==", user.uid]);
  
  return (
    <Container sx={{ mt: 10, mb: 10 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={4} md={4}>
          <Box sx={{ minWidth: 275 }}>
            <Card
              variant="outlined"
              sx={{
                border: "none",
                borderBottom: "2px solid red",
                boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                transition: "0.5s",
                "&:hover": {
                  paddingBottom: "10px",
                  transition: "0.5s",
                },
              }}
            >
              <CardContent sx={{ fontWeight: "bold", fontFamily: "Nunito" }}>
                <div className="row">
                  <div className="col-10">Toplam Kazanç (Günlük) </div>
                </div>
              </CardContent>

              <CardActions>
                {belge.map((belg) => (
                  <div key={belg.id}>
                    <h3 style={{ marginLeft: "10px", textAlign: "center" }}>
                      {parseInt(belg.pazartesi)}{" "}
                      <CurrencyLiraIcon></CurrencyLiraIcon>{" "}
                    </h3>
                  </div>
                  
                ))}
                
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Box sx={{ minWidth: 275 }}>
            <Card
              variant="outlined"
              sx={{
                border: "none",
                borderBottom: "3px solid green",
                boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                transition: "0.5s",
                "&:hover": {
                  paddingBottom: "10px",
                  transition: "0.5s",
                },
              }}
            >
              <CardContent sx={{ fontWeight: "bold", fontFamily: "Nunito" }}>
                <div className="row">
                  <div className="col-10">Toplam Kazanç (Haftalık)</div>
                </div>
              </CardContent>
              <CardActions>
                {belge.map((belg) => (
                  <div key={belg.id}>
                    <h3 style={{ marginLeft: "10px", textAlign: "center" }}>
                      {parseInt(belg.pazartesi) +
                        parseInt(belg.sali) +
                        parseInt(belg.çarşamba) +
                        parseInt(belg.perşembe) +
                        parseInt(belg.cuma) +
                        parseInt(belg.cumartesi) +
                        parseInt(belg.pazar)}{" "}
                      <CurrencyLiraIcon></CurrencyLiraIcon>{" "}
                    </h3>
                  </div>
                ))}
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Box sx={{ minWidth: 275 }}>
            <Card
              variant="outlined"
              sx={{
                border: "none",
                borderBottom: "3px solid blue",
                boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                transition: "0.5s",
                "&:hover": {
                  paddingBottom: "10px",
                  transition: "0.5s",
                },
              }}
            >
              <CardContent sx={{ fontWeight: "bold", fontFamily: "Nunito" }}>
                <div className="row">
                  <div className="col-10">Toplam Kazanç (Aylık)</div>
                  <div className="col-2"></div>
                </div>
              </CardContent>
              <CardActions>
                {belge.map((belg) => (
                  <div key={belg.id}>
                    <h3 style={{ marginLeft: "10px", textAlign: "center" }}>
                      {parseInt(belg.pazartesi) * 4 +
                        parseInt(belg.sali) * 4 +
                        parseInt(belg.çarşamba) * 4 +
                        parseInt(belg.perşembe) * 4 +
                        parseInt(belg.cuma) * 4 +
                        parseInt(belg.cumartesi) * 4 +
                        parseInt(belg.pazar) * 4}{" "}
                      <CurrencyLiraIcon></CurrencyLiraIcon>{" "}
                    </h3>
                  </div>
                ))}
              </CardActions>
            </Card>
          </Box>
        </Grid>
       
      </Grid>
    </Container>
  );
};

export default DashboardLevel;
