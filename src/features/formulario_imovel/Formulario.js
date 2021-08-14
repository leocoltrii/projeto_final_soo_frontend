import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, Paper, ThemeProvider, MenuItem  } from '@material-ui/core';

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#222435',
        },
        secondary: {
            main: '#0A4E5A'
        }
    },
    overrides: {
        MuiPaper: {
            root: {
                justifyContent: "center",
                fontFamily: '!Roboto'
            }
        }
    }
})

const optionsImoveis = [
    'Casa',
    'Hotel',
    'Apartamento',
    'Flat',
    'Pousada',
  ];

export default function AddressForm() {

    const [imovelTipo, setImovelTipo] = React.useState('Casa');
    const handleChange = (event) => {
        setImovelTipo(event.target.value);
    };
    
    return (
        <React.Fragment>
            <ThemeProvider theme={myTheme}>
            <Paper>
                <Typography variant="h4" gutterBottom>
                    Formulário de Locação
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="Nome"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="shipping mail"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="shipping address-line1"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="shipping postal-code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="shipping country"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="qtdBanheiro"
                            name="qtdBanheiro"
                            label="Banheiros"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="qtdQuartos"
                            name="qtdQuartos"
                            label="Quartos"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="qtdSuites"
                            name="qtdSuites"
                            label="Suites"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="qtdVagas"
                            name="qtdVagas"
                            label="Vagas Estacionamento"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="precoAluguel"
                            name="precoAluguel"
                            label="Valor Aluguel"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="m_2"
                            name="m_2"
                            label="m²"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Imóvel"
                        helperText="Selecione o tipo do imóvel"
                        variant="outlined"
                        value={imovelTipo}
                        onChange={handleChange}
                        > {optionsImoveis.map((optionsImoveis) => (
                            <MenuItem key={optionsImoveis} value={optionsImoveis}>
                              {optionsImoveis}
                            </MenuItem>
                          ))}
                    </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="piscina" value="yes" />}
                            label="Piscina"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="academia" value="yes" />}
                            label="Academia"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="quadraEsportes" value="yes" />}
                            label="Quadra de Esportes"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="churrasqueira" value="yes" />}
                            label="Churrasqueira"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="quintal" value="yes" />}
                            label="Quintal"
                        />
                    </Grid>
                </Grid>
            </Paper>
            </ThemeProvider>
        </React.Fragment>
    );
}