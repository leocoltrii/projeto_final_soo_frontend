import React from 'react';
import {
    createMuiTheme, Paper, ThemeProvider, MenuItem, Grid, Typography, TextField, FormControlLabel,
    Checkbox, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { Button } from '../components/'

const optionsImoveis = [
    'Casa',
    'Hotel',
    'Apartamento',
    'Flat',
    'Pousada',
];

const initialValues = {
    id: 0,
    fullName: '',
    email: '',
}

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#222435',
        },
        secondary: {
            main: '#0A4E5A'
        }
    },
})

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(1),
            display: 'flex',
            flexWrap: 'wrap',
        }
    },
    pageContent: {
        padding: theme.spacing(2),
        margin: theme.spacing(4),
    }
}))

export default function FormularioT() {

    const [values, setValues] = useState(initialValues);
    const classes = useStyle();
    

    const [imovelTipo, setImovelTipo] = React.useState('Casa');
    const handleChange = (event) => {
        setImovelTipo(event.target.value);
    };

    return (
        <ThemeProvider theme={myTheme}>
            <Paper className={classes.pageContent}>
                <form className={classes.root}>
                    <Grid container spacing={3} alignItems="center"
                                justify="center">
                        <Typography
                            style={{paddingTop: '12px',
                                fontSize: '24px',
                                fontWeight: "bold",
                                }}>Formulário de Locação
                        </Typography>
                        <Grid item xs={12} >
                            <TextField
                                required
                                id="fullName"
                                name="fullName"
                                label="Nome Completo"
                                fullWidth
                                autoComplete="full-name"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                autoComplete="email"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Endereço"
                                fullWidth
                                autoComplete="address"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="Cidade"
                                fullWidth
                                autoComplete="city"
                                variant="filled"
                            />
                        </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    required
                                    id="state" 
                                    name="state" 
                                    label="Estado" 
                                    fullWidth 
                                    variant="filled" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="cep"
                                    name="cep"
                                    label="CEP"
                                    fullWidth
                                    autoComplete="cep"
                                    variant="filled"
                                />
                            </Grid>
                        <Grid item xs={12} lg={3} sm={6}>
                            <TextField
                                required
                                id="qtdBanheiro"
                                name="qtdBanheiro"
                                label="Banheiros"
                                helperText="Quantidade de banheiros"
                                fullWidth
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} lg={3} sm={6}>
                            <TextField
                                required
                                id="qtdQuartos"
                                name="qtdQuartos"
                                label="Quartos"
                                helperText="Quantidade de quartos"
                                fullWidth
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} lg={3} sm={6}>
                            <TextField
                                required
                                id="qtdSuites"
                                name="qtdSuites"
                                label="Suítes"
                                helperText="Quantidade de suítes"
                                fullWidth
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} lg={3} sm={6}>
                            <TextField
                                required
                                id="qtdVagas"
                                name="qtdVagas"
                                label="Vagas"
                                helperText="Quantidade de vagas de estacionamento"
                                fullWidth
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="tipoImovel"
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
                        <Grid container spacing={1} alignItems="center"
                                justify="center">
                            <Grid item xs={12} lg={2} sm={4}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary" name="piscina" value="yes" />}
                                    label="Piscina"
                                />
                            </Grid>
                            <Grid item xs={12} lg={2} sm={4}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary" name="academia" value="yes" />}
                                    label="Academia"
                                />
                            </Grid>
                            <Grid item xs={12} lg={2} sm={4}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary" name="quadraEsportes" value="yes" />}
                                    label="Quadra de Esportes"
                                />
                            </Grid>
                            <Grid item xs={12} lg={2} sm={4}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary" name="churrasqueira" value="yes" />}
                                    label="Churrasqueira"
                                />
                            </Grid>
                            <Grid item xs={12} lg={2} sm={4}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary" name="quintal" value="yes" />}
                                    label="Quintal"
                                />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center"
                                justify="center">
                            <Button
                                type="submit"
                                text="Enviar"
                            />
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </ThemeProvider>
    )
};