import React from 'react'
import {Grid,Box, Typography, Button} from '@mui/material';
import { Container } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import StarRateIcon from '@mui/icons-material/StarRate';
import InsightsSharpIcon from '@mui/icons-material/InsightsSharp';
import {Link} from 'react-router-dom';
import AppBar from '../components/Appbar';
import Footer from '../components/Footer';
const MentorConnect = () => {
  return (
    <>
    <Container maxWidth={'lg'} sx={{marginTop:'30px', display:'flex',marginBottom:'40px', justifyContent:'center'}} >
        {/* <center> */}
        <Box style={{ width:'80%', border:'1px solid #CBD5E1', padding:'30px 40px', borderRadius:'10px'}}>
            <Grid  container spacing={1}>
                <Grid item xs={12}  md={2} lg={2} xl={2} style={{height:'100%', padding:'0px'}}>
                <Box   style={{ height:'250px', width:'100%', objectFit:'contain',padding:'0px', overflow:'hidden', borderRadius:'10px'}}>
                    <img 
                    style={{zIndex:'0', height:'100%',width:'180px',transform:'scale(1.4,1)',borderRadius:'20px'}}
                    src='https://cdn.mentorcruise.com/cache/655fc6d9af65bc4d39ee0899e5932800/44564dd6eeae6e54/3b2364bb17e27104316d1fd9e97b4c79.jpg'
                    />
                    {/* <Box style={{width:'100%', height:'50px',zIndex:'1', backgroundColor:'black'}}></Box> */}
                </Box>
                </Grid>
                <Grid item xs={7} style={{ padding:'0px 40px', marginTop:'0px'}} >
                <Box  style={{ display:'flex', justifyContent:'space-between'}}>
                    <Typography style={{ fontSize:'23px', fontWeight:'bold'}}>Edward Murphy</Typography>
                    <Button variant="contained" style={{borderRadius:'20px', backgroundColor:'#08C3A8', fontSize:'12px'}}><StarIcon style={{fontSize:'medium'}}/>Top Mentor</Button>
                </Box>
                <Box style={{marginTop:'10px'}}>Senior Software Engineer (Full Stack) at <b>Starry Internet</b></Box>
                <Box style={{marginTop:'10px',display:'flex', padding:'0px', alignItems:'center'}}>
                <StarRateIcon style={{color:'orange',fontSize:'medium'}}/>
                <StarRateIcon style={{color:'orange', fontSize:'medium'}}/>
                <StarRateIcon style={{color:'orange', fontSize:'medium'}}/>
                <StarRateIcon style={{color:'orange', fontSize:'medium'}}/>
                <StarRateIcon style={{color:'orange', fontSize:'medium'}}/>
                <span style={{fontSize:'small' ,marginLeft:'10px'}}> <b>5.0 </b>(27 reviews)</span>
                </Box>
                <Box style={{textJustify:'center'}}><p>I am a full stack web developer who is passionate about JavaScript. I have effective communication skills that help me break down difficult concepts for others to understand. Both our time is valuable and I will work hard to make sure we use each other's time effectively.</p></Box>
                <Box>
                    <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>JavaScript</Button>
                    <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>NodeJs</Button>
                    <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>React</Button>
                    <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>Angular</Button>
                </Box>
                <Link to='/profile/1' style={{textDecoration:'none'}}>
                <Button variant='contained' style={{textTransform:'none', marginTop:'40px', fontSize:'medium',backgroundColor:'#172E59', fontWeight:'400', padding:'10px 50px', borderRadius:'10px'}}>View Profile</Button>
                </Link>
                {/* <Button variant='contained' style={{textTransform:'none', marginTop:'40px', fontSize:'medium',backgroundColor:'#172E59', fontWeight:'400', padding:'10px 50px', borderRadius:'10px', marginLeft:}}>Book Appointment</Button> */}
                </Grid>
                <Grid item xs={3} style={{ borderLeft:'1px solid rgb(203,213,225, 0.5)', paddingLeft:'40px', paddingTop:'30px'}} >
                <Box  style={{ borderBottom :'1px solid rgb(203,213,225, 0.5)'}}>
                <p style={{fontWeight:'600'}}>What Can I expect from this mentor?</p>
                </Box>
                <Box  style={{ borderBottom :'1px solid rgb(203,213,225, 0.5)', padding:'10px 0px 20px 0px'}}>
                <InsightsSharpIcon style={{margin:'0px', color:'rgb(125,125,125, 1)'}}/> 
                <p style={{fontSize:'14px', marginRight:'1px', margin:'0px', padding:'0px'}}> One of our top mentors, top service & fast responses</p>
                </Box>
                <Box style={{justifyContent:'right',display:'flex'}} ><p>...More</p></Box>
                </Grid>
                </Grid>
        </Box>
        {/* </center> */}
        </Container>
        </>
  )
}

export default MentorConnect