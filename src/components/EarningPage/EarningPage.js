import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";

import { InputAdornment } from "@mui/material";

import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import SalesQuantity from "../SalesQuantity/SalesQuantity";

const EarningPage = ({ uid }) => {
  const [pazartesi, setPazartesi] = useState();
  const [sali, setSali] = useState();
  const [çarşamba, setÇarşamba] = useState();
  const [perşembe, setPerşembe] = useState();
  const [cuma, setCuma] = useState();
  const [cumartesi, setCumartesi] = useState();
  const [pazar, setPazar] = useState();
  const [hafta2, setHafta2] = useState();
  const [hafta3, setHafta3] = useState();
  const [hafta4, setHafta4] = useState();

  const [pClothes, pSetClothes] = useState();
  const [pTechnology, pSetTechnology] = useState();
  const [pOther, pSetOther] = useState();

  const [sClothes, sSetClothes] = useState();
  const [sTechnology, sSetTechnology] = useState();
  const [sOther, sSetOther] = useState();

  const [çClothes,çSetClothes] = useState()
    const [çTechnology,çSetTechnology] = useState()
    const [çOther,çSetOther] = useState()

    const [pşClothes, pşSetClothes] = useState();
    const [pşTechnology, pşSetTechnology] = useState();
    const [pşOther, pşSetOther] = useState();
  
    const [cClothes, cSetClothes] = useState();
  const [cTechnology, cSetTechnology] = useState();
  const [cOther, cSetOther] = useState();

  const [cmtClothes, cmtSetClothes] = useState();
  const [cmtTechnology, cmtSetTechnology] = useState();
  const [cmtOther, cmtSetOther] = useState();

  const [pzClothes, pzSetClothes] = useState();
  const [pzTechnology, pzSetTechnology] = useState();
  const [pzOther, pzSetOther] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    belgeEkle({
      pazartesi: [
        pazartesi,
        { Clothes: pClothes },
        { Technology: pTechnology },
        { Other: pOther },
      ],
      sali: [
        sali,
        { Clothes: sClothes },
        { Technology: sTechnology },
        { Other: sOther },
      ],
      çarşamba: [
        çarşamba,
        { Clothes: çClothes },
        { Technology: çTechnology },
        { Other: çOther },
      ],
      perşembe: [
        perşembe,
        { Clothes: pşClothes },
        { Technology: pşTechnology },
        { Other: pşOther },
      ],
      cuma: [
        cuma,
        { Clothes: cClothes },
        { Technology: cTechnology },
        { Other: cOther },
      ],
      cumartesi: [
        cumartesi,
        { Clothes: cmtClothes },
        { Technology: cmtTechnology },
        { Other: cmtOther },
      ],
      pazar: [
        pazar,
        { Clothes: pzClothes },
        { Technology: pzTechnology },
        { Other: pzOther },
      ],
      hafta2,
      hafta3,
      hafta4,
      uid,
    });
    navigate("/dashboard");
  };

  const { belgeEkle } = useFirestore("dashboard1");
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {" "}
          <TextField
            autoComplete="given-name"
            name="username"
            required
            autoFocus
            fullWidth
            id="username"
            label="Pazartesi Kazanç"
            value={pazartesi}
            onChange={(e) => setPazartesi(e.target.value)}
            type="number"
             
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CurrencyLiraIcon></CurrencyLiraIcon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoComplete="given-name"
            name="username"
            required
            fullWidth
            id="username"
            label="Salı Kazanç"
            value={sali}
            onChange={(e) => setSali(e.target.value)}
            type="number"
             
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CurrencyLiraIcon></CurrencyLiraIcon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoComplete="given-name"
            name="username"
            required
            sx={{ mb: 2 }}
            fullWidth
            id="username"
            value={çarşamba}
            onChange={(e) => setÇarşamba(e.target.value)}
            label="Çarşamba Kazanç"
            type="number"
             
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CurrencyLiraIcon></CurrencyLiraIcon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoComplete="given-name"
            name="username"
            required
            fullWidth
            sx={{ mb: 2 }}
            id="username"
            label="Perşembe Kazanç"
            type="number"
            value={perşembe}
            onChange={(e) => setPerşembe(e.target.value)}
             
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CurrencyLiraIcon></CurrencyLiraIcon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoComplete="given-name"
            name="username"
            required
            fullWidth
            sx={{ mb: 2 }}
            id="username"
            label="Cuma Kazanç"
            value={cuma}
            onChange={(e) => setCuma(e.target.value)}
            type="number"
             
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CurrencyLiraIcon></CurrencyLiraIcon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoComplete="given-name"
            name="username"
            required
            fullWidth
            sx={{ mb: 2 }}
            id="username"
            label="Cumartesi Kazanç"
            type="number"
            value={cumartesi}
            onChange={(e) => setCumartesi(e.target.value)}
             
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CurrencyLiraIcon></CurrencyLiraIcon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoComplete="given-name"
            name="username"
            required
            sx={{ mb: 2 }}
            fullWidth
            id="username"
            label="Pazar Kazanç"
            value={pazar}
            onChange={(e) => setPazar(e.target.value)}
            type="number"
             
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CurrencyLiraIcon></CurrencyLiraIcon>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            autoComplete="given-name"
            name="username"
            required
            sx={{ mb: 2 }}
            fullWidth
            id="username"
            value={hafta2}
            onChange={(e) => setHafta2(e.target.value)}
            label="2.Haftalık Kazanç"
            type="number"
             
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CurrencyLiraIcon></CurrencyLiraIcon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoComplete="given-name"
            name="username"
            required
            sx={{ mb: 2 }}
            fullWidth
            id="username"
            value={hafta3}
            onChange={(e) => setHafta3(e.target.value)}
            label="3.Haftalık Kazanç"
            type="number"
             
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CurrencyLiraIcon></CurrencyLiraIcon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoComplete="given-name"
            name="username"
            required
            sx={{ mb: 2 }}
            fullWidth
            id="username"
            value={hafta4}
            onChange={(e) => setHafta4(e.target.value)}
            label="4.Haftalık Kazanç"
            type="number"
             
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CurrencyLiraIcon></CurrencyLiraIcon>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <SalesQuantity
        pClothes={pClothes}
        pOther={pOther}
        pTechnology={pTechnology}
        pSetOther={pSetOther}
        pSetClothes={pSetClothes}
        pSetTechnology={pSetTechnology}
        sClothes={sClothes}
        sOther={sOther}
        sTechnology={sTechnology}
        sSetClothes={sSetClothes}
        sSetTechnology={sSetTechnology}
        sSetOther={sSetOther}
        çClothes={çClothes}
        çTechnology={çTechnology}
        çOther={çOther}
        çSetClothes={çSetClothes}
        çSetTechnology={çSetTechnology}
        çSetOther={çSetOther}
        pşClothes={pşClothes}
        pşTechnology={pşTechnology}
        pşOther={pşOther}
        pşSetClothes={pşSetClothes}
        pşSetTechnology={pşSetTechnology}
        pşSetOther={pşSetOther}
        cClothes={cClothes}
        cTechnology={cTechnology}
        cOther={cOther}
        cSetClothes={cSetClothes}
        cSetTechnology={cSetTechnology}
        cSetOther={cSetOther}
        cmtOther={cmtOther}
        cmtSetClothes={cmtSetClothes}
        cmtSetTechnology={cmtSetTechnology}
        cmtSetOther={cmtSetOther}
        cmtClothes={cmtClothes}
        cmtTechnology={cmtTechnology}
        pzClothes={pzClothes}
        pzTechnology={pzTechnology}
        pzOther={pzOther}
        pzSetClothes={pzSetClothes}
        pzSetTechnology={pzSetTechnology}
        pzSetOther={pzSetOther}


      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Dashboard'a Git.
      </Button>
    </Box>
  );
};

export default EarningPage;
