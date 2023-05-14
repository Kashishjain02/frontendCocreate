import React from 'react';
import { Container } from '@mui/system';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from "../assets/Logo1.png";


const Footer = () => {
    return (
        <div  style={{ backgroundColor: '#172E59', height: '150px', paddingTop: '50px', margin: '0px' ,color:'#fff'}}>
            <Container maxWidth="lg" style={{ display: 'flex' }} >
                <Box sx={{ marginTop: '30px', width: '20%' }}>
                    <Typography component="div" sx={{ textDecoration: 'none', flexGrow: 1, textAlign: 'left' , maxWidth: '300px'}} style={{ color: '#fff', fontSize: '30px', fontFamily: 'dancing script' }}>
                            <RouterLink to='/' style={{ textDecoration: "none", color: '#fff' }}>
                                <img src={Logo} style={{height: '40px', marginTop: '15px', marginLeft: '10px'}}/>
                            </RouterLink>
                        </Typography>
                </Box>
                <Box style={{ backgroundColor: 'none',color:'white', width: '100%', paddingLeft: '100px', paddingTop: '0px', marginLeft: '50px', marginTop: '-20px', height: '100%', display: 'flex' }}>
                    <Grid container rowSpacing={1} style={{fontFamily:'Roboto'}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                            <p style={{ textTransform:'uppercase', margin: '0px', marginTop:'20px', padding: '0px' ,color:'#fff' ,opacity: '1'}}>Platform
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{ textTransform:'uppercase', margin: '0px', marginTop:'20px', padding: '0px' ,color:'#fff' ,opacity: '1'}}>Resources                                </p>

                        </Grid>
                        <Grid item xs={3}>
                            <p style={{ textTransform:'uppercase', margin: '0px', marginTop:'20px', padding: '0px' ,color:'#fff' ,opacity: '1'}} >Company

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{ textTransform:'uppercase', margin: '0px', marginTop:'20px', padding: '0px' ,color:'#fff' ,opacity: '1'}} >Support

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}}>Browse Mentors
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}}>NewsLetters                                </p>

                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}} >About

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}} >FAQ

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}}>Book A Session
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}}>Podcast                               </p>

                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}} >Partner Program

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}} >Contact

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}}>Become A Mentor
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}}>Case Studies                                </p>

                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}} >Write for Us

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px'  ,color:'#fff' ,opacity: '1'}} >Location

                            </p>
                        </Grid>
                        
                        
                    </Grid>
                </Box>
            </Container>

        </div>
    )
}
export default Footer;