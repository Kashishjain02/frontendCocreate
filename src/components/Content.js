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
            {/* <div style={{ display: 'flex', marginTop: '80px', justifyContent: 'center' }}>
                <p style={{ fontSize: '40px' }}>1-on-1 Session with Global Experts from
                </p>
                <p style={{ fontSize: '40px', marginLeft: '10px', fontWeight: 'bold' }}>
                    <Typewriter
                        options={{
                            strings: ['Ed-tech', 'Med-Tech', 'Clean Tech', 'Health Tech', 'Supply Chain', 'Marketing & Branding', 'Legal Services', 'Sustainable Fashion', 'Cloud Computing'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
                <p style={{ fontSize: '40px' }}>Industry
                </p>
            </div> */}
            {/* <Container maxWidth="lg" style={{ marginTop: '90px' }}>
                <center>
                    <Box sx={{ width: '80%', marginTop: '0px', justifySelf: 'center' }}>
                        <p style={{ textAlign: 'center', fontSize: '30px' }}>
                            Master your craft with leading mentors at your side. Grow with every online mentoring session and take the next step in your career. All on your terms, for a flat monthly price.
                        </p>

                    </Box>
                    <div style={{ width: '100%', alignItems: 'center', background: 'white', padding: '20px 0px', justifyContent: 'left', borderRadius: '10px' }}>
                        <input style={{ width: '70%', height: '40px', border: 'none', outline: 'none', padding: '10px', fontSize: '22px' }} placeholder={'Try "Business" , "Marketing"  '} />
                        <button style={{ padding: '13px', color: 'white', width: '20%', textDecoration: 'bold', background: '#26c98e', borderRadius: '4px', fontSize: '15px', border: 'none' }}>
                            FIND MY MENTOR
                        </button>
                    </div>
                </center>

                <div style={{ justifyContent: 'left', padding: '8px 0px', display: 'block', background: 'rgba(255, 255, 255, 0.6)', width: '102%', borderRadius: '10px', marginTop: '50px' }}>
                    <p style={{ marginLeft: '20px', padding: '5px', color: '#0d0e33', fontWeight: '600', fontSize: '15px' }}>POPULAR SEARCHES</p>
                    <Grid container spacing={5} sx={{
                        justifyContent: 'start', padding: '5px 40px 20px 40px', width: '100%', marginBottom: '10px'
                    }}>
                        <Grid item >
                            <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #08C3A8', opacity: '1', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                <center>JAVASCRIPT MENTORS</center>
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #f0b607', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                <center>PRODUCT MANAGER</center>
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #08C3A8', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                <center>PYTHON MANAGER</center>
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #f0b607', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                <center>MARKETING EXPERT</center>
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #4BADEF', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                <center>  UX DESIGN MENTORS</center>
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #f0b607', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                <center>JAVASCRIPT MENTORS</center>
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #4BADEF', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                <center>JAVASCRIPT MENTORS</center>
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #f0b607', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                <center>JAVASCRIPT MENTORS</center>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </Container> */}
            <Box style={{ background: 'white', marginTop: '70px' }}>


                <Box style={{ backgroundImage: "url('/assets/bg.png')", height: '120vh', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'none', }}>
                    <Grid container>
                        <Container maxWidth={'xl'}>
                            <Grid item md={12} style={{ justifyContent: 'center' }}>
                                {/* <div style={{ display: 'flex', marginTop: '80px', justifyContent: 'center' }}>
                            <p style={{ fontSize: '40px', fontFamily: 'Koulen' }}>  1-on-1 Session with Global Experts
                        </p> */}
                                <div style={{ marginTop: '160px', justifyContent: 'center' }}>
                                    <p style={{ fontSize: '60px', marginBottom: '0px', fontFamily: 'Koulen' }}>1-on-1 Session with Global Experts
                                    </p>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontSize: '60px', fontFamily: 'Koulen', marginTop: "0px" }}>from</p>
                                        <p style={{ fontSize: '60px', marginLeft: '10px', fontWeight: 'bold', marginTop: "5px", color: '#0082AB' }}>
                                            <Typewriter
                                                options={{
                                                    strings: ['Ed-tech', 'Med-Tech', 'Clean Tech', 'Health Tech', 'Supply Chain', 'Marketing & Branding', 'Legal Services', 'Sustainable Fashion', 'Cloud Computing'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </p>
                                        <p style={{ fontSize: '60px', marginTop: '0px', fontFamily: 'Koulen' }}>Industry
                                        </p>
                                    </div>
                                </div>
                                {/* </div> */}
                            </Grid>
                        </Container>
                        <br></br>
                        <Grid item md={10} style={{ justifyContent: 'space-around', marginTop: '10px' }}>
                            {/* <div style={{ display: 'flex', width: '100%', alignItems: 'center', background: 'white', padding: '20px 0px', justifyContent: 'left', borderRadius: '10px' }}>
                            <input style={{ width: '70%', height: '40px', border: 'none', outline: 'none', padding: '10px', fontSize: '22px' }} placeholder={'Try "Business" , "Marketing"  '} />
                            <button style={{ padding: '13px', color: 'white', width: '20%', textDecoration: 'bold', background: '#26c98e', borderRadius: '4px', fontSize: '15px', border: 'none' }}>
                                FIND MY MENTOR
                            </button>
                        </div> */}
                            <Box style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: '20px' }}>
                                {/* <TextField
                                fullWidth
                                style={{
                                    background: 'white',
                                    width: '100%',
                                    height: '49px'
                                }}
                                id="outlined-required"

                                defaultValue='Try  Business , Marketing  '
                            /> */}
                                <input style={{ width: '70%', height: '40px', border: 'none', outline: 'none', padding: '20px', fontSize: '22px' }} placeholder={'Try "Business" , "Marketing"  '} />
                                <Button variant='contained'>
                                    FIND AN EXPERT
                                </Button>
                            </Box>

                        </Grid>

                    </Grid>
                    <Container maxWidth="lg" style={{ marginTop: '90px' }}>
                        <center>
                            <Box sx={{ width: '80%', marginTop: '0px', justifySelf: 'center' }}>


                            </Box>
                            {/* <div style={{ width: '100%', alignItems: 'center', background: 'white', padding: '20px 0px', justifyContent: 'left', borderRadius: '10px' }}>
                            <input style={{ width: '70%', height: '40px', border: 'none', outline: 'none', padding: '10px', fontSize: '22px' }} placeholder={'Try "Business" , "Marketing"  '} />
                            <button style={{ padding: '13px', color: 'white', width: '20%', textDecoration: 'bold', background: '#26c98e', borderRadius: '4px', fontSize: '15px', border: 'none' }}>
                                FIND MY MENTOR
                            </button>
                        </div> */}
                        </center>

                        {/* <div style={{ justifyContent: 'left', padding: '8px 0px', display: 'block', background: 'rgba(255, 255, 255, 0.6)', width: '102%', borderRadius: '10px', marginTop: '50px' }}>
                        <p style={{ marginLeft: '20px', padding: '5px', color: '#0d0e33', fontWeight: '600', fontSize: '15px' }}>POPULAR SEARCHES</p>
                        <Grid container spacing={5} sx={{
                            justifyContent: 'start', padding: '5px 40px 20px 40px', width: '100%', marginBottom: '10px'
                        }}>
                            <Grid item >
                                <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #08C3A8', opacity: '1', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                    <center>JAVASCRIPT MENTORS</center>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #f0b607', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                    <center>PRODUCT MANAGER</center>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #08C3A8', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                    <center>PYTHON MANAGER</center>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #f0b607', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                    <center>MARKETING EXPERT</center>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #4BADEF', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                    <center>  UX DESIGN MENTORS</center>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #f0b607', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                    <center>JAVASCRIPT MENTORS</center>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #4BADEF', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                    <center>JAVASCRIPT MENTORS</center>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ margin: '0px', background: '#172E59', borderRadius: '10px', borderTop: '0.4rem solid #f0b607', width: '102%', padding: '7px 8px', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                    <center>JAVASCRIPT MENTORS</center>
                                </div>
                            </Grid>

                        </Grid>
                    </div> */}
                    </Container>
                </Box>

                <Box style={{ background: 'white', color: '#0082AB', padding: '50px 100px' }}>
                    <center>
                        <Typography variant="body1" style={{ fontSize: '25px', fontFamily: 'raleway' }}>
                            Master your craft with leading mentors at your side. Grow with every online mentoring session and take the next step in your career.  All on your terms, for a flat monthly price.

                        </Typography>
                    </center>
                </Box>
                <Box style={{ background: 'white' }}>
                    <center>
                        <video width="100%" height="600" autoplay src="/assets/v1.mp4" />
                    </center>
                </Box>
                <Box style={{ background: 'white' }}>
                    <center>
                        <Typography variant='h3' style={{ fontFamily: 'Koulen', paddingTop: '100px' }}>
                            Connect with leaders all around the <span style={{ color: '#0082AB' }}>globe</span>
                        </Typography>
                    </center>
                    <br></br>
                    <CompanyLogoCarousel logos={logos}>
                    </CompanyLogoCarousel>
                </Box>
                <Box style={{ padding: '100px 150px' }}>
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

                </Box>
                <Box style={{ marginTop: '80px' }}>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Typography variant='h2' style={{ fontFamily: 'Koulen', marginRight: '150px' }}>SERVICES</Typography>
                        <img src={'/assets/Vector3.png'} style={{ marginRight: '65px' }} />
                    </Box>
                    <br></br><br></br>

                    <br></br>
                    <Container maxWidth={'xl'}>
                        <img src={'/assets/Mentor.png'} style={{ width: '12%', marginBottom: '-320px' }} />
                    </Container>
                    <Box style={{ background: '#e8fffe' }}>
                        <Grid container style={{ alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <Grid item md={4}>
                                    <Grid container>
                                        <Grid item md={10} style={{ justifyContent: 'center' }}>

                                        </Grid>
                                    </Grid>

                                </Grid>
                            </div>
                            <Grid item md={8} style={{ padding: '20px 30px', marginLeft: '300px' }}>
                                <Container>
                                    <Typography variant='h4' style={{ fontFamily: 'Koulen', fontWeight: '800', color: '#0082AB' }}>MENTOR CONNECT</Typography>
                                    <br></br>
                                    <Typography variant='subtitle2' style={{ fontFamily: 'Raleway', lineHeight: '28.8px', fontSize: '21px', textAlign: 'justify' }}> Get access to one-on-one mentorship sessions with sector-specific vetted experts from industries ranging from EdTech, healthcare, medtech, clean tech, and others. Cross vertical ones like marketing & branding, legal services, finance & accounts, cloud computing and more.</Typography>
                                    <br></br><br></br>
                                    <Button variant='contained'>GET YOUR MENTOR NOW</Button>
                                </Container>
                            </Grid>
                        </Grid>
                    </Box>
                    <br></br><br></br>
                    <Box style={{ background: '#e8fffe' }}>
                        <Container maxWidth={'xl'}>
                            <Grid container style={{ alignItems: 'center' }} spacing={0}>
                                <Grid item md={10} >
                                    <Typography variant='h4' style={{ fontFamily: 'Koulen', fontWeight: '800', color: '#0082AB' }}>INVESTOR CONNECT</Typography>
                                    <br></br>
                                    <Typography variant='subtitle2' style={{ fontFamily: 'Raleway', lineHeight: '28.8px', fontSize: '21px', textAlign: 'justify' }}>
                                        {/* Get access to one-on-one mentorship sessions with sector-specific vetted experts from industries ranging from EdTech, healthcare, medtech, clean tech, and others. Cross vertical ones like marketing & branding, legal services, finance & accounts, cloud computing and more.</Typography> */}
                                        Get Access to Pitch in front of global investors to launch/ scale up your start-up initiatives thrice in a year taking place in June, October, and January with investment caps ranging from 10,000 USD- 1.2 M USD.
                                    </Typography>
                                    <br></br><br></br>
                                    <Button variant='contained'>CONNECT WITH A MENTOR</Button>

                                </Grid>
                                <Grid item md={2} style={{ justifyContent: 'left', padding: '0px' }}>
                                    <img src={'/assets/Investor.png'} style={{ width: '120%', float: 'right', }} />

                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <br></br><br></br>
                    <Box style={{ background: '#e8fffe' }}>
                        <Grid container style={{ alignItems: 'center' }}>
                            <Grid item md={4}>
                                <Grid container>
                                    <Grid item md={10} style={{ justifyContent: 'center' }}>
                                        <img src={'/assets/Grants.png'} style={{ width: '80%' }} />

                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item md={8} style={{ padding: '20px 30px' }}>
                                <Typography variant='h4' style={{ fontFamily: 'Koulen', fontWeight: '800', color: '#0082AB' }}>GRANTS CONNECT</Typography>
                                <br></br>
                                <Typography variant='subtitle2' style={{ fontFamily: 'Raleway', lineHeight: '28.8px', fontSize: '21px', textAlign: 'justify' }}>
                                    Get Access to grants for your non-profits to scale up and sustain your social sector initiatives provided they are in alignment with the UN SDGs and you meet our eligibility criterias.
                                </Typography>
                                <br></br><br></br>
                                <Button variant='contained'>APPLY FOR A GRANT</Button>
                                {/* Get access to one-on-one mentorship sessions with sector-specific vetted experts from industries ranging from EdTech, healthcare, medtech, clean tech, and others. Cross vertical ones like marketing & branding, legal services, finance & accounts, cloud computing and more.</Typography> */}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            {/* <div style={{ display: 'flex' }}>
                <img src={'/assets/shape-blue.svg'} style={{ position: 'absolute', top: '60px', transform: 'rotate(180deg)', right: '0px', width: '4%', marginBottom: '-400px' }} />
            </div>
            <div style={{ display: 'flex' }}>
                <img src={'/assets/shape-blue.svg'} style={{ width: '5%', position: 'absolute', top: '450px', left: '0px' }} />
            </div>
            <div className="img">
                <Container >
                    <img src={'/assets/homehero_2x.webp'} style={{ width: '100%', marginTop: '20px' }} />
                </Container>

            </div> */}



            {/* <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
            }}> */}
            {/* </div> */}
            {/* <div style={{
                marginTop: '60px', background: '#172E59', padding: '100px'
            }}>
                <center>
                    <div style={{ width: '55%' }}>
                        <h4 style={{ color: 'white', margin: '15px 0px 0px 0px ', fontSize: '50px' }}>At your fingertips: a dedicated career coach</h4>
                        <p style={{ color: 'white', fontSize: '25px', marginBottom: '90px' }}>Want to ace your next job interview? Successfully build your startup? Itching to learn high-demand skills? Work smart with an online mentor or coach by your side to offer expert advice and guidance to match your zeal. Become unstoppable using CoCreate Labs.</p>
                    </div>
                </center>
                <Container maxWidth={'xl'} >
                    <Box style={{ padding: '0px 50px 50px 50px', background: 'none', marginTop: '0px' }}>
                        <center>
                            <Grid container spacing={3} style={{ display: 'flex', marginTop: '20px' }}>
                                <Grid item md={4}>
                                    <Box style={{ height: '500px', padding: '20px', borderRadius: '10px', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgba(75, 173, 239, 0.2) 21.27%, rgba(0, 183, 155, 0.6) 71.28%)' }}>
                                        <img style={{ width: '100%', height: '200px', borderRadius: '10px' }} src='./assets/mentor_connect.jpeg' />
                                        <Typography variant='h5' style={{ color: 'white' }}>Mentor Connect</Typography>
                                        <Typography variant='subtitle2' style={{ color: 'white', fontSize: '16px', padding: '10px', margin: '10px 0px 5px 0px' }}>Get Access to one-on-one mentorship sessions to accelerate your journey with sector-specific vetted experts
                                            from industries ranging from EdTech, healthcare, med tech, clean tech, sustainable fashion, and others as well as cross vertical
                                            ones like marketing & branding, legal services, finance & accounts, cloud computing and more!
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={4}>
                                    <Box style={{ height: '500px', padding: '20px', borderRadius: '10px', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgba(75, 173, 239, 0.2) 21.27%, rgba(0, 183, 155, 0.6) 71.28%)' }}>
                                        <img style={{ width: '100%', height: '200px', borderRadius: '10px' }} src='./assets/investor_connect.jpeg' />
                                        <Typography variant='h5' style={{ color: 'white' }}>Investor Connect</Typography>
                                        <Typography variant='subtitle2' style={{ color: 'white', fontSize: '16px', padding: '10px', margin: '15px 0px 52px 0px' }}>  Get Access to Pitch in front of global investors to launch/ scale
                                            up your start-up initiatives thrice in a year taking place in June, October, and January
                                            with investment caps ranging from 10,000 USD- 1.2 M USD.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={4}>
                                    <Box style={{ height: '500px', padding: '20px', borderRadius: '10px', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgba(75, 173, 239, 0.2) 21.27%, rgba(0, 183, 155, 0.6) 71.28%)' }}>
                                        <img style={{ width: '100%', height: '200px', borderRadius: '10px' }} src='./assets/grant.jpeg' />
                                        <Typography variant='h5' style={{ color: 'white' }}>Grants Connect</Typography>

                                        <Typography variant='subtitle2' style={{ color: 'white', fontSize: '16px', padding: '10px', margin: '15px 0px 75px 0px' }}>Get Access to grants for your non-profits to scale up and sustain
                                            your social sector initiatives provided they are in alignment with the UN SDGs and
                                            you meet our eligibility criterias.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </center>
                    </Box>
                    <center>
                        <Button variant="outlined" style={{ color: '#fff', marginRight: '20px', border: '2px solid rgb(9 128 129)' }}>
                            FIND MY MENTOR
                        </Button>
                        <Button variant="contained" style={{ background: 'rgb(9 128 129)' }}>
                            Become A Mentor
                        </Button>
                    </center>
                </Container>
            </div> */}
            <div style={{ background: 'white', marginTop: '0px', paddingBottom: '40px' }}>
                <Container maxWidth={'lg'} style={{ backgroundColor: 'white', padding: '10px' }}>
                    <div style={{
                        marginTop: '60px'
                    }}>
                        <h2 style={{
                            marginBottom: '0px'
                        }}>
                            Book A Session With the Top Mentor
                        </h2>
                        <p>
                            Find top Mentors and Launch your Startup
                        </p>
                        <div style={{
                            marginTop: '60px'
                        }}>
                            <Grid container sx={{
                                justifyContent: 'space-between'
                            }}>
                                <Grid item  >
                                    <Card elevation={1} sx={{ maxWidth: 200, display: 'flex', height: '200px', borderRadius: '10px', }}>
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
                                        <center><h3>Ed-Tech</h3></center>
                                    </div>
                                </Grid>
                                <Grid item  >
                                    <Card elevation={1} sx={{ maxWidth: 200, display: 'flex', height: '200px', borderRadius: '10px', }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="200px"
                                                width="200px"
                                                image="/assets/medtech.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent sx={{ border: 'none' }}>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    <div >
                                        <center><h3>Med-Tech</h3></center>
                                    </div>
                                </Grid>
                                <Grid item  >
                                    <Card elevation={1} sx={{ maxWidth: 200, display: 'flex', height: '200px', borderRadius: '10px', }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="200px"
                                                width="200px"
                                                image="/assets/health.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent sx={{ border: 'none' }}>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    <div >
                                        <center><h3>Health</h3></center>
                                    </div>
                                </Grid>
                                <Grid item  >
                                    <Card elevation={1} sx={{ maxWidth: 200, display: 'flex', height: '200px', borderRadius: '10px', }}>
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
                                        <center><h3>Supply Chain</h3></center>
                                    </div>
                                </Grid>
                                <Grid item  >
                                    <Card elevation={1} sx={{ maxWidth: 200, display: 'flex', height: '200px', borderRadius: '10px', }}>
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
                                        <center><h3>Tech</h3></center>
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



