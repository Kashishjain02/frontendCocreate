import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import AppBar from './Appbar'
import moment from 'moment';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const User = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [meetings, setMeetings] = useState([]);
    const [proposedMentor, setProposedMentor] = useState([]);
    const getMentor = (mentor) => {
        setProposedMentor(mentor);
        setOpen(true);
    }
    useEffect(() => {
        const userID = localStorage.getItem('userID');
        console.log(userID);
        fetch(`https://cocreatelabb.herokuapp.com/user/getMeetings?userID=${userID}`)
            .then(response => response.json())

            .then(data => setMeetings(data.data))
    }, [])
    console.log(meetings);
    return (
        <>
            <AppBar />
            <Box style={{ marginTop: '100px' }}>
                <Grid container maxWidth={'lg'} columnGap={2} style={{marginLeft: '20px', marginTop: '20px'}}>
                    <Grid item xs={4} style={{borderRadius: '20px', boxShadow: '3px 3px 7px gray, -1px -1px 1px lightgray'}}>
                        <Box style={{height: '60%', marginLeft: '20px'}}>
                            <h3>Upcoming Meetings :</h3>
                            <p>- <a href="#" style={{textDecoration: 'none'}}>Dominic Monn</a> - 23-Nov - 12:00-1:00</p>
                            <p>- <a href="#" style={{textDecoration: 'none'}}>Earl Friedberg</a> - 29-Nov - 4:00-5:00</p>
                            <br/>
                            <h3>Upcoming events :</h3>
                            <p>- <a href="#" style={{textDecoration: 'none'}}>Excepteur irure occaecat ullamco</a></p>
                            <p>- <a href="#" style={{textDecoration: 'none'}}>ipsum loren occaecat</a></p>
                            <br/>
                            <h3>Attended meetings :</h3><br/>
                            <p></p>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box>
                            <center>
                                <Typography variant='h4' style={{ fontFamily: 'koulen' }}></Typography>
                            </center>
                            <br></br>
                            {
                                meetings.map((m) =>
                                    <Box style={{ padding: '15px 25px', background: 'rgb(172 242 249)' }}>
                                        <Typography>Time: {moment(m.timeFixed.start).format('MMMM Do YYYY, h:mm:ss a')} - {moment(m.timeFixed.end).format('h:mm:ss a')}</Typography>
                                        <Typography style={{ fontWeight: '600' }}>Status:<span style={{ fontWeight: '500' }}> {m.status}</span></Typography>
                                        <Typography style={{ fontWeight: '600' }}>UserMeeting Expectation : <span style={{ fontWeight: '500' }}> {m.userMeetingExpectation}</span></Typography>
                                        <Typography style={{ fontWeight: '600' }}>UserMeeting Goal : <span style={{ fontWeight: '500' }}>{m.userMeetingGoal}</span></Typography>
                                        <Typography style={{ fontWeight: '600' }}>UserMeeting Questions : <span style={{ fontWeight: '500' }}>{m.userMeetingQuestions}</span></Typography>
                                        <Button variant='contained' onClick={() => getMentor(m.mentor)} style={{ marginTop: '15px', background: 'rgb(74 139 145)' }}>Know Mentor</Button>
                                    </Box>

                                )
                            }
                        </Box>
                    </Grid>


                </Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <center>
                            <Typography variant='h5' id="modal-modal-title" component="h2">
                                Details Of Mentor
                            </Typography>

                        </center>
                        <Typography variant='body1' style={{ fontSize: '18px' }} id="modal-modal-description" sx={{ mt: 2 }}>
                            Role:   {proposedMentor.role}
                        </Typography>
                        <Typography variant='body1' style={{ fontSize: '18px' }} id="modal-modal-description" sx={{ mt: 2 }}>
                            MentorName:   {proposedMentor.firstName}
                        </Typography>
                        <Typography variant='body1' style={{ fontSize: '18px' }} id="modal-modal-description" sx={{ mt: 2 }}>
                            MentorEmail:   {proposedMentor.email}
                        </Typography>
                        <Typography variant='body1' style={{ fontSize: '18px' }} id="modal-modal-description" sx={{ mt: 2 }}>
                            Mentor Country:   {proposedMentor.countryCode}
                        </Typography>
                    </Box>
                </Modal>
            </Box>

        </>
    )
}

export default User