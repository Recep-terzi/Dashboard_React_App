import React from "react";


import { useCollection } from "../../hooks/useCollection";
import { useAuthcontext } from "../../hooks/useAuthContext";
import Button from "@mui/material/Button";

const DashboardKayıt = () => {
 

  
  return (
    <>
        
      { (
        <Button
          sx={{
            color: "white",
            display: "block",
            "&:hover": {
              color: "red",
              borderBottom: "1px solid black",
              transition: "0.5s",
            },
          }}
          className="buttonhover"
          href="/dataform"
        >
          Dashboard Kayıt
        </Button>
      )}
    </>
  );
};

export default DashboardKayıt;
