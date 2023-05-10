import React from 'react'
import { Grid, Box, Button, Typography, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
// import Koulen from '../media/fonts/Koulen-Regular.ttf';
import {createTheme} from '@mui/material';


export const MentorCard2 = (props) => {

    const profile_link = `/profile/${props.mentor.mentor}`;
    console.log(props.mentor.image);
    const profile_pic = `http://127.0.0.1:8000${props.mentor.image}`;
    const theme = createTheme({
        // typography: {
        //   fontFamily: 'Koulen, cursive',
        // },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
              @font-face {
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
            `,
          },
        },
      });
    
    const about=props.mentor.about;
    const text= about.split('').slice(0, 180).join('');
    return (
        <Paper style={{ width: '361px',height:'530px', border: '1px solid #CBD5E1', backgroundColor: 'white' }} sx={{borderRadius: '20px'}}>
            
            <Grid container columnGap={1} style={{background: 'rgba(36, 61, 102, 1)', width: '100%', borderRadius: '5px 5px 0 0', height: '140px'}}>
                <Grid item xs={4} style={{display: 'flex', justifyContent: 'center', position: 'relative', top: '80px'}}>
                  <img
                        style={{ display: 'block', height: '70px', width: '70px', marginTop: '0px', borderRadius: '50%', border: '5px solid white', boxShadow: '1px 2px 2px gray'}}
                        src={profile_pic} />
                </Grid>
                <Grid item xs={7} style={{marginTop: '10px', marginBottom: '10px', height: '80px', color: 'white', position: 'relative', top: '50px'}}>
                    <ThemeProvider theme={theme}><Typography style={{ fontSize: '25px'}}>{props.mentor.name}</Typography></ThemeProvider>
                    <Typography style={{ fontSize: '16px'}}>{props.mentor.company},{props.mentor.designation}</Typography>
                </Grid>
            </Grid>
            <Box style={{justifyContent:'space-around', width:'100%', height: '100px', marginTop: '30px', padding: '10px'}}>
                <Typography style={{ fontWeight: 'bold', marginLeft: '5px', marginBottom: '5px' }}>Expertise</Typography>
                {props.mentor.interests.skills.map((item)=>{
                    return <Button variant='contained' disableElevation style={{backgroundColor:'rgba(236, 235, 248, 1)', color:'black', marginTop:'5px', marginLeft:'10px', textTransform:'none', border: 'none',  borderRadius:'4px', fontSize:'14px', fontWeight: '600', padding:'2px 10px'}}>{item}</Button>
                     
                })}
                    {/* <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>NodeJs</Button>
                    <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>React</Button>
                    <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>Angular</Button>
                    <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>Angular</Button> */}
            </Box>

            <Box style={{ textJustify: 'center', height: '120px',padding: '0 15px' }}>
              <p><span style={{fontSize: '17px', fontWeight: 'bold'}}>BIO</span> <br/>{text}<span>... </span></p>
            </Box>

            <Box style={{display:'flex', justifyContent: 'center'}}>
                <Link to={profile_link} style={{textDecoration:'none'}}>
                <Button variant='contained' size="large" style={{textTransform:'none',marginTop:'20px' ,fontSize:'medium',backgroundColor:'#172E59', fontWeight:'400', padding:'10px 50px', borderRadius:'10px', maxWidth: "400px", minWidth: '300px' }} >View Profile</Button>
                </Link>
            </Box>
            <Box style={{width: '100%', position: 'relative', top: '-340px', left: '231px'}}>
                <Rating style={{marginTop:'-55px',  padding: '5px', background: 'rgba(36, 61, 102, 1)', borderRadius: '0 0 0 10px',transform: 'translateY(-5px)'}} name="read-only" value={4} readOnly />
            </Box>
        </Paper>
    )
}
