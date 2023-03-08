import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Container, Grid, TextField } from "@mui/material";
import Typewriter from 'typewriter-effect';
import { width } from "@mui/system";
import { blueGrey } from "@mui/material/colors";
import CompanyLogoCarousel from './CompanyLogoCarousel';
import { PopUp } from "./PopUp";
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import VideocamIcon from '@mui/icons-material/Videocam';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Poppins2 from '../media/fonts/Poppins/Poppins-Regular.ttf';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";

export default function Content() {

    const logos = [
        {
            id: 1,
            url: '/assets/logo/shell.png'
        },
        {
            id: 2,
            url: '/assets/logo/tcs.png'
        },
        {
            id: 3,
            url: '/assets/logo/wbg.png'
        },
        {
            id: 4,
            url: '/assets/logo/oecd.png'
        },
        {
            id: 5,
            url: '/assets/logo/netflix.png'
        },
        {
            id: 6,
            url: '/assets/logo/ibm.png'
        },
        {
            id: 7,
            url: '/assets/logo/iitd.png'
        },
        {
            id: 8,
            url: '/assets/logo/harvard.png'
        },
        {
            id: 9,
            url: '/assets/logo/dalberg.png'
        },
    ];



    return (
        <>
            <PopUp />
            <Box style={{ background: 'white', marginTop: '70px' }}>


                <Box style={{ backgroundImage: "url('/assets/bg3.png')", height: '126vh', width: '100vw', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'none', }}>
                    <Grid container>
                        <Container maxWidth={'xl'}>
                            <Grid item md={12} style={{ justifyContent: 'center' }}>
                            
                                <div style={{ marginTop: '100px', justifyContent: 'center' }}>
                                    <p style={{ fontSize: '40px', marginBottom: '0px', fontWeight: '650'}}>1-ON-1 With global experts from
                                    </p>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontSize: '40px', fontWeight: '650', marginTop: "5px", color: '#72439B' }}>
                                            <Typewriter
                                                options={{
                                                    strings: ['Ed-tech', 'Med-Tech', 'Clean Tech', 'Health Tech', 'Supply Chain', 'Marketing & Branding', 'Legal Services', 'Sustainable Fashion', 'Cloud Computing'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </p>
                                        <p style={{ fontSize: '40px', marginTop: '5px', fontWeight: '650'}}>Industry
                                        </p><br></br>
                                        
                                    </div>
                                    <p style={{ fontSize: '15px', width: '45%', marginTop: '-10px', fontFamily: {Poppins2}, fontWeight: 'bold'}}><b>We are a group of professionals spread across the globe from varied backgrounds united by a purpose to curate an integrated platform to democratize access to global expertise and opportunities for start-ups, aspiring entrepreneurs, and non-profits.</b>
                                    </p>
                                </div>
                                {/* </div> */}
                            </Grid>
                        </Container>
                        <br></br>
                        <Grid item md={10} style={{ justifyContent: 'space-around', marginTop: '10px' }}>
                            
                            <Box style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                                
                                <input style={{ width: '300px', height: '20px', border: 'none',  outline: 'none', padding: '15px', fontSize: '16px', borderRadius: '10px'}} placeholder={'Search here...'} />
                                <Button variant='contained' style={{background: '#243D66', fontWeight: '600', marginLeft: '-10px'}}>
                                    Find a Mentor
                                </Button>
                            </Box>

                        </Grid>

                    </Grid>
                    <Container maxWidth="lg" style={{ marginTop: '90px' }}>
                        <center>
                            <Box sx={{ width: '80%', marginTop: '0px', justifySelf: 'center' }}>
                                
                            </Box>
                            
                        </center>

                        
                    </Container>
                </Box>

                <Container maxWidth={'lg'} >
                    <Box style={{background: '#F4F4F4', width: '90%', boxShadow: 'inset 50.8333px -50.8333px 50.8333px rgba(27, 46, 78, 0.059), inset -50.8333px 50.8333px 50.8333px rgba(255, 255, 255, 0.059)', height: 'auto', marginTop: '30px', borderRadius: '5px', width: '100%'}}>
                        <center>
                        <Grid container columnGap={5} rowGap={3} style={{padding: '20px 0 0 20px', height: 'auto' }}>
                            <Grid item md={2} sm={3} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <PublicIcon style={{fontSize: '72px', color: '#72439B'}}/>
                                <p style={{fontSize: '24px', textAlign: 'center', color: '#243D66', fontWeight: '600'}}>50+ countries</p>

                            </Grid>
                            <Grid item md={2} sm={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <SchoolIcon style={{fontSize: '72px', color: '#72439B'}}/>
                                <p style={{fontSize: '24px', textAlign: 'center', color: '#243D66', fontWeight: '600'}}>120+ Institutions</p>

                            </Grid>
                            <Grid item md={2} sm={3} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <ConnectWithoutContactIcon style={{fontSize: '72px', color: '#72439B'}}/>
                                <p style={{fontSize: '24px', textAlign: 'center', color: '#243D66', fontWeight: '600'}}>500+ sessions</p>

                            </Grid>
                            <Grid item md={2} sm={5} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <VideocamIcon style={{fontSize: '72px', color: '#72439B'}}/>
                                <p style={{fontSize: '24px', textAlign: 'center', color: '#243D66', fontWeight: '600'}}>30k+ sessions</p>

                            </Grid>
                            <Grid item md={2} sm={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <WatchLaterIcon style={{fontSize: '72px', color: '#72439B'}}/>
                                <p style={{fontSize: '24px', textAlign: 'center', color: '#243D66', fontWeight: '600'}}>30k+ session hours</p>

                            </Grid>
                        </Grid>
                        </center>
                    </Box>
                </Container>

                <Box style={{ background: 'white', marginTop: '40px' }}>
                    <center>
                        <video width="100%" height="600" autoPlay loop muted src="/assets/v1.mp4" />

                    </center>
                </Box>
                <Box style={{ background: 'white' }}>
                    <center>
                        <Typography variant='h4' style={{ paddingTop: '100px', fontWeight: '800' }}>
                        CONNECT WITH THE LEADERS ACROSS THE <span style={{ color: '#243D66' }}>GLOBE</span>
                        </Typography>
                    </center>
                    <br></br>
                    <CompanyLogoCarousel logos={logos}>
                    </CompanyLogoCarousel>
                </Box>
                {/* <Box style={{ padding: '100px 150px' }}>
                    <Box style={{ backgroundImage: "url('/assets/bg2.png')", height: '90vh', width: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'none' }}>
                        <Grid container style={{ justifyContent: 'center' }}>
                            <Grid item>
                                <Typography variant='h3' style={{ fontFamily: 'koulen', marginTop: '35px', color: '#0082AB' }} >presence in <span style={{ color: 'black' }}>120+</span> countries</Typography>
                            </Grid>
                        </Grid>
                        <Grid container style={{ justifyContent: 'center', marginTop: '40px' }}>
                            <Grid item>
                                <Typography variant='h2' style={{ fontFamily: 'koulen', marginTop: '35px', color: '#0082AB' }} >connected with <span style={{ color: 'black' }}>120+</span>institutions</Typography>
                            </Grid>
                        </Grid>
                        <Grid container style={{ justifyContent: 'space-around', marginTop: '40px' }}>
                            <Grid item>
                                <Typography variant='h3' style={{ fontFamily: 'koulen', marginTop: '35px', }} >3000K+ <span style={{ color: '#0082AB' }}>Sessions</span></Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='h3' style={{ fontFamily: 'koulen', marginTop: '35px' }} >500+  <span style={{ color: '#0082AB' }}>Mentors</span></Typography>
                            </Grid>
                        </Grid>
                        <Grid container style={{ justifyContent: 'center', marginTop: '40px' }}>
                            <Grid item>
                                <Typography variant='h3' style={{ fontFamily: 'koulen', marginTop: '35px' }} >30k+ <span style={{ color: '#0082AB' }}>Sessions hours</span></Typography>
                            </Grid>
                        </Grid>
                    </Box>

                </Box> */}
                <br></br><br></br>
                <Box style={{ marginTop: '60px' }}>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
                        <Typography style={{ textAlign: 'center', margin: '20px', fontWeight: '800', fontSize: '36px'}}>Our Services</Typography>
                        <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
                    </Box>
                    <br></br><br></br>

        
            
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
                </Box>
                <br></br><br></br><br></br><br></br>
            </Box>

            

            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white'}}>
                        <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
                        <Typography style={{ textAlign: 'center', margin: '20px', fontWeight: '800', fontSize: '36px'}}>Get Mentors from Top Categories</Typography>
                        <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
                    </Box>
            
            <div style={{ background: 'white', marginTop: '0px', paddingBottom: '40px' }}>
                <Container maxWidth={'lg'} style={{ backgroundColor: 'white', padding: '10px' }}>
                    <div style={{
                        // marginTop: '60px'
                    }}>
                        
                        <div style={{
                            marginTop: '30px'
                        }}>
                            <Grid container sx={{
                                justifyContent: 'space-between'
                            }}>
                                <Grid item style={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px'}}>
                                    <Card elevation={1} sx={{ maxWidth: 200, display: 'flex', height: '200px', borderRadius: '10px 10px 0 0'}}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="200px"
                                                width="200px"
                                                image="/assets/edtech1.png"
                                                alt="green iguana"
                                            />
                                            <CardContent sx={{ border: 'none' }}>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    <div >
                                        <center><h3 style={{fontWeight: '500'}}>ED-TECH</h3></center>
                                    </div>
                                </Grid>
                                <Grid item  style={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px'}}>
                                    <Card elevation={1} sx={{ maxWidth: 200, display: 'flex', height: '200px', borderRadius: '10px 10px 0 0'}}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="200px"
                                                width="200px"
                                                image="/assets/build-startup.png"
                                                alt="green iguana"
                                            />
                                            <CardContent sx={{ border: 'none' }}>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    <div >
                                        <center><h3 style={{fontWeight: '500'}}>BUILDING STARTUP</h3></center>
                                    </div>
                                </Grid>
                                <Grid item  style={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px'}}>
                                    <Card elevation={1} sx={{ maxWidth: 200, display: 'flex', height: '200px', borderRadius: '10px 10px 0 0' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="200px"
                                                width="200px"
                                                image="/assets/supplychain1.png"
                                                alt="green iguana"
                                            />
                                            <CardContent sx={{ border: 'none' }}>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    <div >
                                        <center><h3 style={{fontWeight: '500'}}>SUPPLY CHAIN</h3></center>
                                    </div>
                                </Grid>
                                <Grid item style={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px'}}>
                                    <Card elevation={1} sx={{ maxWidth: 200, display: 'flex', height: '200px', borderRadius: '10px 10px 0 0' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="200px"
                                                width="200px"
                                                image="/assets/supplychain.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent sx={{ border: 'none' }}>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    <div >
                                        <center><h3 style={{fontWeight: '500'}}>TECH</h3></center>
                                    </div>
                                </Grid>
                                <Grid item style={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px'}} >
                                    <Card elevation={1} sx={{ maxWidth: 200, display: 'flex', height: '200px', borderRadius: '10px 10px 0 0'}}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="200px"
                                                width="200px"
                                                image="/assets/edtech.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent sx={{ border: 'none' }}>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    <div >
                                        <center><h3 style={{fontWeight: '500'}}>INVESTOR</h3></center>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}



