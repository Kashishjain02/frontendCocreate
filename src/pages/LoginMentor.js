import { Container, Box } from '@mui/system'
import React, { useState } from 'react';
import { Grid, Button, Input, InputLabel, OutlinedInput, Divider, Typography } from '@mui/material';
import { Link, useNavigate, Navigate, useParams } from 'react-router-dom';
import API from '../api/api';
import Redirect from 'react-router-dom';

export const LoginMentor = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const h = window.innerHeight;
    const navigate = useNavigate();
    const [isLogged, setLogged] = useState(false);
    const params = useParams();
    let loc = '';
    if (params.id == 1) {
        loc = '/user/signup/1';
    }
    else {
        loc = '/user/signup';
    }
    const login = () => {
        const data = {};
        data.email = email;
        data.password = password;
        data.role = 'user';
        console.log(data);
        API.post('/login/mentor', data)
            .then((data) => {
                console.log(data);
                setMessage(data.data.message);
                if (data.data.success) {
                    console.log(data.data.data);
                    const user = data.data.data;
                    setLogged(true);
                    localStorage.setItem('token', String(data.data.data.token));
                    localStorage.setItem('User', JSON.stringify(user));
                    localStorage.setItem('Role', String(data.data.data.role));
                    localStorage.setItem('mentorID', String(data.data.data._id))
                    console.log(localStorage.getItem('user'));
                    if (params.id == 1) {
                        navigate('/meeting/');
                        window.location.reload();
                    }
                    else {
                        navigate('/Dashboard/Mentor')
                        window.location.reload();
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    const logout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('User', null);
        localStorage.removeItem('mentorID', null);
        window.location.reload();
        console.log("Logout...")
        navigate('/home');

    }
    return (
        <>
            {localStorage.getItem('token') != null ? <>You Are Already Logged IN <Button onClick={logout}>LOG OUT</Button></> :
                <div style={{ background: 'linear-gradient(90deg, rgba(91,84,176,1) 0%, rgba(51,195,172,1) 48%, rgba(0,212,255,1) 95%)' }} >
                    <Container maxWidth={'lg'} style={{ display: 'flex', alignItem: 'center', height: h, alignItems: 'center', justifyContent: 'center' }}>
                        <Box style={{ width: '35%', height: '85%', backgroundColor: 'white', borderRadius: '20px', padding: '40px', alignItems: 'center' }}>
                            <center><Typography style={{ fontFamily: 'dancing script', fontSize: '30px' }}>CoCreate Labs</Typography> </center>
                            <form>
                                <Box style={{ marginTop: '20px' }}>
                                    <InputLabel style={{ marginTop: '20px' }}>Email</InputLabel>
                                    <OutlinedInput sx={{ height: '50px', width: '100%' }} value={email} onChange={(e) => { setEmail(e.target.value) }} style={{ marginTop: '10px' }} type='email' placeholder='email' />
                                </Box>
                                <Box>
                                    <InputLabel style={{ marginTop: '30px' }}>Password</InputLabel>
                                    <OutlinedInput sx={{ height: '50px', width: '100%' }} value={password} onChange={(e) => { setPassword(e.target.value) }} style={{ marginTop: '10px' }} type='password' placeholder='password'></OutlinedInput>
                                </Box>

                                <Button onClick={login} style={{ marginTop: '50px', width: '100%', height: '50px' }} variant='contained'>Login</Button>
                            </form>
                            {message}
                            <h2 style={{ width: '100%', textAlign: 'center', borderBottom: '1px solid #1565C0', lineHeight: '0.1em', margin: '50px 0 20px', fontWeight: '500', color: '#1565C0' }}><span style={{ backgroundColor: 'white' }}>OR</span></h2>
                            <Link to={loc}><Button style={{ marginTop: '50px', width: '100%', height: '50px' }} variant='contained'>Sign Up</Button>
                            </Link>
                        </Box>
                    </Container>
                </div>
            }
        </>
    )
}
