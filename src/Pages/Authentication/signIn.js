import React, { useState } from "react";

//MUI Components
import { Box, Grid, Typography, Card, CardMedia, TextField, InputAdornment, IconButton, Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Visibility, VisibilityOff, Login } from '@mui/icons-material';

//Images
import LoginFormImage from '../../images/Screenshot from 2023-10-29 18-36-21.png';
import LoginPageImg from '../../images/Screenshot from 2023-10-29 18-46-26.png';

//Style
import "./style.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const innerTheme = createTheme({
    palette: {
        primary: {
            main: "#7367f0",
        },
    },
});

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(true)
    // const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPassword = (e) => {
        console.log("eeeee", e);
        setShowPassword((show) => !show)
    };


    return (
        <>
            <Grid container spacing={0}>
                <Grid item lg={7} xl={7} md={0} sm={0} xs={7}>
                    <Box
                        padding={4}
                        paddingRight={0}
                    >
                        <Card sx={{ borderRadius: '10px' }}>
                            <CardMedia
                                sx={{ height: 880 }}
                                image={LoginPageImg}
                                title="green iguana"
                            />
                        </Card>
                    </Box>
                </Grid>

                <Grid item lg={5} xl={5} md={5} sm={5} xs={5}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100vh"
                    padding={22}
                >
                    <Grid container spacing={1}>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12} style={{padding:'inherit'}}>
                            <Box component="img" src={LoginFormImage}
                                sx={{
                                    height: 50,
                                    width: 50,
                                    maxHeight: { xs: 233, md: 167 },
                                    maxWidth: { xs: 350, md: 250 },
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography fontSize="26px" fontWeight={500} color="#acb0c8">
                                Welcome to Vuexy! 👋🏻
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography fontSize="15px" color="#acb0c8" fontWeight={500}>
                                Please sign-in to your account and start the adventure
                            </Typography>
                        </Grid>

                        <Grid item xs={12} mt={3}>
                            <Typography fontSize="15px" color="#acb0c8" fontWeight={500} paddingBottom={0.5}>
                                Email
                            </Typography>
                            <TextField
                                sx={{
                                    fontSize: '15px',
                                    color: '#acb0c8', borderColor: '#acb0c8'
                                }}
                                id="outlined-multiline-flexible"
                                fullWidth
                                size="small"
                            />
                        </Grid>

                        <Grid item xs={12} mt={1}>
                            <Typography fontSize="15px" color="#acb0c8" fontWeight={500} paddingBottom={0.5}>
                                Password
                            </Typography>
                            <TextField
                                sx={{
                                    fontSize: '15px',
                                    color: '#acb0c8', borderColor: '#acb0c8'
                                }}
                                fullWidth
                                size="small"
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <FormGroup>
                                <FormControlLabel control={
                                    <ThemeProvider theme={innerTheme}>
                                        <Checkbox defaultChecked />
                                    </ThemeProvider>
                                }
                                    label="Remember Me" className="rememberMeCheckBox"
                                />
                            </FormGroup>
                        </Grid>

                        <Grid item xs={6} display="flex" justifyContent="end" alignItems="center">
                            <Typography fontSize="15px" color="#7367f0" fontWeight={500} sx={{cursor:'pointer'}}>
                                Forgot Password?
                            </Typography>
                        </Grid>

                        <Grid item xs={12} mt={1}>
                            <Button variant="contained" className="signUp" size="large" fullWidth endIcon={<Login />}>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} mt={1} display="flex" justifyContent="center" alignItems="center">
                            <Typography fontSize="15px" color="#acb0c8" fontWeight={500} paddingRight={2}>
                                New on our platform?
                            </Typography>
                            <Typography fontSize="15px" color="#7367f0" fontWeight={500} sx={{cursor:'pointer'}}>
                                Forgot Password?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default SignInForm;