import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Container, Grid, TextField } from "@mui/material";
import Typewriter from 'typewriter-effect';
import { width } from "@mui/system";
import { blueGrey } from "@mui/material/colors";
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import VideocamIcon from '@mui/icons-material/Videocam';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";

const MockDash = () => {
    return (
        <Container maxWidth={'xl'} style={{background: 'yellow', width: '100%', padding: '0'}}>
            <Grid container style={{width: '100%', height: '500px', background: 'red'}}>
                <Grid item xs={3} >
                    <div style={{background: 'rgba(36, 61, 102, 1)', width: '100%', height: '500px'}}>
                        <Box style={{ }}>
                            <center>
                        <img src={'/assets/logo2.png'} style={{height: '60px', marginTop: '20px'}}/></center></Box>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div style={{background: '#f3f3f3', width: '100%', height: '500px'}}></div>
                </Grid>
            </Grid>
        </Container>

        //  <Box style={{background: 'rgba(36, 61, 102, 1)', height: '500px', width: '100%'}}>
        
        //  </Box>
    );
}

export default MockDash;