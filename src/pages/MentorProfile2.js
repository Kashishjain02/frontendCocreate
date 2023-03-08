import React from 'react'
import { Container } from '@mui/system'
import img4 from '../media/img4.png';
import { Grid, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import AppBar from '../components/Appbar';
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
import Footer from '../components/Footer';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { useState , useEffect} from 'react';
import axios from 'axios';


const data = [
    {
        id: '0',
        name: 'Dr. Andrea Diese',
        desigination: 'Chief Operating Officer',
        description: 'She is a President at American Management and Leadership by Design. She is a renowned leadership coach based out of Washington DC. She is an expert in revenue generation, profitability, and growth as an organization while overseeing the company operations to insure production efficiency, quality, service, and cost-effective management of resources.Among the other things she does, she plans, develops, and implements strategies for generating resources and/or revenues for the company. Identifies acquisition and merger opportunities and direct implementation activities. Approves company operational procedures, policies, and standards. Reviews activity reports and financial statements to determine progress and status in attaining objectives and revise objectives and plans in accordance with current market conditions.',
        LinkedIn: 'https://www.linkedin.com/in/dr-andrea-diese-2568332b',
        img: '/assets/img1.png'
    }
    ,
    {
        id: '1',
        name: 'Abhishek Modak',
        desigination: 'Chief Financial Officer',
        description: "He is a Chartered Accountant & a political consultant. He is presently engaged as a Senior Consultant with India's leading political consulting firm to help them leverage applied data and technology while optimizing budgets.He is an active RTI enthusiast.He formerly worked with PwC India"
        ,
        LinkedIn: 'https://www.linkedin.com/in/amodak',
        img: '/assets/img2.png'
    }
    ,
    {
        id: '2',
        name: 'Neil MacCullum',
        desigination: 'Chief Visionary Officer',
        description: "He is an experienced economist with a passion for sustainable and inclusive development. In 2019. He set up Beaver Economics Limited, a strategic economic and evaluation consultancy based in Scotland. Beaver Economics Limited is a values-based enterprise that prioritizes integrity, equality, humanity, wellbeing, and kindness. This is a deep commitment that goes beyond business, enterprise, and personal gain. He also works as Head of Social Enterprise with Turning Point Scotland and is a Board member of a number of community organizations and charities.In addition, he conducts independent business consulting through Neil MacCallum Associates as well as in collaboration with other companies and business organizations. He has been in different leadership roles on expert committees of OECD initiatives.",
        LinkedIn: 'https://www.linkedin.com/in/neil-maccallum-60b6588',
        img: '/assets/img3.png'
    },
    {
        id: '3',
        name: 'Soham Ghosh',
        desigination: 'Chief Executive Officer',
        description: "Soham is a public policy professional and specializes in public systems and governance. He has worked with various stakeholders in the policymaking and policy implementation ecosystems including projects of Ministries of Govt of India, CSRs, and multilaterals like UNICEF and World Bank.He is also a part of the global community of PDIA researchers and practitioners at the Kennedy School, Harvard University.He currently leads the execution of initiatives as Project Manager at the Centre of Excellence, Law & Technology at IIT-Delhi, a public institute recognized as an institute of national importance by the Govt. Of India.",
        LinkedIn: 'https://www.linkedin.com/in/soham001',
        img: '/assets/img4.png'
    }
    ,
    {
        id: '4',
        name: 'Kumar Subham',
        desigination: 'Chief Strategy Officer',
        description: "Kumar Subham is the Director at Sewa International. He holds a Bachelor’s in Computer Science from IIT Delhi. He has previously worked with various think-tanks and MNCs in the domain of public policy and Ed-Tech/Health-Tech space.He is an avid traveler and has traveled to 150+ districts of India. His interest areas are system design, social impact models, and institutional strategy. He is also the editor of an annual compendium of governance models, Good Governance Compendium.He has previously co-founded Rashtram School of Public Leadership, designed the simulation card game on politics, called Manifesto, and is one of the founding members at Ghonsla Foundation, a non-profit working around promoting handicrafts.",
        LinkedIn: 'https://www.linkedin.com/in/kumar-subham',
        img: '/assets/img5.png'
    }

]

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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://127.0.0.1:8000/api/mentordata/1');
      setData(result.data[0]);
    };
    fetchData();
  }, []);


    const [value, setValue] = React.useState(0);
    // const [cardNum, setCardNum] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const params = useParams();
    console.log(params.id);
    const member = data[params.id];
    console.log(member.img);
    return (
        <>
            <AppBar />
            <div id='mentor_profile' style={{ marginBottom: '50px' }}>
            <Box style={{ background: 'rgba(236, 235, 248, 1)', width: '90%', height: '300px', margin: 'auto'}}> </Box>
                <Container maxWidth={'xl'} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box style={{ width: '100%', padding: '0 8% 0 5%' }}>
                        <img style={{ height: '190px', width: '190px', marginTop: '-130px', borderRadius: '50%',  marginBottom: '10px', border: '5px solid white', boxShadow: '2px 2px 2px lightgray'}} src={Edward}/>
                        
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

                                                <center><RouterLink style={{ textDecoration: 'none' }} to='/meeting'><Button variant='contained' style={{ width: '70%', background: 'rgba(36, 61, 102, 1)' }}>Book An Appointment</Button></RouterLink></center>
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
            <Footer />
        </>
    )
}
export default MentorProfile;