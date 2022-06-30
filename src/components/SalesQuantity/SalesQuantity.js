import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import { Box, InputAdornment } from "@mui/material";
import Typography from "@mui/material/Typography";
const SalesQuantity = ({
  pSetClothes,
  pSetOther,
  pSetTechnology,
  pClothes,
  pOther,
  pTechnology,
  sSetClothes,
  sSetOther,
  sSetTechnology,
  sClothes,
  sOther,
  sTechnology,
  çSetClothes,
  çSetOther,
  çSetTechnology,
  çTechnology,
  çOther,
  çClothes,
  pşClothes,
  pşOther,
  pşTechnology,
  pşSetClothes,
  pşSetOther,
  pşSetTechnology,
  cClothes,
  cTechnology,
  cOther,
  cSetClothes,
  cSetTechnology,
  cSetOther,
  cmtClothes,
  cmtTechnology,
  cmtOther,
  cmtSetClothes,
  cmtSetTechnology,
  cmtSetOther,
  pzClothes,
  pzTechnology,
  pzOther,
  pzSetClothes,
  pzSetOther,
  pzSetTechnology,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(240, 234, 234)",
        borderRadius: "10px",
        boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
        padding: "20px",
        marginTop: "10px",
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center", mb: 3 }}>
        {" "}
        Günlük Satış Formu
      </Typography>
      <Grid container spacing={3}>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            padding: "20px",
            marginTop: "10px",
            marginLeft: "30px",
            
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
            Pazartesi
          </Typography>
          <Grid container>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Pazartesi Kıyafet Satış"
                value={pClothes}
                onChange={(e) => pSetClothes(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Pazartesi Teknoloji Satış"
                value={pTechnology}
                onChange={(e) => pSetTechnology(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Pazartesi Diğer Satış"
                value={pOther}
                onChange={(e) => pSetOther(e.target.value)}
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
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            padding: "20px",
            marginTop: "10px",
            marginLeft: "30px",
          }}
        >
          {" "}
          <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
            Salı
          </Typography>
          <Grid container>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Salı Kıyafet Satış"
                value={sClothes}
                onChange={(e) => sSetClothes(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Salı Teknoloji Satış"
                value={sTechnology}
                onChange={(e) => sSetTechnology(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Salı Diğer Satış"
                value={sOther}
                onChange={(e) => sSetOther(e.target.value)}
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
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            padding: "20px",
            marginTop: "10px",
            marginLeft: "30px",
          }}
        >
          {" "}
          <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
            Çarşamba
          </Typography>
          <Grid container>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Çarşamba Kıyafet Satış"
                value={çClothes}
                onChange={(e) => çSetClothes(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Çarşamba Teknoloji Satış"
                value={çTechnology}
                onChange={(e) => çSetTechnology(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Çarşamba Diğer Satış"
                value={çOther}
                onChange={(e) => çSetOther(e.target.value)}
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
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            padding: "20px",
            marginTop: "10px",
            marginLeft: "30px",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
            Perşembe
          </Typography>
          <Grid container>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Perşembe Kıyafet Satış"
                value={pşClothes}
                onChange={(e) => pşSetClothes(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Perşembe Teknoloji Satış"
                value={pşTechnology}
                onChange={(e) => pşSetTechnology(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Perşembe Cuma Satış"
                value={pşOther}
                onChange={(e) => pşSetOther(e.target.value)}
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
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            padding: "20px",
            marginTop: "10px",
            marginLeft: "30px",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
            Cuma
          </Typography>
          <Grid container>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Cuma Kıyafet Satış"
                value={cClothes}
                onChange={(e) => cSetClothes(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Cuma Teknoloji Satış"
                value={cTechnology}
                onChange={(e) => cSetTechnology(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Cuma Diğer Satış"
                value={cOther}
                onChange={(e) => cSetOther(e.target.value)}
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
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            padding: "20px",
            marginTop: "10px",
            marginLeft: "30px",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
            Cumartesi
          </Typography>
          <Grid container>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Cumartesi Kıyafet Satış"
                value={cmtClothes}
                onChange={(e) => cmtSetClothes(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Cumartesi Teknoloji Satış"
                value={cmtTechnology}
                onChange={(e) => cmtSetTechnology(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Cumartesi Diğer Satış"
                value={cmtOther}
                onChange={(e) => cmtSetOther(e.target.value)}
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
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            padding: "20px",
            marginTop: "10px",
            marginLeft: "30px",
          }}
        >
          {" "}
          <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
            Pazar
          </Typography>
          <Grid container>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Pazar Kıyafet Satış"
                value={pzClothes}
                onChange={(e) => pzSetClothes(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Pazar Teknoloji Satış"
                value={pzTechnology}
                onChange={(e) => pzSetTechnology(e.target.value)}
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
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Pazar Diğer Satış"
                value={pzOther}
                onChange={(e) => pzSetOther(e.target.value)}
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
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default SalesQuantity;
