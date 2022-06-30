import { useState,useEffect} from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthcontext } from "./useAuthContext";
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
export const useLogout = () => {
  const { dispatch } = useAuthcontext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadinga, setLoadinga] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoadinga(false), 3000);
  }, []);
  const logout = async () => {
    setError(null);
    setLoading(true);
    
    try {
      alertify.success('Çıkış başarıyla gerçekleşti');
      <>
      {loadinga === false ? (setTimeout(() =>{
        dispatch({ type: "LOGOUT" });
        setLoading(false);
        setError(null);},2000)):(<GridLoader color={"#1976d2"} loading={loadinga} css={override} size={100} />)}
      </>
      await signOut(auth);
      
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
  };
  return { logout, error, loading };
};
