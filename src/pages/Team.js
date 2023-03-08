import React from 'react'
import { Container } from '@mui/system'
import img4 from '../media/img4.png';
import { Grid } from '@mui/material';
// import img5 from '../media/img5.png';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkedIn from '@mui/icons-material/LinkedIn';
import AppBar from '../components/Appbar';
import Footer from '../components/Footer';
import { Box, Button } from '@mui/material';
import img5 from '../media/mediaImg/Vector1.png';
import img1 from '../media/img1.png'
import { Link as RouterLink } from 'react-router-dom';
const data = [
    {
        id: '0',
        name: 'Dr. Andrea Diese',
        desigination: 'CHIEF OPERATING OFFICER',
        description: 'She is a President at American Management and Leadership by Design. She is a renowned leadership coach based out of Washington DC. She is an expert in revenue generation, profitability, and growth as an organization while overseeing the company operations to insure production efficiency, quality, service, and cost-effective management of resources.Among the other things she does, she plans, develops, and implements strategies for generating resources and/or revenues for the company. Identifies acquisition and merger opportunities and direct implementation activities. Approves company operational procedures, policies, and standards. Reviews activity reports and financial statements to determine progress and status in attaining objectives and revise objectives and plans in accordance with current market conditions.',
        LinkedIn: 'https://www.linkedin.com/in/dr-andrea-diese-2568332b',
        img: img1
    }

    ,
    {
        id: '1',
        name: 'Neil MacCullum',
        desigination: 'CHIEF VISIONARY OFFICER',
        description: "He is an experienced economist with a passion for sustainable and inclusive development. In 2019. He set up Beaver Economics Limited, a strategic economic and evaluation consultancy based in Scotland. Beaver Economics Limited is a values-based enterprise that prioritizes integrity, equality, humanity, wellbeing, and kindness. This is a deep commitment that goes beyond business, enterprise, and personal gain. He also works as Head of Social Enterprise with Turning Point Scotland and is a Board member of a number of community organizations and charities.In addition, he conducts independent business consulting through Neil MacCallum Associates as well as in collaboration with other companies and business organizations. He has been in different leadership roles on expert committees of OECD initiatives.",
        LinkedIn: 'https://www.linkedin.com/in/neil-maccallum-60b6588',
        img: '/assets/img2.png'

    },
    {
        id: '2',
        name: 'Kumar Subham',
        desigination: 'CHIEF STRATEGY OFFICER',
        description: "Kumar Subham is the Director at Sewa International. He holds a Bachelor’s in Computer Science from IIT Delhi. He has previously worked with various think-tanks and MNCs in the domain of public policy and Ed-Tech/Health-Tech space.He is an avid traveler and has traveled to 150+ districts of India. His interest areas are system design, social impact models, and institutional strategy. He is also the editor of an annual compendium of governance models, Good Governance Compendium.He has previously co-founded Rashtram School of Public Leadership, designed the simulation card game on politics, called Manifesto, and is one of the founding members at Ghonsla Foundation, a non-profit working around promoting handicrafts.",
        LinkedIn: 'https://www.linkedin.com/in/kumar-subham',
        img: '/assets/img3.png'

    }
    ,
    {
        id: '3',
        name: 'Soham Ghosh',
        desigination: 'CHIEF EXECUTIVE OFFICER',
        description: "Soham is a public policy professional and specializes in public systems and governance. He has worked with various stakeholders in the policymaking and policy implementation ecosystems including projects of Ministries of Govt of India, CSRs, and multilaterals like UNICEF and World Bank.He is also a part of the global community of PDIA researchers and practitioners at the Kennedy School, Harvard University.He currently leads the execution of initiatives as Project Manager at the Centre of Excellence, Law & Technology at IIT-Delhi, a public institute recognized as an institute of national importance by the Govt. Of India.",
        LinkedIn: 'https://www.linkedin.com/in/soham001',
        img: '/assets/img4.png'
    }
    ,
    {
        id: '4',
        name: 'Abhishek Modak',
        desigination: 'CHIEF FINANCIAL OFFICER',
        description: "He is a Chartered Accountant & a political consultant. He is presently engaged as a Senior Consultant with India's leading political consulting firm to help them leverage applied data and technology while optimizing budgets.He is an active RTI enthusiast.He formerly worked with PwC India"
        ,
        LinkedIn: 'https://www.linkedin.com/in/amodak',
        img: '/assets/img5.png'
    }

]
export const Team = () => {
    const params = useParams();
    console.log(params.id);
    console.log(data[2])
    const member = data[params.id];
    console.log(member);
    return (
        <>
            <AppBar />
            <div style={{ marginBottom: '50px', padding: '20px' }}>
                <div style={{ background: 'rgba(236, 235, 248, 1)', width: '100%', height: '270px' }}> </div>
                <Container maxWidth={'lg'}>
                    <div>
                        <div style={{width: '170px', height: '170px', margin: 'auto'}}>
                        <img style={{ width: '170px', height: '170px', marginTop: '-130px', marginBottom: '10px', border: '5px solid white', borderRadius: '50%', boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25)'}} src={member.img} />
                        </div>
                        <div>
                            <h2 style={{ fontFamily: 'Koulen', fontSize: '50px', fontWeight: '400', marginTop: '-120px', textAlign: 'center' }}>{member.name}<a target='_blank' href={member.LinkedIn}><LinkedIn style={{color: 'rgba(36, 61, 102, 1)', fontSize: '30px',  position: 'relative', left: '10px'}} /></a></h2>
                            <h3 style={{ marginTop: '-50px', fontSize: '14px', fontFamily: 'Raleway', textTransform: 'capitalize', fontWeight: '800', textAlign: 'center' }}>{member.desigination}</h3>
                            
                            <Grid container style={{ marginLeft: '10px'}}>
                                <Grid item lg={12} md={12} style={{margin: 'auto'}}>
                                    <div style={{ textAlign: 'justify', fontFamily: 'raleway', fontSize: '21px'}}>
                                        <p>
                                            {member.description}
                                        </p>
                                    </div>
                                    {/* <h5>LinkedIn</h5>
                                    <a style={{ color: 'black' }} target='_blank' href={member.LinkedIn}>
                                        {member.LinkedIn}</a> */}
                                </Grid>
                               
                            </Grid>
                        </div>
                    </div>

                </Container>

                {/* <div style={{ display: 'flex', marginTop: "60px", marginBottom: '50px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={img5} />
                    <h2 style={{ fontFamily: 'Koulen', color: '#0082AB', fontSize: '40px', fontWeight: '400' }}>OUR PARTNERS</h2>
                    <img src={img5} />
                </div> */}
                    <br/><br/>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
                        <Typography style={{ textAlign: 'center', margin: '20px', fontWeight: '800', fontSize: '36px'}}>OUR PARTNERS</Typography>
                        <div style={{width: '15vw', height: '5px', background: '#6E61CA'}}></div>
                    </Box>

                    <br/><br/>
                <Container>
                    <Box>

                        <Grid container spacing={2} style={{ justifyContent: 'space-around' }}>
                            <Grid item md={12} style={{ display: 'flex' }} >
                                {data.map((item) => {
                                    if (params.id != item.id) {

                                        return (<Grid container spacing={2} style={{ justifyContent: 'space-around' }}>
                                            <Grid item md={8} >
                                                <RouterLink to={'/team/' + item.id} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
                                                    <h2 style={{ transform: 'rotate(-90deg)', marginLeft: '-160px', marginTop: '30px', fontSize: '18px' }}>{item.desigination}</h2>
                                                    <Box style={{ display: 'flex', marginRight: '0px', marginTop: '-90px', background: 'rgba(236, 235, 248, 1)' }}>
                                                        {/* <img src={img10} /> */}
                                                        <img src={item.img} style={{ paddingLeft: '25px', width: '100%' }} />
                                                    </Box>
                                                    {/* <center><Typography variant='h4' style={{ fontFamily: 'Koulen', color: '#0082AB' }}>DR. ANDREA DIESE</Typography></center> */}
                                                </RouterLink>
                                            </Grid>
                                            <h2 style={{ marginLeft: '30px', fontFamily: 'Koulen', marginTop: '-7px', color: '#6E61CA' }}>{item.name}</h2>
                                        </Grid>)
                                    }
                                })}

                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
            <Footer />
        </>
    )
}
