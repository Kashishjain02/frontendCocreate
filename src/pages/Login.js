import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  { useState } from 'react';
import {  useNavigate, Navigate, useParams } from 'react-router-dom';
import API from '../api/api';
import { base_url } from '../api/api';



const theme = createTheme();

export function SignInSide() {
    const redirect = useNavigate();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLogged, setLogged] = useState(false);
    const params = useParams();

    let loc = '';
    if (localStorage.getItem('token') != null) {
      redirect('/');
      // console.log('HI');
    }
    if (params.id == 1) {
        loc = '/user/signup/1';
    }
    else {
        loc = '/user/signup';
    }
    const login = () => {
        const data = {};
        const login_url=base_url+`api-token-auth/`;
        data.username = email;
        data.password = password;
        data.role = 'user';
        console.log(data);
        API.post(login_url, data)
            .then((data) => {
                console.log("status",data.status);
                setMessage(data.data.message);
                if (data.status == 200) {
                    console.log(data.data);
                    const user = data.data.data;
                    setLogged(true);
                    localStorage.setItem('token', String(data.data.token));
                    // localStorage.setItem('User', JSON.stringify(user));
                    // localStorage.setItem('userID', String(data.data.data._id))
                    // console.log(localStorage.getItem('User'));
                    if (params.id == 1) {
                        navigate('/meeting/');
                        window.location.reload();
                    }
                    else {
                        navigate('/Dashboard/')
                        window.location.reload();
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e) => { setEmail(e.target.value) }}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => { setPassword(e.target.value) }}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                onClick={login}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;