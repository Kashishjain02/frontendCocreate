import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react'
import AppBar from './Appbar'
import moment from 'moment';

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

const Mentor = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [meetings, setMeetings] = useState([]);
    const [proposedUser, setProposedUser] = useState([]);
    useEffect(() => {
        const userID = localStorage.getItem('mentorID');
        console.log(userID);
        fetch(`https://cocreatelabb.herokuapp.com/mentor/getMeetings?mentorID=${userID}`)
            .then(response => response.json())

            .then(data => setMeetings(data.data))
    }, [])
    console.log(meetings)

    const getUser = (user) => {
        console.log(user);
        setOpen(true);
        setProposedUser(user);
        // fetch(`https://cocreatelabb.herokuapp.com/user/getUser?userID=${id}`)
        //     .then(response => response.json())

        //     .then(data => setProposedUser(data.data))
    }

    return (
        <>
            <AppBar />
            <Box style={{ marginTop: '100px' }}>
                <Grid container style={{ justifyContent: 'centerw' }}>
                    <Grid item>
                        <Box>
                            <center>
                                <Typography variant='h4' style={{ fontFamily: 'koulen' }}>All Request</Typography>
                            </center>
                            <br></br>
                            {
                                meetings.map((m) =>
                                    <Box style={{ padding: '15px 25px', background: 'rgb(172 242 249)' }}>
                                        <Typography style={{ fontWeight: '600', cursor: 'pointer' }}>Proposed by: <span style={{ fontWeight: '500' }}>{m.proposedBy}</span></Typography>
                                        <Typography>Time: {moment(m.timeFixed.start).format('MMMM Do YYYY, h:mm:ss a')} - {moment(m.timeFixed.end).format('h:mm:ss a')}</Typography>
                                        <Typography style={{ fontWeight: '600' }}>Status:<span style={{ fontWeight: '500' }}> {m.status}</span></Typography>
                                        <Typography style={{ fontWeight: '600' }}>UserMeeting Expectation : <span style={{ fontWeight: '500' }}> {m.userMeetingExpectation}</span></Typography>
                                        <Typography style={{ fontWeight: '600' }}>UserMeeting Goal : <span style={{ fontWeight: '500' }}>{m.userMeetingGoal}</span></Typography>
                                        <Typography style={{ fontWeight: '600' }}>UserMeeting Questions : <span style={{ fontWeight: '500' }}>{m.userMeetingQuestions}</span></Typography>
                                        <Button onClick={() => getUser(m.user)} style={{ marginTop: '15px', background: 'rgb(74 139 145)', color: 'white' }}>Know User</Button>
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
                                Details Of User
                            </Typography>

                        </center>
                        {proposedUser ? <>
                            <Typography variant='body1' style={{ fontSize: '18px' }} id="modal-modal-description" sx={{ mt: 2 }}>
                                Role:   {proposedUser.role}
                            </Typography>
                            <Typography variant='body1' style={{ fontSize: '18px' }} id="modal-modal-description" sx={{ mt: 2 }}>
                                UserName:   {proposedUser.firstName}
                            </Typography>
                            <Typography variant='body1' style={{ fontSize: '18px' }} id="modal-modal-description" sx={{ mt: 2 }}>
                                UserEmail:   {proposedUser.email}
                            </Typography>
                            <Typography variant='body1' style={{ fontSize: '18px' }} id="modal-modal-description" sx={{ mt: 2 }}>
                                User Country:   {proposedUser.country}
                            </Typography>
                        </>
                            :
                            <>
                            </>
                        }
                    </Box>
                </Modal>
            </Box>
        </>
    )
}

export default Mentor