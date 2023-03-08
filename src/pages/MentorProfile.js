import React from 'react'
import { Container } from '@mui/system'
import img4 from '../media/img4.png';
import { Grid, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import AppBar from '../components/Appbar';
import img5 from '../media/img5.png';
// import/ Chip from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
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

const MentorProfile = () => {
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
                <div style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,62,121,1) 0%, rgba(0,212,255,1) 100%)', width: '100%', height: '350px' }}> </div>
                <Container maxWidth={'xl'} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box style={{ width: '100%', padding: '0 8% 0 10%' }}>
                        <Box><img style={{ height: '160px', width: '160px', borderRadius: '50%', marginTop: '-130px', marginBottom: '10px', border: 'solid white' }} src='https://cdn.mentorcruise.com/cache/655fc6d9af65bc4d39ee0899e5932800/44564dd6eeae6e54/3b2364bb17e27104316d1fd9e97b4c79.jpg' /></Box>
                        <Grid container columnSpacing={2}>
                            <Grid item lg={8} md={7} >
                                <Box style={{ display: 'flex', paddingBottom: '40px' }}>
                                    <Box style={{ width: '50%' }}>
                                        <h2 style={{ marginBottom: '0px', marginTop: '10px' }}>Edward Murphy <a href="https://www.linkedin.com/in/edwmurph/" target="_blank"><LinkedIn style={{color: 'dodgerblue', fontSize: '18px', position: 'relative', top: '-5px'}} /></a></h2><br/>
                                        <p style={{ marginTop: '0px', fontSize: 'large' }}>Senior Software Engineer (Full Stack) at <b>Starry Internet</b></p>
                                         {/* <h5>LinkedIn: <LinkedIn style={{color: 'dodgerblue', fontSize: '20px', position: 'relative', top: '5px'}} /></h5>
                                        <a style={{ color: 'black' }} target='_blank' href='https://www.linkedin.com/in/edwmurph/'>
                                            https://www.linkedin.com/in/edwmurph/</a> */}
                                        <br></br>
                                        <RouterLink to='/meeting' style={{ textDecoration: 'none' }}>
                                            <Button variant='contained' style={{ marginTop: '20px' }}>Book Now</Button>
                                        </RouterLink>
                                    </Box>
                                    <Box style={{ width: '50%' }}>

                                        <Typography style={{ margin: '4px 8px' }}> Skills</Typography>
                                        <Chip style={{ margin: '4px 8px', fontSize: '14px' }} label="Product Manager" />
                                        <Chip style={{ margin: '4px 8px', fontSize: '14px' }} label="Software" />
                                        <Chip style={{ margin: '4px 8px', fontSize: '14px' }} label="React JS" />
                                        <Chip style={{ margin: '4px 8px', fontSize: '14px' }} label="Team" />
                                        <Button style={{ textTransform: 'none', color: 'black' }}>...More</Button>
                                        <Typography style={{ margin: '4px 8px' }}> Topics</Typography>
                                        <Chip style={{ margin: '4px 8px', fontSize: '14px' }} label="Build A team" />
                                        <Chip style={{ margin: '4px 8px', fontSize: '14px' }} label="Get Accountability" />
                                        <Chip style={{ margin: '4px 8px', fontSize: '14px' }} label="Get a Raise" />
                                        <Chip style={{ margin: '4px 8px', fontSize: '14px' }} label="Team" />
                                        <Button style={{ textTransform: 'none', color: 'black' }}>...More</Button>
                                    </Box>
                                </Box>
                                <hr />
                                <Box style={{ width: '100%', marginTop: '30px', marginBottom: '20px', padding: '30px 0px' }}>
                                    <Typography style={{ fontSize: '20px', fontWeight: '600' }}>About</Typography>
                                    <Typography >I am a full stack web developer who is passionate about JavaScript. I have effective communication skills that help me break down difficult concepts for others to understand. Both our time is valuable and I will work hard to make sure we use each other's time effectively.</Typography>
                                </Box>
                                <hr style={{ color: '#efefef' }} />
                                <Box style={{ padding: '30px 0px' }}>
                                    <Typography style={{ margin: '4px 8px', fontSize: '20px', fontWeight: '600' }}> Skills</Typography>
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />

                                </Box>
                                <Box style={{ padding: '30px 0px' }}>
                                    <Typography style={{ margin: '4px 8px', fontSize: '20px', fontWeight: '600' }}> Topics</Typography>
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />

                                </Box>
                                <Box style={{ padding: '30px 0px' }}>
                                    <Typography style={{ margin: '4px 8px', fontSize: '20px', fontWeight: '600' }}> Groups</Typography>
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Product Manager" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Software" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="React JS" />
                                    <Chip style={{ margin: '4px 8px', fontSize: '16px' }} label="Team" />

                                </Box>
                                <hr />
                                <Box style={{ paddingBottom: '40px' }}>
                                    <Typography style={{ margin: '4px 8px', fontSize: '20px', fontWeight: '600' }}> What Mentees Say</Typography>
                                    <Stack spacing={2} style={{ marginTop: '20px' }}>
                                        <Box>
                                            <Box style={{ display: 'flex' }}>
                                                <AccountCircleIcon style={{ marginTop: '5px', fontSize: '34px' }} />
                                                <Box>
                                                    <span style={{ marginLeft: '10px' }}>Rahul</span>
                                                    <span style={{ marginLeft: '10px', fontSize: 'medium', color: 'grey' }}>on 6th August 2022 </span>
                                                    <Box style={{ marginLeft: '10px' }}>
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Typography style={{ fontSize: '16px' }}>Dominic gave me very clear and actionable advice has a deep understanding of the domain. Highly recommend!</Typography>
                                        </Box>
                                        <Box >
                                            <Box style={{ display: 'flex' }}>
                                                <AccountCircleIcon style={{ marginTop: '5px', fontSize: '34px' }} />
                                                <Box>
                                                    <span style={{ marginLeft: '10px' }}>Rahul</span>
                                                    <span style={{ marginLeft: '10px', fontSize: 'medium', color: 'grey' }}>on 6th August 2022 </span>
                                                    <Box style={{ marginLeft: '10px' }}>
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Typography style={{ fontSize: '16px' }}>Has been great. This definitely helped clear up my concerns about technical challenges with the project I had, but also a lot of valuable insights on how to come up with a marketing plan, content strategy, and now I feel comfortable to execute the plan and move forward</Typography>
                                        </Box>
                                        <Box >
                                            <Box style={{ display: 'flex' }}>
                                                <AccountCircleIcon style={{ marginTop: '5px', fontSize: '34px' }} />
                                                <Box>
                                                    <span style={{ marginLeft: '10px' }}>Rahul</span>
                                                    <span style={{ marginLeft: '10px', fontSize: 'medium', color: 'grey' }}>on 6th August 2022 </span>
                                                    <Box style={{ marginLeft: '10px' }}>
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Typography style={{ fontSize: '16px' }}>Dominic gave me very clear and actionable advice has a deep understanding of the domain. Highly recommend!</Typography>
                                        </Box>
                                        <Box >
                                            <Box style={{ display: 'flex' }}>
                                                <AccountCircleIcon style={{ marginTop: '5px', fontSize: '34px' }} />
                                                <Box>
                                                    <span style={{ marginLeft: '10px' }}>Rahul</span>
                                                    <span style={{ marginLeft: '10px', fontSize: 'medium', color: 'grey' }}>on 6th August 2022 </span>
                                                    <Box style={{ marginLeft: '10px' }}>
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                        <StarRateIcon style={{ fontSize: '18px' }} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Typography style={{ fontSize: '16px' }}>Dominic gave me very clear and actionable advice has a deep understanding of the domain. Highly recommend!</Typography>
                                        </Box>
                                        <Button variant='outlined' style={{ width: '200px', marginTop: '20px' }}>Load More Reviews </Button>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={5}>
                                <Paper elevation={12} style={{ height: '520px', marginLeft: '30px', marginTop: '-300px', width: '410px', position: 'sticky', top: '20%', paddingTop: '15px', borderRadius: '18px', backgroundColor: '#eeeeee', justifyContent: 'center' }}>
                                    <Box sx={{ width: '100%' }} >
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ width: '100%' }}>
                                                <Tab label="Silver" {...a11yProps(0)} style={{ width: "30%", marginLeft: '5%', fontWeight: '' }} />
                                                <Tab label="Gold" {...a11yProps(1)} style={{ width: "30%" }} />
                                                <Tab label="Platinum" {...a11yProps(2)} style={{ width: '30%' }} />
                                            </Tabs>
                                        </Box>
                                        <TabPanel value={value} index={0}>
                                            <Typography style={{ margin: '0px', color: '#084787', fontSize: '30px' }}>Rs 1000</Typography>
                                            <Stack spacing={2}>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: '#429bf5' }} />
                                                    <span style={{ marginLeft: '20px', color: '#1564b3' }}> Up to 2 calls per month</span>
                                                </span>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: '#429bf5' }} />
                                                    <span style={{ marginLeft: '20px', color: '#1564b3' }}> Tasks & exercises</span>
                                                </span>


                                                <center><RouterLink style={{ textDecoration: 'none' }} to='/meeting'><Button variant='contained' style={{ width: '100%', background: '#429bf5' }}>Book An Appointment</Button></RouterLink></center>
                                            </Stack>
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            <Stack spacing={2}>
                                                <Typography style={{ margin: '0px', color: '#084787', fontSize: '30px' }}>Rs 2000</Typography>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: '#429bf5' }} />
                                                    <span style={{ marginLeft: '20px', color: '#1564b3' }}> Up to 3 calls per month</span>
                                                </span>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: '#429bf5' }} />
                                                    <span style={{ marginLeft: '20px', color: '#1564b3' }}> Tasks & exercises</span>
                                                </span>


                                                <center><Button variant='contained' style={{ width: '100%', background: '#429bf5' }}>Book An Appointment</Button></center>
                                            </Stack>
                                        </TabPanel>
                                        <TabPanel value={value} index={2}>
                                            <Stack spacing={2}>

                                                <Typography style={{ margin: '0px', color: '#084787', fontSize: '30px' }}>Rs 3000</Typography>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: '#429bf5' }} />
                                                    <span style={{ marginLeft: '20px', color: '#1564b3' }}> Up to 5 calls per month</span>
                                                </span>
                                                <span style={{ display: 'flex' }}>
                                                    <CheckCircleIcon style={{ color: '#429bf5' }} />
                                                    <span style={{ marginLeft: '20px', color: '#1564b3' }}> Tasks & exercises</span>
                                                </span>


                                                <center><Button variant='contained' style={{ width: '100%', background: '#429bf5' }}>Book An Appointment</Button></center>
                                            </Stack>
                                        </TabPanel>
                                    </Box>

                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
            <Footer />
        </>
    )
}
export default MentorProfile;