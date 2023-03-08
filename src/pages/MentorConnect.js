import React from 'react'
import { Grid, Box, Typography, Button, Chip, Stack } from '@mui/material';
import { Container } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import StarRateIcon from '@mui/icons-material/StarRate';
import InsightsSharpIcon from '@mui/icons-material/InsightsSharp';
import { Link } from 'react-router-dom';
import AppBar from '../components/Appbar';
import Footer from '../components/Footer';
import makeAnimated from 'react-select/animated';
import MentorCard from '../components/MentorCard';
import { useState } from 'react';
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
// import { MentorCard2 } from '../components/MentorCard2';
import { MentorCard2 } from '../components/MentorCard2';
const Mentors=[
    {
        name:'Earl Friedberg',
        status:'UX Lead, Gmail @ Google',
        about:"👋 Hi!!! I run the UX teams for Gmail @ Google, based out of San Francisco.I also teach at UC Berkeley.I help designers break into tech giants like Google.I have a strong track record helping 50+ mentees land UX jobs, mostly in big tech.I focus on being inquisitive, tailored to you, and above all collaborative. When you leave sessions, you'll know exactly what to do next and why.As a mentor, I can help you:- Navigate a career change into ux, user research, content strategy or visual design- Create a compelling portfolio and case study presentation - Prepare for whiteboard challenges and take-home exercises - Build a hiring strategy, prepare for interviews, resume and LinkedIn profile As a mentee, you’ll have hands on support from me. Our first call entails going through a career worksheet. From there, I'll dive in with written notes and a structured plan. You’ll have a free introductory call to make sure my mentorship is the right fit! I'm super passionate about giving back, and shaping the future community of UX designers. Let's connect! Inquiries: email@earlf.com LinkedIn: http://linkedin.com/in/earlf",
        image:'https://cdn.mentorcruise.com/cache/f003265da011dc09fa3e584e898d5886/ce7ce5231b5b4e7f/5d69fc153d342c9fff96de3bcfead222.jpg',
        skills:['ux' ,'Design', 'user', 'Research', 'Visual']
    },
    {
        name:'Dominic Monn',
        status:'Founder @ MentorCruise',
        about:`Hey all 🤗

        Thanks for stopping by here at MentorCruise.com. I created this community of mentors! As the business has reached $1M in GMV this year, I decided to take the leap to go full-time on this bootstrapped business and lead our small team to new heights.
        
        I offer mentorship in a wide variety of topics. I am happy to help out if you are looking to run a marketplace, if you want to learn more about running and scaling a startup, running your own bootstrapped business, building side-projects, being a technical founder or leadership.
        
        Can't wait to hear from you 👋`,
        image:'https://cdn.mentorcruise.com/cache/99216cb5eb4067e9e934becf34b13aa1/91e9dbad3759bbf1/baa3e05c4bc0d54139d32d47274f393a.jpg',
        skills:['Product' ,'Marketplace' ,'Entrepreneurship' ,'SEO' ,'Sales']
    },
    {
        name:'Daniel Johnson ',
        status:'Founding Partner at We Scale Startups',
        about:`I help early-stage startups and businesses grow using data-driven growth marketing to build scalable, predictable and repeatable machines that scale revenue and customer acquisition activities. Having played the roles of founder, employee and consultant, I have a unique perspective on what businesses need to grow. With extensive experience in getting …`,
        image:'https://cdn.mentorcruise.com/cache/efb2efb5985495b33f544ebfadf516fc/1924ee6ccc2361fb/70da5331984b5279c4bf37e24f2efc15.jpg',
        skills:['Product & Marketing' ,'Growth' ,'Strategy' ,'Paid Ads' ,'Product']
    },
    {
        name:'Vlad Ilchenko ',
        status:'Senior Product Manager at Walmart eCommerce',
        about:`Welcome! If you are looking to break into product management or want to give a competitive edge to your career, continue reading :) I have been coaching aspiring PMs since 2017 and if you are looking to either get the professional fundamentals or deepen your PM skills of every aspect`,
        image:'https://cdn.mentorcruise.com/cache/05ce28a3a9776b5253b84997caa580df/c7ba5db2e463ca66/8c46210c93fe4f6844e6e07a0b3b9167.jpg',
        skills:['Product & Marketing' ,'eCommerce' ,'Design' ,'Paid Ads']
    },
    {
        name:'Agnieszka Wojtkun',
        status:'Data-driven Digital Marketing Consultant at agnieszkawojtkun.com',
        about:`Hi there 🙋🏻‍♀️ I am Agnieszka and I am a data-driven digital marketing professional with sound knowledge of e-mail marketing, marketing automation & e-commerce. I've grown businesses in the digital space for 10+ years. I've gained my experience working in an advertising agency and through a long-term, exclusive close cooperation …`,
        image:'https://cdn.mentorcruise.com/cache/447f2b9b93b6c57d5c53376ca2baab9b/45b892ec615c0f67/0339d08a74aaceb750abc7a6e6c37bfe.jpg',
        skills:['Product & Marketing' ,'Marketing Automation' ,'digital Marketing']
    },
    {
        image: "https://cdn.mentorcruise.com/cache/e5ff4e61ea9388228cf28d18e19b0e9c/a23ee4155a67b2ba/f8778e63a54028bcebd1661ef51d3efd.jpg",
        name: "Beulah Stephenson",
        status: "Works at ISOSURE",
        about: "Enim mollit esse id fugiat exercitation do aliquip culpa cillum veniam anim occaecat et in. Non ut ullamco consectetur quis incididunt pariatur excepteur. Voluptate deserunt pariatur qui nulla nulla pariatur sit nulla laboris consequat incididunt proident amet irure. Sint est adipisicing non dolor ipsum. Consequat Lorem laboris pariatur voluptate ex sunt elit occaecat in tempor pariatur sint aliqua et. Incididunt reprehenderit occaecat qui consequat veniam aliquip.\r\n",
        skills: [
          "et",
          "irure",
          "irure",
          "exercitation",
          "pariatur"
        ]
      },
      {
        image: "https://cdn.mentorcruise.com/cache/85cfa0b1c0422c8994c1530a420d3bf7/eacbffaf3491a8f2/ae404bb4f215a5fd39e94d4660f97e57.jpg",
        name: "Kerr Watkins",
        status: "Works at VIAGRAND",
        about: "Ullamco magna exercitation aliqua occaecat nulla sit fugiat minim dolor proident non Lorem commodo. Consectetur esse quis quis ipsum sunt sint ipsum. Consequat labore deserunt elit tempor nisi.\r\n",
        skills: [
          "fugiat",
          "exercitation",
          "enim",
          "qui",
          "labore"
        ]
      },
      {
        image: "https://cdn.mentorcruise.com/cache/d015f0d728fc7cd48cfd657d04ca70f7/09cb85da8cdf21d9/bd506cfaf78cf8e64b47faa719542e37.jpg",
        name: "Angelia Trujillo",
        status: "Works at RUGSTARS",
        about: "Id magna ut enim aliquip et est non ipsum sunt ex ipsum magna sunt magna. Consectetur consequat officia non et. Sit aliqua duis proident culpa labore proident nisi. Voluptate mollit incididunt duis aute exercitation minim ad. Cillum enim sunt enim duis sint veniam dolor reprehenderit labore laboris tempor dolore Lorem. Id adipisicing aliqua Lorem Lorem laborum.\r\n",
        skills: [
          "ea",
          "amet",
          "cillum",
          "pariatur",
          "deserunt"
        ]
      },
      {
        image: "https://cdn.mentorcruise.com/cache/b31382b2c4a843e9b846be74e13dbbd9/35da9752c5f3e490/1cc39ffd758234422e1f75beadfc5fb2.jpg",
        name: "Lyons Rosales",
        status: "Works at PLAYCE",
        about: "Pariatur tempor magna eu adipisicing non quis voluptate nostrud ea reprehenderit ex est ea proident. Elit laboris ullamco mollit aliqua do eiusmod anim. Dolore ut occaecat deserunt aliquip laboris. Deserunt consectetur excepteur dolor tempor incididunt ea eu et elit cupidatat eu. Consequat officia irure ullamco laborum ipsum Lorem adipisicing cillum aliquip nisi quis. Reprehenderit excepteur voluptate est laboris fugiat mollit fugiat enim id Lorem. Sit consequat in consectetur et veniam eu cupidatat elit non do.\r\n",
        skills: [
          "occaecat",
          "laborum",
          "eu",
          "id",
          "pariatur"
        ]
      },
      {
        image: "https://cdn.mentorcruise.com/cache/a046713be476d1d9f22e26ddd703bdd9/fe32ea50ecbca312/568f003a1e9cba1660cdf4509baae68d.jpg",
        name: "Hoffman Hurley",
        status: "Works at VISUALIX",
        about: "Excepteur irure occaecat ullamco ex non dolor. Consequat ullamco voluptate culpa ullamco. Lorem non sint in reprehenderit magna magna. Proident labore incididunt ipsum non est in consectetur anim aute aliqua. Velit cillum deserunt excepteur ullamco ipsum nostrud id ex aute exercitation ex mollit anim et.\r\n",
        skills: [
          "commodo",
          "sint",
          "irure",
          "non",
          "reprehenderit"
        ]
      },
      {
        image: "https://cdn.mentorcruise.com/cache/6bad81d04fb5d2a35c6fd465b1810ec6/dbc55e0e9e3c4056/1a5e49e2e14875def812bdaa77154e9b.jpg",
        name: "Schroeder Chase",
        status: "Works at CUBIX",
        about: "Cupidatat adipisicing do sint ex ea exercitation. Culpa incididunt voluptate ad deserunt adipisicing labore est in est ex cupidatat. Laborum velit cupidatat aliqua ipsum mollit culpa veniam deserunt duis ex. Sit reprehenderit voluptate eiusmod sit ea mollit cupidatat proident exercitation tempor consequat do sunt. Irure aute et est nisi non elit mollit sunt aliqua cillum nulla officia ad incididunt.\r\n",
        skills: [
          "consectetur",
          "proident",
          "id",
          "voluptate",
          "ex"
        ]
      },
      {
        image: "https://cdn.mentorcruise.com/cache/6f25b4d49d6444952a6519c3143273ca/ba19b38a8db32ac5/fad45720eb7ce7e8aabff5487a04ed06.jpg",
        name: "Sophia Blake",
        status: "Works at COMBOGEN",
        about: "Do mollit cupidatat deserunt velit ex esse reprehenderit voluptate incididunt culpa non. Do nostrud cillum tempor quis cillum veniam laboris laborum eiusmod velit. Aliqua et laboris ipsum eu id sint est officia sit occaecat labore est magna. Aute labore ipsum deserunt deserunt. Velit eiusmod dolore adipisicing occaecat aute exercitation excepteur nostrud fugiat. Ipsum non do enim Lorem in cillum anim enim exercitation occaecat ex pariatur aliquip.\r\n",
        skills: [
          "eiusmod",
          "eiusmod",
          "consectetur",
          "enim",
          "reprehenderit"
        ]
      },
      {
        image: "https://cdn.mentorcruise.com/cache/5250ba6f1e548b0c3b730c66067e983b/81d2cbc76f1a9f8a/094b249dfe2b76ceba6986b7d1e752a6.jpg",
        name: "Blevins Neal",
        status: "Works at ROCKLOGIC",
        about: "Et dolore nostrud mollit officia. Exercitation voluptate reprehenderit aliquip ullamco elit laborum quis cupidatat voluptate laboris. Dolor amet id deserunt nulla in. Aute anim voluptate reprehenderit ut commodo.\r\n",
        skills: [
          "quis",
          "voluptate",
          "pariatur",
          "fugiat",
          "nulla"
        ]
      },
      {
        image: "https://cdn.mentorcruise.com/cache/2038182b15b6df0fc1c938109b2fd05e/ac8db59140cb3f3a/9c76a788aaf0c0c42c5b92ed1642a737.jpg",
        name: "Turner Gallagher",
        status: "Works at EXOVENT",
        about: "Duis magna mollit esse consectetur excepteur sint nulla dolor occaecat nisi enim sunt fugiat amet. Magna cupidatat nostrud anim sint sint. Reprehenderit dolor minim commodo commodo culpa aliqua proident exercitation aliquip ea amet. In cillum fugiat eu tempor proident tempor magna. Veniam quis incididunt occaecat do magna. Sint laboris do ut tempor Lorem consectetur non ipsum cillum. Consectetur non incididunt sint est tempor officia fugiat ullamco id dolore enim cupidatat ex.\r\n",
        skills: [
          "consectetur",
          "incididunt",
          "sunt",
          "aute",
          "elit"
        ]
      },
      {
        image: "https://cdn.mentorcruise.com/cache/7eeaeec16735611e833da01e796c220b/9bf76c30806339d9/068df2cf67420bbc3d8461afd7234968.jpg",
        name: "Tate Franco",
        status: "Works at CENTREE",
        about: "Voluptate ad do deserunt Lorem fugiat commodo cillum. Qui ipsum eiusmod sint incididunt aliqua elit elit occaecat culpa tempor commodo consectetur Lorem aliquip. Tempor anim do fugiat mollit qui excepteur magna ullamco. Occaecat deserunt ut fugiat qui veniam sint consequat. Elit eiusmod sint nulla qui commodo velit aliqua aute nulla incididunt. Esse ex sit magna sint nisi nostrud velit. Aliquip do occaecat culpa Lorem consequat et voluptate laborum id consequat culpa non.\r\n",
        skills: [
          "sit",
          "proident",
          "pariatur",
          "ipsum",
          "fugiat"
        ]
      },
      {
        image: "https://cdn.mentorcruise.com/cache/761c88a03174d04645fe142ec14d01f8/ecd85c6eabd119fe/a603d6a4d704b8cde1c472f4494baf92.jpg",
        name: "Lilia Anthony",
        status: "Works at ARCTIQ",
        about: "Quis id culpa cupidatat magna excepteur deserunt in adipisicing ex id Lorem id. Magna nulla cupidatat qui est dolor nulla pariatur. Laborum Lorem sunt anim fugiat culpa excepteur. Consectetur id nostrud minim est ut sint cillum.\r\n",
        skills: [
          "eiusmod",
          "sit",
          "irure",
          "cillum",
          "amet"
        ]
      },
      {
        image: "https://cdn.mentorcruise.com/cache/72cdee9ce03abd871c28d558fb4485d9/4cbafb4775bc7ee2/b91ead6258baa8a86ab86414fa240546.jpg",
        name: "Kaufman Bauer",
        status: "Works at DOGSPA",
        about: "Dolor eu Lorem veniam veniam est nostrud dolor nulla elit nulla ea. Cupidatat enim adipisicing pariatur culpa do aute adipisicing nostrud Lorem amet consectetur. Esse nisi ullamco labore ut consequat laborum fugiat officia mollit.\r\n",
        skills: [
          "laboris",
          "dolore",
          "in",
          "quis",
          "labore"
        ]
      }


]

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
const MentorConnect = () => {
    const classes = useStyles();
    const [selected, setSelected] = useState([]);
    const isAllSelected =
        options.length > 0 && selected.length === options.length;

    const handleChange = (event) => {
        const value = event.target.value;
        if (value[value.length - 1] === "all") {
            setSelected(selected.length === options.length ? [] : options);
            return;
        }
        setSelected(value);
    };
    return (
        <>
            <AppBar />
            <Container >
                <Typography style={{ marginTop: '100px', fontSize: '22px', fontWeight: '800' }}>Found 213 Mentor</Typography>
                <Chip sx={{ borderRadius: '10px', marginTop: '10px', fontSize: '20px' }} label='React Mentors' />
                <Stack direction="row" spacing={3}>
                    {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
                    <Box style={{ marginTop: '20px' }}>
                        <InputLabel id="mutiple-select-label">Country</InputLabel>
                        <Select style={{ width: '200px', height: '40px', borderRadius: '10px' }}
                            renderValue={(selected) => {
                                selected.join(",")
                            }}
                            onChange={handleChange}
                        >
                            <Box style={{ width: '600px' }}>
                                <MenuItem style={{ width: '200px' }} value='India'>
                                    <ListItemIcon>
                                        <Checkbox checked={selected.indexOf('India') > -1} />
                                    </ListItemIcon>
                                    <ListItemText primary={'India'} />
                                </MenuItem>
                            </Box>
                        </Select>
                        {/* <Select
                            labelId="mutiple-select-label"
                            multiple
                            value={selected}
                            onChange={handleChange}
                            renderValue={(selected) => selected.join(", ")}
                            MenuProps={MenuProps}
                            style={{ width: '150px' }}
                        >
                            <OutlinedInput />
                            <MenuItem
                                value="all"
                                classes={{
                                    root: isAllSelected ? classes.selectedAll : ""
                                }}
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        classes={{ indeterminate: classes.indeterminateColor }}
                                        checked={isAllSelected}
                                        indeterminate={
                                            selected.length > 0 && selected.length < options.length
                                        }
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{ primary: classes.selectAllText }}
                                    primary="Select All"
                                />
                            </MenuItem>
                            {options.map((option) => (
                                <MenuItem key={option} value={option}>
                                    <ListItemIcon>
                                        <Checkbox checked={selected.indexOf(option) > -1} />
                                    </ListItemIcon>
                                    <ListItemText primary={option} />
                                </MenuItem>
                            ))}
                        </Select> */}

                    </Box>
                    <Box style={{ marginTop: '20px' }}>
                        <InputLabel id="mutiple-select-label">Industry</InputLabel>
                        <Select style={{ width: '200px', height: '40px', borderRadius: '10px' }}
                            renderValue={(selected) => {
                                selected.join(",")
                            }}
                            onChange={handleChange}
                        >
                            <Box style={{ width: '600px' }}>
                                <Grid container>
                                    <Grid item>
                                        <MenuItem style={{ width: '130px' }} value='India'>
                                            <ListItemIcon>
                                                <Checkbox checked={selected.indexOf('India') > -1} />
                                            </ListItemIcon>
                                            <ListItemText primary={'India'} />
                                        </MenuItem>
                                    </Grid>
                                    <Grid item>
                                        <MenuItem style={{ width: '130px' }} value='America'>
                                            <ListItemIcon>
                                                <Checkbox />
                                            </ListItemIcon>
                                            <ListItemText primary={'America'} />
                                        </MenuItem>
                                    </Grid>
                                    <Grid item>
                                        <MenuItem style={{ width: '130px' }} value='India'>
                                            <ListItemIcon>
                                                <Checkbox checked={selected.indexOf('India') > -1} />
                                            </ListItemIcon>
                                            <ListItemText primary={'India'} />
                                        </MenuItem>
                                    </Grid>
                                    <Grid item>
                                        <MenuItem style={{ width: '130px' }} value='India'>
                                            <ListItemIcon>
                                                <Checkbox checked={selected.indexOf('India') > -1} />
                                            </ListItemIcon>
                                            <ListItemText primary={'India'} />
                                        </MenuItem>
                                    </Grid>
                                    <Grid item>
                                        <MenuItem style={{ width: '130px' }} value='India'>
                                            <ListItemIcon>
                                                <Checkbox checked={selected.indexOf('India') > -1} />
                                            </ListItemIcon>
                                            <ListItemText primary={'India'} />
                                        </MenuItem>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Select>
                    </Box>
                    <Box style={{ marginTop: '20px' }}>
                        <InputLabel id="mutiple-select-label">Exprience</InputLabel>
                        <Select style={{ width: '200px', height: '40px', borderRadius: '10px' }}
                            renderValue={(selected) => {
                                selected.join(",")
                            }}
                            onChange={handleChange}
                        >
                            <Box style={{ width: '600px' }}>
                                <MenuItem style={{ width: '200px' }} value='India'>
                                    <ListItemIcon>
                                        <Checkbox checked={selected.indexOf('India') > -1} />
                                    </ListItemIcon>
                                    <ListItemText primary={'India'} />
                                </MenuItem>
                            </Box>
                        </Select>
                    </Box>
                    <Box style={{ marginTop: '20px' }}>
                        <InputLabel id="mutiple-select-label">Language</InputLabel>
                        <Select style={{ width: '200px', height: '40px', borderRadius: '10px' }}
                            renderValue={(selected) => {
                                selected.join(",")
                            }}
                            onChange={handleChange}
                        >
                            <Box style={{ width: '600px' }}>
                                <MenuItem style={{ width: '200px' }} value='India'>
                                    <ListItemIcon>
                                        <Checkbox checked={selected.indexOf('India') > -1} />
                                    </ListItemIcon>
                                    <ListItemText primary={'India'} />
                                </MenuItem>
                            </Box>
                        </Select>
                    </Box>
                    <Box style={{ marginTop: '20px' }}>
                        <InputLabel id="mutiple-select-label">Skills</InputLabel>
                        <Select style={{ width: '200px', height: '40px', borderRadius: '10px' }}
                            renderValue={(selected) => {
                                selected.join(",")
                            }}
                            onChange={handleChange}
                        >
                            <Box style={{ width: '600px' }}>
                                <MenuItem style={{ width: '200px' }} value='India'>
                                    <ListItemIcon>
                                        <Checkbox checked={selected.indexOf('India') > -1} />
                                    </ListItemIcon>
                                    <ListItemText primary={'India'} />
                                </MenuItem>
                            </Box>
                        </Select>
                    </Box>



                </Stack>
            </Container>
            <Container maxWidth={'xl'} style={{padding:'0px 30px'}}>
            <Grid container style={{justifyContent:'left',marginBottom:'30px', marginTop:'30px'}} rowSpacing={3} spacing={1}>
                {Mentors.map((item)=>{
                    
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
            <Footer />
        </>
    )
}

export default MentorConnect