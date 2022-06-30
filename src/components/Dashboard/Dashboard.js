import React,{useState,useEffect} from 'react'
import DashboardMain from '../DashboardMain/DashboardMain'
import { css } from "@emotion/react";
import GridLoader from "react-spinners/HashLoader";
const override = css`
  display:flex;
  text-align:center;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 100vh;
  margin:0 auto;

`;

const Dashboard = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    <>
    { loading === false ? (<DashboardMain />):(<GridLoader color={"#1976d2"} loading={loading} css={override} size={100} />)}
    </>
  )
}

export default Dashboard