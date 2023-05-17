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

    const [applications, setApplications] = useState([]);
    const application_api = base_url + `api/application-info/`;
    useEffect(() => {
        const fetchData = async () => {
        const token = localStorage.getItem('token'); 
        const headers = { Authorization: token };
        const result = await axios.get(application_api, { headers });      
        setApplications(result.data);
        };
        fetchData();
    }, []);

    const createOrder = (event,amount) => {
        event.preventDefault();
        const token = localStorage.getItem('token'); 
        const headers = { Authorization: token };
        const data = {};
        const credit_url=base_url+`api/create_payment_order/`;
        data.amount = amount; //Add amount here
        API.post(credit_url, data,{headers})
            .then((data) => {
                if (data.status == 200) {

                    const options = {
                        key: "rzp_test_AvD6vsvRd1viWC", // Enter the Key ID generated from the Dashboard
                        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        currency: "INR",
                        name: "CoCreate Labs", //your business name
                        description: "Test Transaction",
                        image: "https://example.com/your_logo",
                        order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                        prefill: {
                            name: "Gaurav Kumar", //your customer's name
                            email: "gaurav.kumar@example.com",
                            contact: "9000090000",
                        },
                        notes: {
                            address: "Razorpay Corporate Office",
                        },
                        theme: {
                            color: "#ff6b00",
                        },
                        
                    };
                    const rzp1 = new window.Razorpay(options);
                    rzp1.open();

                }
            })
            .catch(err => {
                console.log(err);
            })

       
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
                            <h3>Applications Under Review :</h3>
                            {applications.map((item)=>{
                    
                                return <p>- <a href="#" style={{textDecoration: 'none'}}>{item.mentor_name}</a></p>
                            })}
                            
                            <br/>
                        </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper>
                <Box style={{height: '60%', marginLeft: '20px'}}>
                            
                            <h3>Upcoming Meetings :</h3>
                            <p>- <a href="/zoom/" style={{textDecoration: 'none'}}>Excepteur irure occaecat ullamco</a></p>
                            <p>- <a href="/zoom/" style={{textDecoration: 'none'}}>ipsum loren occaecat</a></p>
                            <br/>
                            
                        </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper>
            <Typography variant="h6">Current Credits</Typography>
            <Typography variant="subtitle1">{CreditData}</Typography>


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
                        {/* <RazorpayButton amount={addCredit} orderId={orderID} /> */}
                        <Button onClick={(event) => createOrder(event,parseInt(addCredit, 10)*100)} >Pay </Button>
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
