import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import AppBar from './Appbar'
import moment from 'moment';
import Modal from '@mui/material/Modal';
import { base_url } from '../../api/api';
import API from '../../api/api';
import axios from 'axios';
import { Input, InputLabel, OutlinedInput, Divider } from '@mui/material';

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

function RazorpayButton({ amount, orderId }) {
    console.log("amount####", amount);
    console.log("####orderId", orderId);
  useEffect(() => {
    const options = {
      key: "rzp_test_AvD6vsvRd1viWC", // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "CoCreate Labs", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      prefill: {
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    document.getElementById('rzp-button1').onclick = function (e) {
      rzp1.open();
      e.preventDefault();
    };
  }, []);

  return (
    <Button id="rzp-button1">Pay</Button>
  );
}

const User = () => {

    const [addCredit, setAddCredit] = useState('');
    const [orderID, setOrderID] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [paymentModal, setPaymentModal] = useState(false);
    const handlePaymentModelOpen = () => setPaymentModal(true);
    const handlePaymentModelClose = () => setPaymentModal(false);

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

    const [CreditData, setCredit] = useState([]);
    const credit_api = base_url + `api/credit-info/`;
    useEffect(() => {
        const fetchData = async () => {
        const token = localStorage.getItem('token'); 
        const headers = { Authorization: token };
        const result = await axios.get(credit_api, { headers });      
        setCredit(result.data[0].credits);
        };
        fetchData();
    }, []);


    const createOrder = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); 
        const headers = { Authorization: token };
        const data = {};
        const credit_url=base_url+`api/create_payment_order/`;
        data.amount = addCredit*500;
        console.log(data);
        API.post(credit_url, data,{headers})
            .then((data) => {
                console.log("status",data.status);
                if (data.status == 200) {
                    console.log(data);
                    setAddCredit(data.data.amount)
                    setOrderID(data.data.id)

                }
            })
            .catch(err => {
                console.log(err);
            })

        handleClose();
        handlePaymentModelOpen();

    }

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
                {/* <Modal
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
                </Modal> */}
                you have {CreditData} credits left  
                {/* <Button variant="contained" onClick={createOrder} style={{margin : '10px'}} disableElevation>
                    Add Credits
                </Button> */}
                <Button onClick={handleOpen} style={{background : '#eee'}}>Add Credits</Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form>
                            <Box style={{ marginTop: '20px' }}>
                                <InputLabel style={{ marginTop: '20px' }}>Add Credits</InputLabel>
                                <OutlinedInput sx={{ height: '50px', width: '100%' }} value={addCredit} onChange={(e) => { setAddCredit(e.target.value) }} style={{ marginTop: '10px' }} type='number' placeholder='amount' required/>
                            </Box>
                            <Button onClick={createOrder} style={{ marginTop: '50px', width: '100%', height: '50px' }} variant='contained'>Pay</Button>

                        </form>
                    </Typography>
                </Box>
                </Modal>
                <Modal
                    open={paymentModal}
                    onClose={handlePaymentModelClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <RazorpayButton amount={addCredit} orderId={orderID} />
                    </Box>
                </Modal>
            </Box>

        </>
    )
}

export default User