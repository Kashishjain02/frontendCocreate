import * as React from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormLabel, Grid, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Box, Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import API from '../api/api';
import { base_url } from '../api/api';

const steps = ['Fill Information '];

export default function Apply() {
  const redirect = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      redirect('/login/');
    }
  })

  const { id } = useParams();
  // Use the extracted 'id' variable as needed
  console.log("id :",id);


    const [about, setAbout] = React.useState('');
    const [goals, setGoals] = React.useState('');
    const [expectations, setExpectations] = React.useState('');
    const [questions, setQuestions] = React.useState('');

    const handleSubmit = () => {
        const data = {};
        const application_url=base_url+`api/apply-for-mentorship/`;
        data.about = about;
        data.goals = goals;
        data.expectations = expectations;
        data.questions = questions;
        data.mentorid = id;
        console.log(data);
        API.post(application_url, data)
            .then((data) => {
                console.log("status",data.status);
                if (data.status == 200) {
                    console.log(data);
                    redirect('/dashboard/');
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

  return (
    <>
      <Container style={{ marginTop: '100px' }} maxWidth={'lg'}>
        <Typography style={{ fontSize: '25px', marginBottom: '20px', fontWeight: '600' }}>Book A Session With the Mentor</Typography>
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
                            onChange={(e) => { setAbout(e.target.value) }}
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
                            onChange={(e) => { setGoals(e.target.value) }}
                            style={{ resize: 'none', height: '80px', overflowY: 'scroll', borderColor: '#bbbbbb', padding:'10px', borderRadius: '5px', fontSize: '16px', width: '100%', fontFamily: 'Roboto', }}
                        />
                    </Box>
                    <Box style={{marginTop:'20px'}}>
                        <InputLabel style={{ maringTop: '20px' }}>What Are Your Expectations from the Meeting?</InputLabel>
                        <TextareaAutosize
                            maxRows={4}

                            aria-label="maximum height"
                            placeholder="Tell The Mentor About Your Expectations "
                            //   defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            //       ut labore et dolore "
                            onChange={(e) => { setExpectations(e.target.value) }}
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
                            onChange={(e) => { setQuestions(e.target.value) }}
                            style={{ resize: 'none', height: '80px', overflowY: 'scroll', borderColor: '#bbbbbb', padding:'10px', borderRadius: '5px', fontSize: '16px', width: '100%', fontFamily: 'Roboto', }}
                        />
                    </Box>
                    <Button
                        onClick={handleSubmit}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    {/* <TextField id="outlined-basic" required type='text' cols='20' rows='10' style={{width:'100%' }} label="Tell The Mentor About You.." width variant="outlined" /> */}
                </form>
            </Box>
        </Container>
      </Container>
    </>
  );
}