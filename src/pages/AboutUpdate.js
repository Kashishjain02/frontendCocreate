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

export const AboutUpdate = () => {
    return(
        <>
        <AppBar/>
        <Box style={{backgroundImage: "url('/assets/about_bg.png')", margin: 'auto', height: '90vh', width: '95vw', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'none', paddingTop: '50px'}}>
            <Box style={{ margin: 'auto', width: '80%', paddingTop: '100px'}}>
                <p style={{ fontSize: '40px' ,  textAlign: 'center', fontWeight: '650', color: 'white'}}>1-ON-1 With global experts from MED-TECH Industry
                </p>
            </Box>
        </Box>
        <br/>
        <Box style={{ width: '87%', margin: 'auto', padding: '30px 20px' }}>
                        <Grid container style={{ alignItems: 'center' }} columnSpacing={5}>

                        <Grid item md={7}>
                                <Container>
                                    <Typography variant='h4' style={{ fontFamily: 'Koulen', fontWeight: '800', color: 'rgba(36, 61, 102, 1)' }}>About Us </Typography>
                                    <br></br>
                                    <Typography variant='subtitle2' style={{ fontFamily: 'Raleway', lineHeight: '28.8px', fontSize: '21px', textAlign: 'justify', fontWeight: '700' }}> Get access to one-on-one mentorship sessions with sector-specific vetted experts from industries ranging from EdTech, healthcare, medtech, clean tech, and others. Cross vertical ones like marketing & branding, legal services, finance & accounts, cloud computing and more.</Typography>
                                    <br></br><br></br>
                                    <Link to={'/mentors'}><Button variant='contained' style={{background: 'rgba(36, 61, 102, 1)'}}>Explore</Button></Link>
                                </Container>
                            </Grid>
                            <Grid item md={4}>
                                <img src={'/assets/about_1.png'} style={{height: '350px'}} />
                            </Grid>
                            
                </Grid>
        </Box>
        <br></br>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
            <Typography style={{ textAlign: 'center', margin: '20px', fontWeight: '900', fontSize: '30px'}}>Our Mission</Typography>
            <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
        </Box>
        <Box style={{ width: '87%', margin: 'auto', padding: '30px 20px', marginTop: '-20px' }}>
        <p style={{ fontFamily: 'Raleway', width: '90%', lineHeight: '28.8px', fontSize: '21px', textAlign: 'justify', fontWeight: '700' }}>Our platform empowers you to chase your dreams and create an impact vis-à-vis 3 verticals of our company: Mentor Connect, Investor Connect & Grants Connect</p>
        </Box>

        
        <Box style={{ background: 'rgba(110, 97, 202, 0.13)', width: '87%', margin: 'auto', boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)', padding: '30px 20px' }}>
                        <Grid container style={{ alignItems: 'center' }} columnSpacing={5}>

                        <Grid item md={7}>
                                <Container>
                                    <Typography variant='h4' style={{ fontFamily: 'Koulen', fontWeight: '800', color: 'rgba(36, 61, 102, 1)' }}>MENTOR CONNECT</Typography>
                                    <br></br>
                                    <Typography variant='subtitle2' style={{ fontFamily: 'Raleway', lineHeight: '28.8px', fontSize: '21px', textAlign: 'justify', fontWeight: '700' }}> Get access to one-on-one mentorship sessions with sector-specific vetted experts from industries ranging from EdTech, healthcare, medtech, clean tech, and others. Cross vertical ones like marketing & branding, legal services, finance & accounts, cloud computing and more.</Typography>
                                    <br></br><br></br>
                                    <Link to={'/mentors'}><Button variant='contained' style={{background: 'rgba(36, 61, 102, 1)'}}>Explore</Button></Link>
                                </Container>
                            </Grid>
                            <Grid item md={4}>
                                <img src={'/assets/Mentor-new.png'} style={{height: '250px', boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)'}} />
                            </Grid>
                            
                        </Grid>
                    </Box>
                    <br></br><br></br>
                    <Box style={{ background: 'rgba(110, 97, 202, 0.13)', width: '87%', margin: 'auto', boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)', padding: '30px 20px' }}>
                        <Grid container style={{ alignItems: 'center' }} columnGap={8}>
                            <Grid item md={4}>
                                <img src={'/assets/investor-new.png'} style={{height: '250px', boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)'}} />
                            </Grid>
                        
                            <Grid item md={7}>
                                    <Container>
                                        <Typography variant='h4' style={{ fontFamily: 'Koulen', fontWeight: '800', color: 'rgba(36, 61, 102, 1)' }}>INVESTOR CONNECT</Typography>
                                        <br></br>
                                        <Typography variant='subtitle2' style={{ fontFamily: 'Raleway', lineHeight: '28.8px', fontSize: '21px', textAlign: 'justify', fontWeight: '700' }}> Get access to one-on-one mentorship sessions with sector-specific vetted experts from industries ranging from EdTech, healthcare, medtech, clean tech, and others. Cross vertical ones like marketing & branding, legal services, finance & accounts, cloud computing and more.</Typography>
                                        <br></br><br></br>
                                        <Link to={'/investor'}><Button variant='contained' style={{background: 'rgba(36, 61, 102, 1)'}}>Explore</Button></Link>
                                    </Container>
                            </Grid>
                            
                        </Grid>
                    </Box>
                    <br></br><br></br>
                    <Box style={{ background: 'rgba(110, 97, 202, 0.13)', width: '87%', margin: 'auto', boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)', padding: '30px 20px' }}>
                        <Grid container style={{ alignItems: 'center' }} columnGap={5}>
                            
                        
                            <Grid item md={7}>
                                    <Container>
                                        <Typography variant='h4' style={{ fontFamily: 'Koulen', fontWeight: '800', color: 'rgba(36, 61, 102, 1)' }}>GRANTS CONNECT</Typography>
                                        <br></br>
                                        <Typography variant='subtitle2' style={{ fontFamily: 'Raleway', lineHeight: '28.8px', fontSize: '21px', textAlign: 'justify', fontWeight: '700' }}>Get Access to grants for your non-profits to scale up and sustain your social sector initiatives provided they are in alignment with the UN SDGs and you meet our eligibility criterias.</Typography>
                                        <br></br><br></br>
                                        <Link to={'/grants'}><Button variant='contained' style={{background: 'rgba(36, 61, 102, 1)'}}>Explore</Button></Link>
                                    </Container>
                            </Grid>

                            <Grid item md={4}>
                                <img src={'/assets/grants-connect.png'} style={{height: '250px', boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)'}} />
                            </Grid>
                            
                        </Grid>
                    </Box>
                    <br/><br/><br/><br/>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
            <Typography style={{ textAlign: 'center', margin: '20px', fontWeight: '900', fontSize: '30px'}}>Our Partners</Typography>
            <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
        </Box>

        <Box style={{margin: 'auto'}}>
                <Grid container columnGap={2} rowGap={3} style={{justifyContent: 'center'}}>
                    <Grid item style={{background: 'white', height: '450px', width: '220px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                        <Grid container>
                        <Link to='/team/0' style={{ textDecoration: 'none', color: 'black' }}>
                            <Grid item style={{overflow: 'hidden'}}><img src={'/assets/img1_2.png'} style={{width: '220px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px',  fontWeight: '600', position: 'relative', top: '-50px', background: 'linear-gradient(180deg, #C2B0D3,  white)', height: '50px', width: '100%'}}>
                                <Box style={{textAlign: 'center', lineHeight:'30px', marginTop: '10px'}}><span style={{fontSize: '20px'}}>Dr. Andrea Diese</span><br/>CHIEF OPERATING OFFICER</Box></Grid>
                        </Link>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '450px', width: '220px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                        <Grid container>
                        <Link to='/team/2' style={{ textDecoration: 'none', color: 'black' }}>
                            <Grid item style={{overflow: 'hidden'}}><img src={'/assets/img3.png'} style={{width: '220px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px',  fontWeight: '600', position: 'relative', top: '-50px', background: 'linear-gradient(180deg, #C2B0D3, white)', height: '50px', width: '100%'}}>
                                <Box style={{textAlign: 'center', lineHeight:'30px', marginTop: '10px'}}><span style={{fontSize: '20px'}}>KUMAR SUBHAM</span><br/>CHIEF STRATEGY OFFICER</Box></Grid>
                        </Link>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '450px', width: '220px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                        <Grid container>
                        <Link to='/team/3' style={{ textDecoration: 'none', color: 'black' }}>
                            <Grid item style={{overflow: 'hidden'}}><img src={'/assets/img4.png'} style={{width: '220px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px',  fontWeight: '600', position: 'relative', top: '-50px', background: 'linear-gradient(180deg, #C2B0D3, white)', height: '50px', width: '100%'}}>
                                <Box style={{textAlign: 'center', lineHeight:'30px', marginTop: '10px'}}><span style={{fontSize: '20px'}}>SOHAM GHOSH</span><br/>CHIEF EXECUTIVE OFFICER</Box></Grid>
                        </Link>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '450px', width: '220px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                        <Grid container>
                            <Link to='/team/1' style={{ textDecoration: 'none', color: 'black' }}>
                            <Grid item style={{overflow: 'hidden'}}><img src={'/assets/img2.png'} style={{width: '220px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px',  fontWeight: '600', position: 'relative', top: '-50px', background: 'linear-gradient(180deg, #C2B0D3, white)', height: '50px', width: '100%'}}>
                                <Box style={{textAlign: 'center', lineHeight:'30px', marginTop: '10px'}}><span style={{fontSize: '20px'}}>NEIL MACCULLUM</span><br/>CHIEF VISIONARY OFFICER</Box></Grid>
                                </Link>
                        </Grid>
                    </Grid>
              
                    <Grid item style={{background: 'white', height: '450px', width: '220px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                        <Grid container>
                            <Link to='/team/4' style={{ textDecoration: 'none', color: 'black' }}>
                            <Grid item style={{overflow: 'hidden'}}><img src={'/assets/img5.png'} style={{width: '220px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px',  fontWeight: '600', position: 'relative', top: '-50px', background: 'linear-gradient(180deg, #C2B0D3, white)', height: '50px', width: '100%'}}>
                                <Box style={{textAlign: 'center', lineHeight:'30px', marginTop: '10px'}}><span style={{fontSize: '20px'}}>ABHISHEK MODAK</span><br/>CHIEF FINANCIAL OFFICER</Box></Grid>
                            </Link>
                        </Grid>
                    </Grid>

                    
                    
                </Grid>
               
            </Box>

            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
            <Typography style={{ textAlign: 'center', margin: '20px', fontWeight: '900', fontSize: '30px'}}>Our Executives</Typography>
            <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
        </Box>

        <Box style={{margin: 'auto'}}>
                <Grid container columnGap={2} rowGap={3} style={{justifyContent: 'center'}}>
                    <Grid item style={{background: 'white', height: '450px', width: '220px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                        <Grid container>
                            <Grid item style={{overflow: 'hidden'}}><img src={'/assets/exe_1.png'} style={{width: '220px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px',  fontWeight: '600', position: 'relative', top: '-20px', background: 'linear-gradient(180deg, #C2B0D3, white)', height: '50px', width: '100%'}}>
                                <Box style={{textAlign: 'center', lineHeight:'30px', marginTop: '10px'}}><span style={{fontSize: '20px'}}>DEVIKA KHANNA</span><br/>OPERATION MANAGER</Box></Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '450px', width: '220px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                        <Grid container>
                            <Grid item style={{overflow: 'hidden'}}><img src={'/assets/exe2.png'} style={{width: '220px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px',  fontWeight: '600', position: 'relative', top: '-20px', background: 'linear-gradient(180deg, #C2B0D3, white)', height: '50px', width: '100%'}}>
                                <Box style={{textAlign: 'center', lineHeight:'30px', marginTop: '10px'}}><span style={{fontSize: '20px'}}>ASSIA ERRAIDI</span><br/>PR AND COMMUNICATION OFFICER</Box></Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '450px', width: '220px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                        <Grid container>
                            <Grid item style={{overflow: 'hidden'}}><img src={'/assets/exe3.png'} style={{width: '220px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px',  fontWeight: '600', position: 'relative', top: '-20px', background: 'linear-gradient(180deg, #C2B0D3, white)', height: '50px', width: '100%'}}>
                                <Box style={{textAlign: 'center', lineHeight:'30px', marginTop: '10px'}}><span style={{fontSize: '20px'}}>RAJAT GOYAL</span><br/>TECHNICAL MANAGER</Box></Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{background: 'white', height: '450px', width: '220px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                       <a style={{"textDecoration":'none'}} href="https://www.linkedin.com/in/nitesh-saini-80893b1a0/?originalSubdomain=in" target="_blank">
                        <Grid container>
                            <Grid item style={{overflow: 'hidden'}}><img src={'/assets/exe4.png'} style={{width: '220px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px',color:'black' , fontWeight: '600', position: 'relative', top: '-20px', background: 'linear-gradient(180deg, #C2B0D3, white)', height: '50px', width: '100%'}}>
                                <Box style={{textAlign: 'center', lineHeight:'30px',color:'black' , marginTop: '10px'}}><span style={{fontSize: '20px'}}>NITESH SAINI </span><br/>TECHNICAL OFFICER</Box></Grid>
                        </Grid>
</a>
                    </Grid>
              
                    <Grid item style={{background: 'white', height: '450px', width: '220px', borderRadius: '7px', overflow: 'hidden'}} xl={2}>
                        <Grid container>
                            <Grid item style={{overflow: 'hidden'}}><img src={'/assets/exe5.png'} style={{width: '220px'}}/></Grid>
                            <Grid item style={{margin: 'auto', marginTop: '10px',  fontWeight: '600', position: 'relative', top: '-20px', background: 'linear-gradient(180deg, #C2B0D3, white)', height: '50px', width: '100%'}}>
                                <Box style={{textAlign: 'center', lineHeight:'30px', marginTop: '10px'}}><span style={{fontSize: '20px'}}>PALLAV SEMWAL</span><br/>TECHNICAL OFFICER</Box></Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>

        <Footer/>
        </>
    );
}
