import Container from "@mui/material/Container";
import DashboardLevel from "../DashboardLevel/DashboardLevel";
import LeftDash from "../LeftDash/LeftDash";
import DashboardCalculated from "../DashboardCalculated/DashboardCalculated";
import PieCharts from "../PieCharts/PieCharts";
import LineChart from "../LineChart/LineChart";
import Footer from "../Footer/Footer";
import { useCollection } from "../../hooks/useCollection";
import { useAuthcontext } from "../../hooks/useAuthContext";
import DayDashboard from "../DayDashboard/DayDashboard";
import {Link} from "react-router-dom"
import React from "react";
import Box from "@mui/material/Box"
const DashboardMain = () => {
  const { user } = useAuthcontext();
  const { belge } = useCollection("dashboard1", ["uid", "==", user.uid]);
  
  return (
    <>
    {belge.length === 1 &&(
        <>
          <DashboardLevel />
          <Container>
            <div className="row">
              <div className="col-md-4">
                <div
                  className="card"
                  style={{ boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",marginBottom:"10px"}}
                >
                  <div className="card-body">
                    <LeftDash belgeler={belge} />
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div
                  className="card"
                  style={{ boxShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                >
                  <div className="card-body">
                    <DayDashboard belgeler={belge} />
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <div
              className="card"
              style={{
                marginTop: "30px",
                backgroundColor: "rgb(240, 234, 234)",
                border: "none",
              }}
            >
              <DashboardCalculated />
            </div>
          </Container>
          <Container style={{ marginTop: "30px" }}>
            <div className="row">
              <div className="col-md-6">
                <Box
                  className="card"
                  style={{ boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",marginBottom:"10px" }}
                  sx={{display:{ xs: "none", md: "flex" }}}
                >
                  <div className="card-body">
                    <PieCharts belgeler={belge} />
                  </div>
                </Box>
              </div>
              <div className="col-md-6">
                <div
                  className="card"
                  style={{ boxShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}

                >
                  <div className="card-body">
                    <LineChart belgeler={belge} />
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Footer />
        </>
      )}
      {belge.length === 0 && (
        <div style={{textAlign: 'center',marginTop:"40vh"}}>
          <h1>Dashboard bilgileriniz bulunmamaktadır...</h1>
          <Link to = "/dataform" > Dashboard Bilgilerini eklemek için tıklayınız.</Link>
        </div>
      )}
      
    </>
  );
};

export default DashboardMain;
