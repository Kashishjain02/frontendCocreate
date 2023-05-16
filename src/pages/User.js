import React, { useState,useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
// import AppBar from './Appbar'
import { base_url } from '../api/api';
import API from '../api/api';
import axios from 'axios';

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
  console.log("amount at line 29",amount)
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
        console.log("response",response);
        const token = localStorage.getItem('token'); 
        const headers = { Authorization: token };
        const data = {};
        const credit_url=base_url+`api/payment-success/`;
        data.amount = 250;
        console.log(data);
        API.post(credit_url, data,{headers})
            .then((data) => {
                console.log("status",data.status);
                if (data.status == 200) {
                    console.log(data.data);
                    
                }
            })
            .catch(err => {
                console.log(err);
            })

        alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
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


const Dashboard = () => {

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
  const [credits, setCredits] = useState(0);
  const handleAddCredits = () => {
    // Handle adding credits logic here
    console.log(`Adding ${credits} credits`);
  };
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
        data.amount = addCredit;
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
    <Box>
      {/* <AppBar /> */}
      <Box mt={10} style={{marginTop:'150px'}}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper>
                <Box style={{height: '60%', marginLeft: '20px'}}>
                            <h3>Upcoming Meetings :</h3>
                            <p>- <a href="#" style={{textDecoration: 'none'}}>Dominic Monn</a> - 23-Nov - 12:00-1:00</p>
                            <p>- <a href="#" style={{textDecoration: 'none'}}>Earl Friedberg</a> - 29-Nov - 4:00-5:00</p>
                            <p>- <a href="#" style={{textDecoration: 'none'}}>Excepteur irure occaecat ullamco</a></p>
                            <p>- <a href="#" style={{textDecoration: 'none'}}>ipsum loren occaecat</a></p>
                            <br/>
                        </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper>
                <Box style={{height: '60%', marginLeft: '20px'}}>
                            
                            <h3>Upcoming events :</h3>
                            <p>- <a href="#" style={{textDecoration: 'none'}}>Excepteur irure occaecat ullamco</a></p>
                            <p>- <a href="#" style={{textDecoration: 'none'}}>ipsum loren occaecat</a></p>
                            <br/>
                            
                        </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper>
            <Typography variant="h6">Current Credits</Typography>
            <Typography variant="subtitle1">100 Credits</Typography>


                <Box p={2}>
                  <Typography variant="h6">Add Credits</Typography>
                  <Box mt={2}>
                    <TextField
                      label="Number of Credits"
                      variant="outlined"
                      fullWidth
                      value={addCredit}
                      onChange={(e) => setAddCredit(e.target.value)}
                    />
                  </Box>
                  <Box mt={2}>
                    <Box sx={style}>
                        <RazorpayButton amount={addCredit} orderId={orderID} />
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
