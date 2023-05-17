import React from 'react'
import { Container } from '@mui/system'
import img4 from '../media/img4.png';
import { Grid, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
// import AppBar from '../components/Appbar';
import img5 from '../media/img5.png';
import Edward from '../media/Edward.jpg'
// import/ Chip from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Button, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Star from '@mui/icons-material/Star';
import StarRateIcon from '@mui/icons-material/StarRate';
// import Footer from '../components/Footer';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { useState , useEffect} from 'react';
import axios from 'axios';
import { base_url } from '../api/api';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
    console.log("children:", children);

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
//   };

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Scroll = (e) => {

}

function MentorProfile() {
        const [MentorData, setData] = useState([]);
      
const params = useParams();
    console.log(params.id);
    const profile_api = base_url + `api/mentordata/`+ params.id;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(profile_api);
      setData(result.data[0]);
    };
    fetchData();
  }, []);
  console.log("#####",MentorData,profile_api)

    
    const [value, setValue] = React.useState(0);
    // const [cardNum, setCardNum] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
        const profile_pic = base_url + MentorData.image;

    // const member = data[params.id];
    // console.log(member.img);
    return (
        <>
            {/* <AppBar /> */}
            <div id='mentor_profile' style={{ marginBottom: '50px' }}>
            <Box style={{ background: 'rgba(236, 235, 248, 1)', width: '90%', height: '300px', margin: 'auto'}}> </Box>
                <Container maxWidth={'xl'} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box style={{ width: '100%', padding: '0 8% 0 5%' }}>
                        <img style={{ height: '190px', width: '190px', marginTop: '-130px', borderRadius: '50%',  marginBottom: '10px', border: '5px solid white', boxShadow: '2px 2px 2px lightgray'}} src={profile_pic}/>
                        
                        <Grid container columnSpacing={2}>
                            <Grid item lg={7} md={7} >
                                <Box style={{ display: 'flex', paddingBottom: '40px', marginTop: '40px'}}>
                                    <Box style={{ width: '80%' }}>
                                        <h2 style={{ marginBottom: '0px', marginTop: '10px' }}>{MentorData.name} <a href="https://www.linkedin.com/in/edwmurph/" target="_blank"><LinkedIn style={{color: 'dodgerblue', fontSize: '23px',  position: 'relative', top: '4px', left: '5px'}} /></a></h2><br/>
                                        <p style={{ marginTop: '0px', fontSize: 'large' }}>{MentorData.bio}</p>
                                        <br></br>
                                        {/* <RouterLink to='/meeting' style={{ textDecoration: 'none' }}>
                                            <Button variant='contained' style={{ marginTop: '20px', background: '#0082AB' }} size='large'>Book Now</Button>
                                        </RouterLink> */}
                                    </Box>
                                    
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={5}>
                                <Paper elevation={8} style={{ height: '300px', width: '500px', top: '20%', paddingTop: '15px', borderRadius: '18px', backgroundColor: '#eeeeee', justifyContent: 'center', marginTop: '-50px' }}>
                                    <Box sx={{ width: '100%' }} >
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ width: '100%'}} TabIndicatorProps={{style: {background:'rgba(36, 61, 102, 1)'}}}>
                                                <Tab label="Silver" {...a11yProps(0)} style={{ width: "30%", marginLeft: '5%', fontWeight: '' }} />
                                                <Tab label="Gold" {...a11yProps(1)} style={{ width: "30%" }} />
                                                <Tab label="Platinum" {...a11yProps(2)} style={{ width: '30%' }} />
                                            </Tabs>
                                        </Box>
                                        <TabPanel value={value} index={0}>
                                            <Typography style={{ margin: '0px', color: 'rgba(36, 61, 102, 1)', fontSize: '30px' }}>Rs {MentorData.charges_in}</Typography><br/>
                                            <Stack spacing={2}>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: 'rgba(36, 61, 102, 1)' }} />
                                                    <span style={{ marginLeft: '20px', color: '#000' }}> Up to 2 calls per month</span>
                                                </span>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: 'rgba(36, 61, 102, 1)' }} />
                                                    <span style={{ marginLeft: '20px', color: '#000' }}> Tasks & exercises</span>
                                                </span>
                                                <br/>

                                                <center><RouterLink style={{ textDecoration: 'none' }} to={`/apply/${MentorData.mentor}`}><Button variant='contained' style={{ width: '70%', background: 'rgba(36, 61, 102, 1)' }}>Apply for Mentorship</Button></RouterLink></center>
                                            </Stack>
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            <Stack spacing={2}>
                                                <Typography style={{ margin: '0px', color: 'rgba(36, 61, 102, 1)', fontSize: '30px' }}>Rs 2000</Typography>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: 'rgba(36, 61, 102, 1)' }} />
                                                    <span style={{ marginLeft: '20px', color: '#000' }}> Up to 3 calls per month</span>
                                                </span>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: 'rgba(36, 61, 102, 1)' }} />
                                                    <span style={{ marginLeft: '20px', color: '#000' }}> Tasks & exercises</span>
                                                </span>

                                                <br></br>
                                                <center><Button variant='contained' style={{ width: '70%', background: 'rgba(36, 61, 102, 1)' }}>Book An Appointment</Button></center>
                                            </Stack>
                                        </TabPanel>
                                        <TabPanel value={value} index={2}>
                                            <Stack spacing={2}>

                                                <Typography style={{ margin: '0px', color: 'rgba(36, 61, 102, 1)', fontSize: '30px' }}>Rs 3000</Typography>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: 'rgba(36, 61, 102, 1)' }} />
                                                    <span style={{ marginLeft: '20px', color: '#000' }}> Up to 5 calls per month</span>
                                                </span>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: 'rgba(36, 61, 102, 1)' }} />
                                                    <span style={{ marginLeft: '20px', color: '#000' }}> Tasks & exercises</span>
                                                </span>

                                                <br></br>
                                                <center><Button variant='contained' style={{ width: '70%', background: 'rgba(36, 61, 102, 1)' }}>Book An Appointment</Button></center>
                                            </Stack>
                                        </TabPanel>
                                    </Box>

                                </Paper>
                            </Grid>
                        </Grid>
                                <br/><br/>
                                <Box style={{ width: '100%', marginBottom: '20px', marginTop: '-50px'}}>
                                    <Typography style={{ fontSize: '28px', fontWeight: '800' }}>About</Typography><br/>
                                    <Typography style={{fontSize: '18px'}}>{MentorData.about}</Typography>
                                </Box>
                                <Box style={{ padding: '30px 0px' }}>
                                    <Typography style={{ margin: '4px', fontSize: '25px', fontWeight: '700' }}> Skills</Typography><br/>
                                    <Chip style={{ margin: '4px 8px', padding: '10px 10px', fontSize: '16px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', padding: '10px 10px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'}} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Team" />

                                </Box>
                                <Box style={{ padding: '30px 0px' }}>
                                    <Typography style={{ margin: '4px 0', fontSize: '25px', fontWeight: '600' }}> Topics</Typography><br/>
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'}} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Team" />

                                </Box>
                                <Box style={{ padding: '30px 0px' }}>
                                    <Typography style={{ margin: '4px', fontSize: '25px', fontWeight: '600' }}> Groups</Typography><br/>
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'}} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '18px', borderRadius: '5px', background: 'rgba(236, 235, 248, 1)', fontWeight: '500'  }} label="Team" />

                                </Box>
                                <br /><br/><br/>
                                <Box style={{ paddingBottom: '40px' }}>
                                    <Typography style={{ margin: '4px', fontSize: '27px', fontWeight: '600' }}> What Our Mentees Say</Typography>
                                    <Stack spacing={2} style={{ marginTop: '20px' }}>
                                        <Box style={{background: 'rgba(236, 235, 248, 1)', padding: '10px 20px'}}>
                                            <Grid container columnSpacing={2}>
                                                <Grid item><AccountCircleIcon style={{ marginTop: '5px', fontSize: '72px' }} /></Grid>
                                                <Grid item style={{width: '550px', marginLeft: '10px'}}>
                                                    <Typography style={{fontSize: '20px', color: 'rgba(36, 61, 102, 1)', fontWeight: '600'}}>Mentoring and Project Management</Typography><br/>
                                                    <Typography style={{marginTop: '-10px', color: 'rgba(0, 0, 0, 0.54)'}}>“Dominic gave me very clear and actionable advice has a deep understanding of the domain. Highly recommend!”</Typography>
                                                </Grid>
                                                <Grid item style={{marginTop: '30px', fontSize: '18px', width: '200px', color: 'rgba(0, 0, 0, 0.54)'}}>-Cristiana Marie</Grid>
                                                <Grid item style={{marginTop: '20px'}}>
                                                    <Rating style={{marginTop:'10px', marginLeft: '50px'}} name="read-only" value={4} readOnly />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box style={{background: 'rgba(236, 235, 248, 1)', padding: '10px 20px'}}>
                                            <Grid container columnSpacing={2}>
                                                <Grid item><AccountCircleIcon style={{ marginTop: '5px', fontSize: '72px' }} /></Grid>
                                                <Grid item style={{width: '550px', marginLeft: '10px'}}>
                                                    <Typography style={{fontSize: '20px', color: 'rgba(36, 61, 102, 1)', fontWeight: '600'}}>Mentoring and Project Management</Typography><br/>
                                                    <Typography style={{marginTop: '-10px', color: 'rgba(0, 0, 0, 0.54)'}}>“Dominic gave me very clear and actionable advice has a deep understanding of the domain. Highly recommend!”</Typography>
                                                </Grid>
                                                <Grid item style={{marginTop: '30px', fontSize: '18px', width: '200px', color: 'rgba(0, 0, 0, 0.54)'}}>-Jade</Grid>
                                                <Grid item style={{marginTop: '20px'}}>
                                                    <Rating style={{marginTop:'10px', marginLeft: '50px'}} name="read-only" value={4} readOnly />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box style={{background: 'rgba(236, 235, 248, 1)', padding: '10px 20px'}}>
                                            <Grid container columnSpacing={2}>
                                                <Grid item><AccountCircleIcon style={{ marginTop: '5px', fontSize: '72px' }} /></Grid>
                                                <Grid item style={{width: '550px', marginLeft: '10px'}}>
                                                    <Typography style={{fontSize: '20px', color: 'rgba(36, 61, 102, 1)', fontWeight: '600'}}>Mentoring and Project Management</Typography><br/>
                                                    <Typography style={{marginTop: '-10px', color: 'rgba(0, 0, 0, 0.54)'}}>“Dominic gave me very clear and actionable advice has a deep understanding of the domain. Highly recommend!”</Typography>
                                                </Grid>
                                                <Grid item style={{marginTop: '30px', fontSize: '18px', width: '200px', color: 'rgba(0, 0, 0, 0.54)'}}>-Mary Louis</Grid>
                                                <Grid item style={{marginTop: '20px'}}>
                                                    <Rating style={{marginTop:'10px', marginLeft: '50px'}} name="read-only" value={4} readOnly />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box style={{background: 'rgba(236, 235, 248, 1)', padding: '10px 20px'}}>
                                            <Grid container columnSpacing={2}>
                                                <Grid item><AccountCircleIcon style={{ marginTop: '5px', fontSize: '72px' }} /></Grid>
                                                <Grid item style={{width: '550px', marginLeft: '10px'}}>
                                                    <Typography style={{fontSize: '20px', color: 'rgba(36, 61, 102, 1)', fontWeight: '600'}}>Mentoring and Project Management</Typography><br/>
                                                    <Typography style={{marginTop: '-10px', color: 'rgba(0, 0, 0, 0.54)'}}>“Dominic gave me very clear and actionable advice has a deep understanding of the domain. Highly recommend!”</Typography>
                                                </Grid>
                                                <Grid item style={{marginTop: '30px', fontSize: '18px', width: '200px', color: 'rgba(0, 0, 0, 0.54)'}}>-Rahul</Grid>
                                                <Grid item style={{marginTop: '20px'}}>
                                                    <Rating style={{marginTop:'10px', marginLeft: '50px'}} name="read-only" value={4} readOnly />
                                                </Grid>
                                            </Grid>
                                        </Box><br/><br/>
                                        <Button variant='contained' style={{ width: '80%', margin: 'auto', background: 'rgba(36, 61, 102, 1)'}} size="large">View More Reviews </Button>
                                    </Stack>
                                </Box>
                    </Box>
                </Container>
            </div>
            {/* <Footer /> */}
        </>
    )
}
export default MentorProfile;