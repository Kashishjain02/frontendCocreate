import React from 'react'
import { Container } from '@mui/material'
import Button from '@mui/material/Button';
import { useState , useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { base_url } from '../../api/api';
import API from '../../api/api';



export const Payment = () => {
  

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

  // get the CSRF token from the cookie
  // const csrftoken = Cookies.get('csrftoken');
  // console.log("csrftoken",csrftoken)
  const manageCredit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); 
        const headers = { Authorization: token };
        const data = {};
        const credit_url=base_url+`api/credit-info/`;
        data.mentor = "email";
        data.price = 80;
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
    }

  return (
    <div>
      <Container maxWidth={'md'}>
        you have {CreditData} credits left  
      <Button variant="contained" onClick={manageCredit} style={{margin : '10px'}} disableElevation>
      Pay now
    </Button>
      </Container>
    </div>
  )
}
