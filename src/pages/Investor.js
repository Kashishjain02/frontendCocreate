import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Container, Grid, TextField } from "@mui/material";
import Typewriter from 'typewriter-effect';
import { width } from "@mui/system";
import { blueGrey } from "@mui/material/colors";
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import VideocamIcon from '@mui/icons-material/Videocam';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Poppins2 from '../media/fonts/Poppins/Poppins-Regular.ttf';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";
import AppBar from '../components/Appbar';
import Footer from '../components/Footer';

export const Investor = () => {
    return(
        <>
        <AppBar/>
        <Box style={{backgroundImage: "url('/assets/investor_bg1.png')", margin: 'auto', height: '90vh', width: '95vw', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'none', paddingTop: '50px'}}>
            <Grid container>
                    <Container maxWidth={'xl'}>
                        <Grid item md={12} style={{ justifyContent: 'center'}}>
                                <br/>
                                <div style={{ marginTop: '100px', justifyContent: 'center' }}>
                                    <p style={{ fontSize: '40px', marginBottom: '0px', fontWeight: '650', color: 'white'}}>1-ON-1 With global experts from
                                    </p>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontSize: '40px', fontWeight: '650', marginTop: "5px", color: 'white' }}>
                                            <Typewriter
                                                options={{
                                                    strings: ['Ed-tech', 'Med-Tech', 'Clean Tech', 'Health Tech', 'Supply Chain', 'Marketing & Branding', 'Legal Services', 'Sustainable Fashion', 'Cloud Computing'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </p>
                                        <p style={{ fontSize: '40px', marginTop: '5px', fontWeight: '650', color: 'white'}}>Industry
                                        </p><br></br>
                                        
                                    </div>
                                    <p style={{ fontSize: '15px', width: '45%', marginTop: '-10px', fontFamily: {Poppins2}, fontWeight: 'bold', color: "white"}}><b>We are a group of professionals spread across the globe from varied backgrounds united by a purpose to curate an integrated platform to democratize access to global expertise and opportunities for start-ups, aspiring entrepreneurs, and non-profits.</b>
                                    </p>
                                </div>
                                {/* </div> */}
                            </Grid>
                        </Container>
                        <br></br>
                        <Grid item md={10} style={{ justifyContent: 'space-around', marginTop: '10px' }}>
                            
                            
                                <Button variant='contained' style={{background: '#243D66', fontWeight: '600', marginLeft: '20px', padding: '10px', width: '150px'}}>
                                    Read More
                                </Button>

                        </Grid>
                        
            </Grid>
        </Box>
        <br/><br/><br/><br/>
        <Box style={{borderTop: '1px solid black'}}>
            <p style={{marginLeft: '40px', fontSize: '25px', fontWeight: 'bold'}}>Startup Meet 2022</p>
            <Box style={{background: 'rgba(36, 61, 102, 1)', padding: '30px 40px', color: 'white'}}>
                <p style={{fontSize: '20px'}}>Co-create labs is collaborating with with top investors aorund the country. Aims discovering, nurturing, and growth of startups by providing right guidance and grants by top mentors and investors. Apply Now and Take the next step in your career!</p>
                <Link to={'/register'}><Button style={{color: 'white', border: '1px solid white', borderRadius: '5px', padding: '10px 20px'}}>Apply Now</Button></Link>
            </Box>
        </Box>

        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
            <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
            <Typography style={{ textAlign: 'center', margin: '20px', fontWeight: '1000', fontSize: '30px'}}><h3>GET TO KNOW ABOUT US!</h3></Typography>
            <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
        </Box>

        <Box style={{ background: 'white', marginTop: '20px' }}>
                <center>
                    <video width="100%" height="600" autoPlay loop muted src="/assets/v1.mp4" />
                </center>
            </Box>

        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
            <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
            <Typography style={{ textAlign: 'center', margin: '20px', fontWeight: '1000', fontSize: '30px'}}><h4>WHY SHOULD YOU APPLY</h4></Typography>
            <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
        </Box>

        <Box style={{marginTop: '-20px'}}>
            <Grid container columnGap={2} rowGap={2} style={{margin: 'auto', padding: '0 30px', width: '80%'}}>
                <Grid item md={3.7} sm={11}><Box style={{background: 'rgba(114, 67, 155, 0.18)', height: '60px', padding: '30px', textAlign: 'center', borderRadius: '10px', boxShadow: '-21.633px 21.63px 21.633px 0px rgba(255, 255, 255, 0.1) inset', boxShadow: '21.633px -21.633px 21.633px 0px rgba(87, 51, 118, 0.1) inset', fontFamily: 'Raleway', fontWeight: '600'}}>Grant of ₹ 20,00,000 during the course of 6-month program</Box></Grid>
                <Grid item md={3.7} sm={11}><Box style={{background: 'rgba(114, 67, 155, 0.18)', height: '60px', padding: '30px', textAlign: 'center', borderRadius: '10px', boxShadow: '-21.633px 21.63px 21.633px 0px rgba(255, 255, 255, 0.1) inset', boxShadow: '21.633px -21.633px 21.633px 0px rgba(87, 51, 118, 0.1) inset', fontFamily: 'Raleway', fontWeight: '700'}}>Mentorship by industry experts and researchers</Box></Grid>
                <Grid item md={3.7} sm={11}><Box style={{background: 'rgba(114, 67, 155, 0.18)', height: '60px', padding: '30px', textAlign: 'center', borderRadius: '10px', boxShadow: '-21.633px 21.63px 21.633px 0px rgba(255, 255, 255, 0.1) inset', boxShadow: '21.633px -21.633px 21.633px 0px rgba(87, 51, 118, 0.1) inset', fontFamily: 'Raleway', fontWeight: '700'}}>Access to a network of potential strategic partners and investors.</Box></Grid>
            </Grid>
            <br/>
            <Grid container columnGap={1} rowGap={2} style={{margin: 'auto', width: '80%', padding: '0 50px 0 50px'}}>
                <Grid item md={5} sm={12}><Box style={{background: 'rgba(114, 67, 155, 0.18)', padding: '30px', textAlign: 'center', borderRadius: '10px', boxShadow: '-21.633px 21.63px 21.633px 0px rgba(255, 255, 255, 0.1) inset', boxShadow: '21.633px -21.633px 21.633px 0px rgba(87, 51, 118, 0.1) inset', fontFamily: 'Raleway', fontWeight: '700'}}>Opportunities to participate and present at industry events</Box></Grid>
                <Grid item md={5} sm={12}><Box style={{background: 'rgba(114, 67, 155, 0.18)', padding: '30px', textAlign: 'center', borderRadius: '10px', boxShadow: '-21.633px 21.63px 21.633px 0px rgba(255, 255, 255, 0.1) inset', boxShadow: '21.633px -21.633px 21.633px 0px rgba(87, 51, 118, 0.1) inset', fontFamily: 'Raleway', fontWeight: '700'}}>Access to technology and infrastructure support</Box></Grid>
            </Grid>
        </Box>
        <br/>
        <br/>
        <Box style={{ background: 'rgba(110, 97, 202, 0.13)', width: '87%', margin: 'auto', boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)', padding: '30px 20px' }}>
                        <Grid container style={{ alignItems: 'center' }} columnSpacing={5}>
                        <Grid item md={7}>
                                <Container>
                                    <Typography variant='h4' style={{ fontFamily: 'Koulen', fontWeight: '800', color: 'rgba(36, 61, 102, 1)' }}>WHO SHOULD APPLY ?</Typography>
                                    <br></br>
                                    <Typography variant='subtitle2' style={{ fontFamily: 'Raleway', lineHeight: '28.8px', fontSize: '21px', textAlign: 'justify', fontWeight: '700', marginTop: '-20px' }}> 
                                    <ul>
                                        <li>Early stage startups building products or solutions </li>
                                        <li>The startup should have at least 1 full-time founder</li>
                                        <li>The startup should be in the prototype/ minimal viable product/ pre-revenue stage</li>
                                        <li>Startups registered with the Department for Promotion of Industry and Internal Trade (DPIIT) or eligible and willing to be registered with DPIIT</li>
                                    </ul>
                                    </Typography>
                                    <Link to={'/register'}><button style={{background: 'rgba(36, 61, 102, 1)', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', textDecoration: 'none'}}>Apply Now</button></Link>
                                </Container>
                            </Grid>
                            <Grid item md={4}>
                                <img src={'/assets/who_apply.png'} style={{height: '300px', boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)'}} />
                            </Grid>
                            
                    </Grid>
             </Box>

        <br/><br/>
        <Box style={{background: 'rgba(36, 61, 102, 1)', padding: '20px'}}>
            <center>
            <Typography style={{color: 'white'}}>
                <p style={{opacity: '0.5'}}>TechSys Team</p>
                <h2>Meet Our Mentors</h2>
                <p style={{opacity: '0.5', fontSize: '15px'}}>adipiscing elit. Gravida scelerisque a blandit mauris.</p>
            </Typography>
            </center>
            <br/><br/>
            <center>
                
            <Box style={{margin: 'auto'}}>
                <Grid container columnGap={8} rowGap={5} style={{justifyContent: 'center'}}>
                    <Grid item style={{background: 'white', height: '250px', width: '200px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                        <Grid container>
                            <Grid item><img src={'/assets/mentor_1.png'} style={{width: '200px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px', color: 'dodgerblue', fontWeight: '600'}}>CEO & Co-Founder</Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '250px', width: '200px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                    <Grid container>
                            <Grid item><img src={'/assets/mentor_7.png'} style={{width: '200px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px', color: 'dodgerblue', fontWeight: '600'}}>CTO & Co-Founder</Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '250px', width: '200px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                    <Grid container>
                            <Grid item><img src={'/assets/mentor_3.png'} style={{width: '200px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px', color: 'dodgerblue', fontWeight: '600'}}>VP Of Technology</Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '250px', width: '200px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                    <Grid container>
                            <Grid item><img src={'/assets/mentor_4.png'} style={{width: '200px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px', color: 'dodgerblue', fontWeight: '600'}}>Head Of Design</Grid>
                        </Grid>
                    </Grid>
              
                    <Grid item style={{background: 'white', height: '250px', width: '200px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                    <Grid container>
                            <Grid item><img src={'/assets/mentor_5.png'} style={{width: '200px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px', color: 'dodgerblue', fontWeight: '600'}}>Head Of Marketing</Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '250px', width: '200px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                    <Grid container>
                            <Grid item><img src={'/assets/mentor_6.png'} style={{width: '200px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px', color: 'dodgerblue', fontWeight: '600'}}>CEO & Co-Founder</Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '250px', width: '200px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                    <Grid container>
                            <Grid item><img src={'/assets/mentor_7.png'} style={{width: '200px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px', color: 'dodgerblue', fontWeight: '600'}}>CEO & Co-Founder</Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '250px', width: '200px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                    <Grid container>
                            <Grid item><img src={'/assets/mentor_8.png'} style={{width: '200px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px', color: 'dodgerblue', fontWeight: '600'}}>Head of Content Writing</Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>
                <Button style={{marginTop: '40px', background: 'white', padding: '5px 10px'}}>Join us</Button>
                <br></br> <br/><br/>
            </Box>
            </center>
        </Box>
        <br/><br/><br/><br/><br/>

        <Footer/>
        </>
    );
}