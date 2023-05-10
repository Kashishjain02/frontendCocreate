import React from 'react'
import { Grid, Box, Typography, Button, Chip, Stack, TextField, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import {createTheme} from '@mui/material';
import { IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import StarIcon from '@mui/icons-material/Star';
import StarRateIcon from '@mui/icons-material/StarRate';
import InsightsSharpIcon from '@mui/icons-material/InsightsSharp';
import { Link } from 'react-router-dom';
// import AppBar from '../components/Appbar';
// import Footer from '../components/Footer';
import makeAnimated from 'react-select/animated';
import { useState , useEffect} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
// import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from "@material-ui/core/styles";
import { ListItemIcon } from '@mui/material';
import { MentorCard2 } from '../components/MentorConnect/MentorCard3';
// import Koulen from '../media/fonts/Koulen-Regular.ttf';
import axios from 'axios';
import { base_url } from '../api/api';



  

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: 300
    },
    indeterminateColor: {
        color: "#f50057"
    },
    selectAllText: {
        fontWeight: 500
    },
    selectedAll: {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)"
        }
    },
    pageThemeColor: {
        background: 'linear-gradient(red, blue)'
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    },
    getContentAnchorEl: null,
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "center"
    },
    variant: "menu"
};

const options = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
];
function MentorConnect()  {
    const classes = useStyles();
    const [selected, setSelected] = useState([]);
    const [industry, setIndustry] = useState('');
    const isAllSelected =
        options.length > 0 && selected.length === options.length;

    const handleChange = (event) => {
        const value = event.target.value;
        // if (value[value.length - 1] === "all") {
        //     setSelected(selected.length === options.length ? [] : options);
        //     return;
        // }
        setIndustry(value);
    };

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

    const [MentorData, setData] = useState([]);
    const fetchMentor=base_url+ 'api/mentordata/'
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get(fetchMentor);
        setData(result.data);
        };
        fetchData();
    }, []);
    console.log("#########",MentorData)

   
  
    return (
        <>
            {/* <AppBar /> */}
            <Container maxWidth={'xl'} style={{ marginTop: '-20px', paddingTop: '20px'}}>
                <Box style={{background: '#ECEBF8', width: '100%',  height: '200px'}}></Box>
                
                <Container maxWidth={'lg'}>
                    
                    
                    {/* <ThemeProvider theme={theme}><Typography style={{ marginTop: '100px', fontSize: '40px', fontWeight: '500' }} sx={{fontFamily: 'Koulen' }}>MENTOR CONNECT</Typography></ThemeProvider>
                    <Typography style={{ fontSize: '16px',  marginTop:'20px'}}>Get access to one-on-one mentorship sessions with sector-specific vetted experts from industries ranging from EdTech, healthcare, medtech, clean tech, and others. Cross vertical ones like marketing & branding, legal services, finance & accounts, cloud computing and more.</Typography>
                     */}
                    {/* <TextField
                        variant="standard"
                        placeholder='Search by name or keywords...'
                        InputProps={{
                            startAdornment: (
                            <InputAdornment>
                                <IconButton>
                                <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                            )
                        }}
                        style={{
                            width: '100%',
                            marginTop: '30px',
                            border: 'none'
                        }}

                        sx={{
                            border: 'none'
                        }}
                    />  */}
                    <div style={{display: 'flex', position: 'relative', top: '-30px'}}>
                    <TextField
                        variant="outlined"
                        placeholder='Search by name or keywords...'
                        InputProps={{
                            startAdornment: (
                            <InputAdornment>
                                <IconButton>
                                <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                            )
                        }}
                        style={{
                            width: '60%',
                            margin: 'auto',
                            borderRadius: '5px',
                            background: 'white',
                            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.11)'
                        }}

                        sx={{
                            border: 'none',
                            fontSize: '13px'
                        }}
                    />
                    </div>
                    <Stack direction="row" spacing={3} style={{marginLeft: '10px', justifyContent: 'center'}}>
                        {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
                        {/* <Box>
                            <Typography style={{ marginTop: '35px', color: '#0082AB', fontWeight: '700'}}>Advanced</Typography>
                        </Box> */}
                        <Box style= {{marginTop: '20px'}}>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size= 'small' >
                                <InputLabel id="demo-simple-select-helper-label">Industry</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={industry}
                                label="Industry"
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="10">Ten</MenuItem>
                                <MenuItem value="20">Twenty</MenuItem>
                                <MenuItem value="30">Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box style= {{marginTop: '20px'}}>
                            <FormControl sx={{ m: 1, minWidth: 120}} size= 'small' >
                                <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={industry}
                                label="Industry"
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="10">Ten</MenuItem>
                                <MenuItem value="20">Twenty</MenuItem>
                                <MenuItem value="30">Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box style= {{marginTop: '20px'}}>
                            <FormControl sx={{ m: 1, minWidth: 120}} size= 'small' >
                                <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={industry}
                                label="Industry"
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="10">Ten</MenuItem>
                                <MenuItem value="20">Twenty</MenuItem>
                                <MenuItem value="30">Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                                
                                
                        <Box style= {{marginTop: '20px'}}>
                            <FormControl sx={{ m: 1, minWidth: 120}} size= 'small' >
                                <InputLabel id="demo-simple-select-helper-label">Skills</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={industry}
                                label="Industry"
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="10">Ten</MenuItem>
                                <MenuItem value="20">Twenty</MenuItem>
                                <MenuItem value="30">Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box style= {{marginTop: '20px'}}>
                            <FormControl sx={{ m: 1, minWidth: 120}} size= 'small' >
                                <InputLabel id="demo-simple-select-helper-label">Experience</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={industry}
                                label="Industry"
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="10">Ten</MenuItem>
                                <MenuItem value="20">Twenty</MenuItem>
                                <MenuItem value="30">Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box style= {{marginTop: '20px'}}>
                            <FormControl sx={{ m: 1, minWidth: 120}} size= 'small' >
                                <InputLabel id="demo-simple-select-helper-label">Company</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={industry}
                                label="Industry"
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="10">Ten</MenuItem>
                                <MenuItem value="20">Twenty</MenuItem>
                                <MenuItem value="30">Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    


                    </Stack>
                
            </Container>
            <Container maxWidth={'xl'} style={{padding:'0px 50px'}}>
                <ul>
        {MentorData.map(item => (
            console.log("MentorData",item )
        ))}
      </ul>
            <Grid container style={{justifyContent:'left',marginBottom:'30px', marginTop:'10px'}} rowSpacing={3} spacing={3}>
                {MentorData.map((item)=>{
                    
                    return <Grid item lg={4} md={6} sm={12}> <MentorCard2 mentor={item}/></Grid>
                })}
                    {/* <MentorCard2 /> */}
                {/* <Grid item lg={4} md={6} sm={12}>
                    <MentorCard2 />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <MentorCard2 />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <MentorCard2 />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <MentorCard2 />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <MentorCard2 />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <MentorCard2 />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <MentorCard2 />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <MentorCard2 />
                </Grid> */}
            </Grid>
            </Container>
            <Box style={{width:'100%', marginBottom:'30px', justifyContent:'center', display:'flex'}}>
            <Pagination count={10} variant="outlined" shape="rounded" size='large' />
            </Box>
            {/* <MentorCard /> */}
            </Container>

            {/* <Footer /> */}

        </>
    )
}

export default MentorConnect