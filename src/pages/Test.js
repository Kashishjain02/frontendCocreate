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

const Test = () => {

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
      
                    <Box style={{marginTop:'100px'}}>
                        <Button onClick={(event) => createOrder(event,40000)} >create order </Button>
                    </Box>
                  
    </Box>
  );
};

export default Test;
