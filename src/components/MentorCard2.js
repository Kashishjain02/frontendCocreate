import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
export const MentorCard2 = (props) => {
    console.log(props);
    const about=props.mentor.about;
    const text= about.split('').slice(0,235).join('');
    return (
        <Paper style={{ width: '90%', padding: "20px",height:'380px', borderRadius: '20px', border: '1px solid #CBD5E1' }}>
            <Box  >
                <Stack style={{ alignItems: 'center' }} direction='row'>
                    <Box>
                        <Box style={{ overflow: 'hidden', width: '140px', height: '200px', padding: '0px 0px', borderRadius: '20px', alignItems: 'center', display: 'block' }}>
                            <img
                                style={{ display: 'block', height: '100%', width: '140px', marginTop: '0px', transform: 'scale(1.5,1)' }}
                                src={props.mentor.image} />
                        </Box>
                        <Rating style={{marginTop:'10px'}} name="read-only" value={4} readOnly />
                    </Box>
                    <Box style={{ marginLeft: '20px',height:'290px', width: '60%' }}>
                        <Typography style={{ fontSize: '23px', fontWeight: 'bold' }}>{props.mentor.name}</Typography>
                        <Box style={{ marginTop: '10px' , marginBottom:'0px'}}>{props.mentor.status}</Box>
                        <Box style={{ textJustify: 'center' }}><p>{text}<span>... </span></p></Box>
                    </Box>
                </Stack>
            </Box>
            <Box style={{justifyContent:'space-around', width:'100%'}}>
                {props.mentor.skills.map((item)=>{
                    return <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155',marginLeft:'5px', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>{item}</Button>
                     
                })}
                    {/* <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>NodeJs</Button>
                    <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>React</Button>
                    <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>Angular</Button>
                    <Button variant='contained' disableElevation style={{backgroundColor:'#F1F5F9', color:'#334155', textTransform:'none', borderRadius:'20px', fontSize:'12px' ,fontWeight:'bold', padding:'2px 10px'}}>Angular</Button> */}
            </Box>
            <Box style={{display:'flex'}}>
            <Link to='/profile/1' style={{textDecoration:'none'}}>
            <Button variant='contained' style={{textTransform:'none',marginTop:'10px' ,fontSize:'medium',backgroundColor:'#172E59', fontWeight:'400', padding:'10px 50px', borderRadius:'10px'}}>View Profile</Button>
            </Link>
            </Box>
        </Paper>
    )
}
