import { FormLabel, Grid, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';

export const MeetingInfoUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return (
        <Container maxWidth={'md'}>
            <Box style={{ width: '100%' }}>
                <form>
                    <Box style={{display:'flex'}}>
                    <Box style={{marginRight:'20px'}}>
                        {/* {(user && user.lastName) ? <TextField label="last Name" /> : <></>} */}
                    </Box>
                    <Box >
                        {/* {user.companyName == undefined ? <><TextField label="Company Name" /></> : <></>} */}
                    </Box>
                    </Box>
                    {/* <Grid container > */}
                    <Box style={{marginTop:'20px'}}>
                        <InputLabel style={{ maringTop: '20px' }}>About You</InputLabel>
                        <TextareaAutosize
                            maxRows={4}

                            aria-label="maximum height"
                            placeholder="Tell The Mentor About You "
                            //   defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            //       ut labore et dolore "
                            style={{ resize: 'none', height: '80px', overflowY: 'scroll', borderColor: '#bbbbbb', padding:'10px', borderRadius: '5px', fontSize: '16px', width: '100%', fontFamily: 'Roboto', }}
                        />
                    </Box>
                    <Box style={{marginTop:'20px'}}>
                        <InputLabel style={{ maringTop: '20px' }}>What Are Your Goals</InputLabel>
                        <TextareaAutosize
                            maxRows={4}

                            aria-label="maximum height"
                            placeholder="Tell the Mentor about Your Goals "
                            //   defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            //       ut labore et dolore "
                            style={{ resize: 'none', height: '80px', overflowY: 'scroll', borderColor: '#bbbbbb', padding:'10px', borderRadius: '5px', fontSize: '16px', width: '100%', fontFamily: 'Roboto', }}
                        />
                    </Box>
                    <Box style={{marginTop:'20px'}}>
                        <InputLabel style={{ maringTop: '20px' }}>What Are Your Expectations from the Meeting?</InputLabel>
                        <TextareaAutosize
                            maxRows={4}

                            aria-label="maximum height"
                            placeholder="Tell The Mentor About You "
                            //   defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            //       ut labore et dolore "
                            style={{ resize: 'none', height: '80px', overflowY: 'scroll', borderColor: '#bbbbbb', padding:'10px', borderRadius: '5px', fontSize: '16px', width: '100%', fontFamily: 'Roboto', }}
                        />
                    </Box>
                    <Box style={{marginTop:'20px'}}>
                        <InputLabel style={{ maringTop: '20px' }}>Any Questions about the meeting</InputLabel>
                        <TextareaAutosize
                            maxRows={4}

                            aria-label="maximum height"
                            placeholder="Questions "
                            //   defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            //       ut labore et dolore "
                            style={{ resize: 'none', height: '80px', overflowY: 'scroll', borderColor: '#bbbbbb', padding:'10px', borderRadius: '5px', fontSize: '16px', width: '100%', fontFamily: 'Roboto', }}
                        />
                    </Box>

                    {/* <TextField id="outlined-basic" required type='text' cols='20' rows='10' style={{width:'100%' }} label="Tell The Mentor About You.." width variant="outlined" /> */}
                </form>
            </Box>
        </Container>
    )
}
