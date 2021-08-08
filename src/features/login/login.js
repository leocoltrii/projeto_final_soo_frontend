import React from 'react';
import './login.css';
import { Button, Grid, Paper, TextField, createMuiTheme, ThemeProvider, Typography } from '@material-ui/core';


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
                width: 400,
                padding: 110,
                margin: 100,
                display: "flex",
                justifyContent: "center",
                color: 'white',
                fontFamily: '!Roboto'
            }
        },
        MuiTextField: {
            root: {
                width: '100%',
                margin: 5
            },
        },

        MuiOutlinedInput: {
            input:{
                color: 'white'
            },
          },

        MuiTypography: {
            root: {
                fontFamily: '!Roboto',
                paddingTop: "1px",
                paddingBottom: "5px",
            }
        },
        MuiButton: {
            root: {
                width: '100%',
                color: '#fff',
                marginTop: '24px',
                marginBottom: '8px',
            }, 
            outlined: {
                borderRadius: '0'
              }
        }
    }
})

export default function Login() {
    return (
        <div className="login">
            <ThemeProvider theme={myTheme}>
                <Paper className='paper-background'>
                    <Grid container>
                        <Grid container 
                            alignItems="center"
                            justify="center">
                            <Typography
                                style={{
                                    fontSize: '26px',
                                    fontWeight: "bold",
                                }}
                            >
                                Welcome to Product Name!
                            </Typography>
                            <Typography
                                style={{
                                    fontSize: '15px',
                                }}
                            >
                                We wish you a pleasant and productive day
                            </Typography>
                        </Grid>

                        <TextField
                            label="Email"
                            className="text-field"
                            id="emailfield"
                            variant="outlined">
                        </TextField>
                        <TextField
                            label="Senha"
                            className="text-field"
                            id="passwordfield"
                            variant="outlined"
                            borderColor='green !important'>
                        </TextField>
                        <Grid container alignItems="center"
                            justify="center">
                            <Grid container>
                                <Button
                                    style={{ fontSize: '16px', marginRight: '10px' }}
                                    variant="contained"
                                    className="button-block"
                                    id="entrarbtn"
                                >
                                    Sign In
                                </Button>
                                <Button
                                    style={{ fontSize: '16px', marginRight: '10px' }}
                                    variant="contained"
                                    className="button-block"
                                    id="voltarbtn" >
                                    Voltar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </ThemeProvider>
        </div>
    );
}
