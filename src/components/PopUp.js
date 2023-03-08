import React, { useState } from 'react';
import { Container ,Box, Paper} from '@mui/system';
import Modal from '@mui/material/Modal';
import { Grid , Button, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const PopUp = () => {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(false);
    }

    return(
        <>  
            <Modal open={open}  style={{border: '2px solid white'}}>
                <Box style={{background: 'white', height: 'auto', width: '500px', margin: 'auto', marginTop: '10px'}}>
                    <Box style={{display: 'flex', background: '#243D66', color: 'white', padding: '1px'}}>
                        <h3 style={{fontWeight: '700', width: '480px', textAlign: 'center'}}>CoCreate Labs</h3>
                        <IconButton onClick={handleClick}><CloseIcon style={{color: 'white'}}/></IconButton>
                    </Box>
                    <Box>
                        <center>
                            <img src={'/assets/popup.png'} style={{width: '350px', marginTop: '30px'}}/>
                        </center>
                    </Box>
                    <Box style={{textAlign: 'center', padding: '20px'}}>
                    <b>STAY TUNED!</b><br></br>
                    <p style={{fontSize: '13px', fontWeight: '500'}}>Co-create labs is collaborating with with top investors aorund the country. Aims discovering, nurturing, and growth of startups by providing right guidance and grants by top mentors and investors.Register yourself and Take the next step in your career!</p>
                    </Box>

                    <Box>
                        <center>
                        <Link to='/user/signup'><Button style={{background: 'rgba(36, 61, 102, 1)', color: 'white', fontSize: '12px', padding: '10px', width: '100px', marginTop: '-10px'}}><b>Register</b></Button></Link>
                        </center>
                    </Box>
                    <br></br>
                </Box>
            </Modal>
        </>
    );
}
