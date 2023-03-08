
import { Grid, Box, Typography, Button } from '@mui/material'
import { borderRadius, Container } from '@mui/system';
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import img1 from '../media/img1.png';
import img2 from '../media/img2.png';
import img3 from '../media/img3.png';
import img4 from '../media/img4.png';
import img5 from '../media/img5.png';
import img6 from '../media/img6.jpg';
import img7 from '../media/img7.jpg';
import img8 from '../media/img8.jpg';
import img9 from '../media/img9.jpg';
import img10 from '../media/img10.jpeg';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppBar from '../components/Appbar';


export const About = () => {
    return (
        <>
            <AppBar />
            <div style={{ marginTop: '100px', justifyContent: 'center', padding: '20px 40px' }}>
                <Box style={{ padding: '50px', background: 'rgb(211 202 202 / 17%)' }}>
                    <center><Typography variant='h4'>About Us</Typography>
                        <Typography variant='subtitle2' style={{ fontSize: '18px', padding: '20px' }}>We are a group of professionals spread across the globe from varied backgrounds united by a purpose to curate an integrated platform to democratize access to global expertise and opportunities for start-ups, aspiring entrepreneurs, and non-profits.
                        </Typography></center>
                </Box>
                <Box style={{ padding: '50px', background: 'rgb(211 202 202 / 17%)', marginTop: '30px' }}>
                    <center><Typography variant='h4'>Our Mission</Typography>
                        <Typography variant='subtitle2' style={{ fontSize: '18px', padding: '15px' }}>Our platform empowers you to chase your dreams and create an impact vis-à-vis 3 verticals of our company: Mentor Connect, Investor Connect & Grants Connect</Typography>
                        <Grid container spacing={3} style={{ display: 'flex', marginTop: '20px' }}>
                            <Grid item md={4}>
                                <Box style={{ padding: '20px', borderRadius: '10px', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgba(75, 173, 239, 0.2) 21.27%, rgba(0, 183, 155, 0.6) 71.28%)' }}>
                                    <img style={{ width: '100%', height: '200px', borderRadius: '10px' }} src='./assets/mentor_connect.jpeg' />
                                    <Typography variant='h5'>Mentor Connect</Typography>
                                    <Typography variant='subtitle2' style={{ fontSize: '16px', padding: '10px', margin: '10px 0px 5px 0px' }}>Get Access to one-on-one mentorship sessions to accelerate your journey with sector-specific vetted experts
                                        from industries ranging from EdTech, healthcare, med tech, clean tech, sustainable fashion, and others as well as cross vertical
                                        ones like marketing & branding, legal services, finance & accounts, cloud computing and more!
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box style={{ padding: '20px', borderRadius: '10px', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgba(75, 173, 239, 0.2) 21.27%, rgba(0, 183, 155, 0.6) 71.28%)' }}>
                                    <img style={{ width: '100%', height: '200px', borderRadius: '10px' }} src='./assets/investor_connect.jpeg' />
                                    <Typography variant='h5'>Investor Connect</Typography>
                                    <Typography variant='subtitle2' style={{ fontSize: '16px', padding: '10px', margin: '15px 0px 52px 0px' }}>  Get Access to Pitch in front of global investors to launch/ scale
                                        up your start-up initiatives thrice in a year taking place in June, October, and January
                                        with investment caps ranging from 10,000 USD- 1.2 M USD.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box style={{ padding: '20px', borderRadius: '10px', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgba(75, 173, 239, 0.2) 21.27%, rgba(0, 183, 155, 0.6) 71.28%)' }}>
                                    <img style={{ width: '100%', height: '200px', borderRadius: '10px' }} src='./assets/grant.jpeg' />
                                    <Typography variant='h5'>Grants Connect</Typography>

                                    <Typography variant='subtitle2' style={{ fontSize: '16px', padding: '10px', margin: '15px 0px 75px 0px' }}>Get Access to grants for your non-profits to scale up and sustain
                                        your social sector initiatives provided they are in alignment with the UN SDGs and
                                        you meet our eligibility criterias.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </center>
                </Box>
                <Box style={{ padding: '50px', background: 'rgb(211 202 202 / 17%)', marginTop: '30px' }}>
                    <center><Typography variant='h4'>Our Team</Typography></center>
                    <Container maxWidth={'lg'}>
                        <Grid container spacing={3} style={{ display: 'flex', marginTop: '20px' }}>
                            <Grid item md={4}>
                                <RouterLink to='/team/0' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Box style={{ padding: '15px 10px', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgb(185 202 214 / 20%) 21.27%, rgb(159 223 213 / 60%) 71.28%)', borderRadius: '10px' }}>
                                        <center>  <Button><RouterLink to='/'><img style={{ height: '130px', width: '130px', borderRadius: '70px', marginTop: '30px', marginBottom: '10px' }} src={img1} /></RouterLink></Button>
                                            <Typography variant='subtitle1' style={{ fontWeight: '700' }}>Dr. Andrea Diese</Typography>
                                            <Typography variant='subtitle2' style={{ fontWeight: '550', marginBottom: '25px' }}> Chief Operating Officer</Typography>
                                            {/* <button style={{ color: 'black', border: '1px solid', borderRadius: '5px', padding: '8px 12px', marginBottom: '15px', background: '#fff' }} >Know More!</button> */}
                                            <Box style={{ marginBottom: '15px' }}>
                                                <Button style={{ color: 'black' }}>{<TwitterIcon />}</Button>
                                                <Button style={{ color: 'black' }}>{<InstagramIcon />}</Button>
                                                <Button style={{ color: 'black' }}>{<LinkedInIcon />}</Button>
                                            </Box>
                                        </center>
                                    </Box>
                                </RouterLink>
                            </Grid>
                            <Grid item md={4}>
                                <RouterLink to='/team/1' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Box style={{ padding: '15px 10px', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgb(185 202 214 / 20%) 21.27%, rgb(159 223 213 / 60%) 71.28%)', borderRadius: '10px' }}>
                                        <center>  <img style={{ height: '130px', width: '130px', borderRadius: '70px', marginTop: '30px', marginBottom: '10px' }} src={img2} />
                                            <Typography variant='subtitle1' style={{ fontWeight: '700' }}>Abhishek Modak</Typography>
                                            <Typography variant='subtitle2' style={{ fontWeight: '550', marginBottom: '25px' }}> Chief Financial Officer</Typography>
                                            {/* <button style={{ color: 'black', border: '1px solid', borderRadius: '5px', padding: '8px 12px', marginBottom: '15px', background: '#fff' }} >Know More!</button> */}
                                            <Box style={{ marginBottom: '15px' }}>
                                                <Button style={{ color: 'black' }}>{<TwitterIcon />}</Button>
                                                <Button style={{ color: 'black' }}>{<InstagramIcon />}</Button>
                                                <Button style={{ color: 'black' }}>{<LinkedInIcon />}</Button>
                                            </Box>
                                        </center>
                                    </Box>
                                </RouterLink>
                            </Grid>
                            <Grid item md={4}>
                                <RouterLink to='/team/2' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Box style={{ padding: '15px 10px', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgb(185 202 214 / 20%) 21.27%, rgb(159 223 213 / 60%) 71.28%)', borderRadius: '10px' }}>
                                        <center>  <img style={{ height: '130px', width: '130px', borderRadius: '70px', marginTop: '30px', marginBottom: '10px' }} src={img3} />
                                            <Typography variant='subtitle1' style={{ fontWeight: '700' }}>Neil MacCullum</Typography>
                                            <Typography variant='subtitle2' style={{ fontWeight: '550', marginBottom: '25px' }}> Chief Visionary Officer</Typography>
                                            {/* <button style={{ color: 'black', border: '1px solid', borderRadius: '5px', padding: '8px 12px', marginBottom: '15px', background: '#fff' }} >Know More!</button> */}
                                            <Box style={{ marginBottom: '15px' }}>
                                                <Button style={{ color: 'black' }}>{<TwitterIcon />}</Button>
                                                <Button style={{ color: 'black' }}>{<InstagramIcon />}</Button>
                                                <Button style={{ color: 'black' }}>{<LinkedInIcon />}</Button>
                                            </Box>
                                        </center>
                                    </Box>
                                </RouterLink>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} style={{ display: 'flex', marginTop: '10px', justifyContent: 'center' }}>
                            <Grid item md={4}>
                                <RouterLink to='/team/3' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Box style={{ padding: '15px 10px', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgb(185 202 214 / 20%) 21.27%, rgb(159 223 213 / 60%) 71.28%)', borderRadius: '10px' }}>
                                        <center>  <img style={{ height: '130px', width: '130px', borderRadius: '70px', marginTop: '30px', marginBottom: '10px' }} src={img4} />
                                            <Typography variant='subtitle1' style={{ fontWeight: '700' }}>Soham Ghosh</Typography>
                                            <Typography variant='subtitle2' style={{ fontWeight: '550', marginBottom: '25px' }}>  Chief Executive Officer</Typography>
                                            {/* <button style={{ color: 'black', border: '1px solid', borderRadius: '5px', padding: '8px 12px', marginBottom: '15px', background: '#fff' }} >Know More!</button> */}
                                            <Box style={{ marginBottom: '15px' }}>
                                                <Button style={{ color: 'black' }}>{<TwitterIcon />}</Button>
                                                <Button style={{ color: 'black' }}>{<InstagramIcon />}</Button>
                                                <Button style={{ color: 'black' }}>{<LinkedInIcon />}</Button>
                                            </Box>
                                        </center>
                                    </Box>
                                </RouterLink>
                            </Grid>
                            <Grid item md={4}>
                                <RouterLink to='/team/4' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Box style={{ padding: '15px 10px', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgb(185 202 214 / 20%) 21.27%, rgb(159 223 213 / 60%) 71.28%)' }}>
                                        <center>  <img style={{ height: '130px', width: '130px', borderRadius: '70px', marginTop: '30px', marginBottom: '10px' }} src={img5} />
                                            <Typography variant='subtitle1' style={{ fontWeight: '700' }}>Kumar Subham</Typography>
                                            <Typography variant='subtitle2' style={{ fontWeight: '550', marginBottom: '25px' }}>Chief Strategy Officer</Typography>
                                            {/* <button style={{ color: 'black', border: '1px solid', borderRadius: '5px', padding: '8px 12px', marginBottom: '15px', background: '#fff' }} >Know More!</button> */}
                                            <Box style={{ marginBottom: '15px' }}>
                                                <Button style={{ color: 'black' }}>{<TwitterIcon />}</Button>
                                                <Button style={{ color: 'black' }}>{<InstagramIcon />}</Button>
                                                <Button style={{ color: 'black' }}>{<LinkedInIcon />}</Button>
                                            </Box>
                                        </center>
                                    </Box>
                                </RouterLink>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
                <Box style={{ padding: '50px', background: 'rgb(211 202 202 / 17%)', marginTop: '30px' }}>
                    <Grid container spacing={3} style={{ display: 'flex', marginTop: '20px' }}>
                        <Grid item md={6}>
                            <center><Typography variant='h5' style={{ marginBottom: '25px' }}>Exceutive Team</Typography></center>
                            <Grid container spacing={3}>
                                <Grid item md={6}>
                                    <Box style={{ background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgb(185 202 214 / 20%) 21.27%, rgb(159 223 213 / 60%) 71.28%)', borderRadius: '10px' }}>
                                        <center>
                                            <img style={{ height: '100px', width: '100px', borderRadius: '70px', marginTop: '10px', marginBottom: '10px' }} src={img6} />
                                            <Typography variant='subtitle1' style={{ fontWeight: '700' }}>Devika Khanna</Typography>
                                            <Typography variant='subtitle2' style={{ fontWeight: '550', marginBottom: '10px' }}>Operations Manager</Typography>
                                            {/* <button style={{ color: 'black', border: '1px solid', borderRadius: '5px', padding: '8px 12px', marginBottom: '15px', background: '#fff' }} >Know More!</button> */}

                                        </center>
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                    <Box style={{ background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgb(185 202 214 / 20%) 21.27%, rgb(159 223 213 / 60%) 71.28%)', borderRadius: '10px' }}>
                                        <center>  <img style={{ height: '100px', width: '100px', borderRadius: '70px', marginTop: '10px', marginBottom: '10px' }} src={img7} />
                                            <Typography variant='subtitle1' style={{ fontWeight: '700' }}>Assia Erraidi</Typography>
                                            <Typography variant='subtitle2' style={{ fontWeight: '550', marginBottom: '15px' }}>PR & Communications Officer</Typography>
                                            {/* <button style={{ color: 'black', border: '1px solid', borderRadius: '5px', padding: '8px 12px', marginBottom: '15px', background: '#fff' }} >Know More!</button> */}

                                        </center>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <center><Typography variant='h5' style={{ marginBottom: '25px' }}>Technical Team</Typography></center>
                            <Grid container spacing={3}>
                                <Grid item md={4}>
                                    <Box style={{ background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgb(185 202 214 / 20%) 21.27%, rgb(159 223 213 / 60%) 71.28%)', borderRadius: '10px' }}>
                                        <center>  <img style={{ height: '100px', width: '100px', borderRadius: '70px', marginTop: '10px', marginBottom: '10px' }} src={img8} />
                                            <Typography variant='subtitle1' style={{ fontWeight: '700' }}>Rajat Goyal</Typography>
                                            <Typography variant='subtitle2' style={{ fontWeight: '550', marginBottom: '15px' }}>Technical Manager</Typography>

                                        </center>
                                    </Box>
                                </Grid>
                                <Grid item md={4}>
                                    <Box style={{ background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgb(185 202 214 / 20%) 21.27%, rgb(159 223 213 / 60%) 71.28%)', borderRadius: '10px' }}>
                                        <center>  <img style={{ height: '100px', width: '100px', borderRadius: '70px', marginTop: '10px', marginBottom: '10px' }} src={img9} />
                                            <Typography variant='subtitle1' style={{ fontWeight: '700' }}>Pallav Semwal</Typography>
                                            <Typography variant='subtitle2' style={{ fontWeight: '550', marginBottom: '15px' }}>Technical Officer</Typography>

                                        </center>
                                    </Box>
                                </Grid>
                                <Grid item md={4}>
                                    <a href="https://www.linkedin.com/in/nitesh-saini-80893b1a0/?originalSubdomain=in" target="_blank">
                                    <Box style={{ background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgb(185 202 214 / 20%) 21.27%, rgb(159 223 213 / 60%) 71.28%)', borderRadius: '10px' }}>
                                        <center>  <img style={{ height: '100px', width: '100px', borderRadius: '70px', marginTop: '10px', marginBottom: '10px' }} src={img10} />
                                            <Typography variant='subtitle1' style={{ fontWeight: '700' }}>Nitesh Saini</Typography>
                                            <Typography variant='subtitle2' style={{ fontWeight: '550', marginBottom: '15px' }}>Technical Officer</Typography>

                                        </center>

                                    </Box>
</a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div >
        </>
    )
}
