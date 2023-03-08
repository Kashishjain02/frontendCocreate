import React from 'react';
import { Container } from '@mui/system';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div  style={{ backgroundColor: '#172E59', height: '150px', paddingTop: '50px', margin: '0px' }}>
            <Container maxWidth="lg" style={{ display: 'flex' }} >
                <Box sx={{ marginTop: '30px', width: '20%' }}>
                    <Typography component="div" sx={{ textDecoration: 'none', flexGrow: 1, textAlign: 'left' }} style={{ color: 'black', fontSize: '30px', fontFamily: 'dancing script' }}>
                        <RouterLink to='/home' style={{ textDecoration: "none", color: 'white' }}> CoCreate Labs
                        </RouterLink>
                    </Typography>
                </Box>
                <Box style={{ backgroundColor: 'none',color:'white', width: '100%', paddingLeft: '100px', paddingTop: '0px', marginLeft: '50px', marginTop: '-20px', height: '100%', display: 'flex' }}>
                    <Grid container rowSpacing={1} style={{fontFamily:'Roboto'}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                            <p style={{ textTransform:'uppercase', margin: '0px', marginTop:'20px', padding: '0px' }}>Platform
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{ textTransform:'uppercase', margin: '0px', marginTop:'20px', padding: '0px' }}>Resources                                </p>

                        </Grid>
                        <Grid item xs={3}>
                            <p style={{ textTransform:'uppercase', margin: '0px', marginTop:'20px', padding: '0px' }} >Company

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{ textTransform:'uppercase', margin: '0px', marginTop:'20px', padding: '0px' }} >Support

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }}>Browse Mentors
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }}>NewsLetters                                </p>

                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }} >About

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }} >FAQ

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }}>Book A Session
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }}>Podcast                               </p>

                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }} >Partner Program

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }} >Contact

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }}>Become A Mentor
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }}>Case Studies                                </p>

                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }} >Write for Us

                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <p style={{  margin: '0px', padding: '0px' }} >Location

                            </p>
                        </Grid>
                        
                        
                    </Grid>
                </Box>
            </Container>

        </div>
    )
}
export default Footer;