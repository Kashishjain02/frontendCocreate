import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { InputLabel,Button, OutlinedInput, Paper, TextField } from '@mui/material';
import { base_url } from '../api/api';
import API from '../api/api';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #dddddd',
    boxShadow: 24,
    p: 4,
};
export const MeetingTime = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSelect = (arg) => {
        setStartTime(new Date(arg.startStr).toLocaleString('en-US', {
            hour12:false
        }).split(', ')[1]);
        setDate(new Date(arg.startStr).toISOString().split('T')[0])
        // setStartTime(new Date(arg.startStr).getTime())
        setOpen(!open);
    }
    const change=(e)=>{
        setStartTime(e.target.value);
    }
    const dateChange=(e)=>{
        setImmediate(e.target.value);
    }

    const submit=(e)=>{
        e.preventDefault();
        const token = localStorage.getItem('token'); 
        const headers = { Authorization: token };
        const data = {};
        const credit_url=base_url+`api/mentortest/`;
        data.date = date;
        data.time = startTime;
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
            
        props.handleNext()
    }
    const [date,setDate]= useState();
    const [startTime,setStartTime]= useState();
    const [events, setEvent] = useState([{
        allDay: false,
        color: "#2196f3",
        description: "Get a new quote for the payment processor",
        end: "2022-08-07T08:00:36.790Z",
        id: "5e88830672d089c53c46ece3",
        start: "2022-08-07T05:00:36.790Z",
        title: "Lunch"
    },
    {
        allDay: false,
        color: "#ffe57f",
        description: "Discuss about the new project",
        end: "2022-08-09T13:45:36.791Z",
        id: "5e888302e62149e4b49aa609",
        start: "2022-08-09T13:55:36.790Z",
        textColor: "#212121",
        title: "Meeting"
    }]);


    const calendarRef = useRef(null);
    return (
        <div style={{ padding: '20px', width: '70%', backgroundImage: 'black', height: '60%' }}>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Paper sx={style}>
                    <Box style={{display:'flex', justifyContent:'space-evenly', width:'100%'}}>
                    <Box>
                    <InputLabel>Starting Time</InputLabel>
                    <TextField type='time' value ={startTime} onChange={change} style={{ color: 'white', width: '150px' }} />
                    </Box>
                    <Box style={{marginLeft:'20px'}}>
                    <InputLabel>Starting Time</InputLabel>
                    <TextField type='date' value={date} onChange={(e)=>setDate(e.target.value)}   style={{ color: 'white', width: '150px' }} />
                    </Box>
                    {/* <Box style={{ alignItems:'end', display:'flex'}}>
                        <Button variant='contained' onClick={props.handleNext}style={{marginLeft:'10px',width:'100px', height:'57px'}}>NEXT</Button>
                    </Box> */}
                    <Box style={{ alignItems:'end', display:'flex'}}>
                        <Button variant='contained' onClick={submit}style={{marginLeft:'10px',width:'100px', height:'57px'}}>NEXT</Button>
                    </Box>
                    </Box>
                </Paper>
            </Modal>
            <FullCalendar
                timeZone='local'
                ref={calendarRef}
                allDayMaintainDuration
                eventResizableFromStart
                select={handleSelect}
                // eventDrop={handleSelect}
                // eventClick={handleSelect}
                // eventResize={handleSelect}
                events={events != [] ? events : []}
                // select={handleSelect}
                selectable
                plugins={[dayGridPlugin, listPlugin, interactionPlugin, timeGridPlugin]}
                initialView="timeGridWeek"
                height={500}
            />
        </div>
    )
}
