import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import AppBar from '../components/Appbar';
import { MeetingTime } from '../components/MeetingTime';
import { useNavigate } from 'react-router-dom';
import { MeetingInfoUser } from '../components/MeetingInfoUser';
import Footer from '../components/Footer';
import { Payment } from '../components/Payment';
import { MeetingFinal } from '../components/MeetingFinal';

const steps = ['Fill Information ', 'Schedule A Date', 'Payment'];

export default function MeetingForm() {
  const redirect = useNavigate();
  useEffect(() => {
    console.log('HI');
    if (localStorage.getItem('token') == null) {
      redirect('/user/login/1');
      // console.log('HI');
    }
  })
  // console.log(localStorage.getItem('token'));
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === -1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const navigate= useNavigate();
  const browse=()=>{
    navigate('/mentors');
  }

  return (
    <>
      <AppBar />
      <Container style={{ marginTop: '100px' }} maxWidth={'lg'}>
        <Typography style={{ fontSize: '25px', marginBottom: '20px', fontWeight: '600' }}>Book A Session With the Mentor</Typography>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={browse}>Browse More Mentors</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
              {activeStep == 0 ? <MeetingInfoUser /> : <></>}
              {activeStep==2? <Payment/>:<></>}
              {activeStep==3?<MeetingFinal/>:<></>}
              {activeStep == 1 ? <center style={{ marginTop: '-40px' }}><MeetingTime handleNext={handleNext} /></center> : <></>}
              <center>
                <Box sx={{ display: 'flex', marginBottom:'30px', width: '70%', flexDirection: 'row', pt: 2 }}>
                  <Button
                    variant='contained'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    style={{ color: 'white', backgroundColor: '#1d98d1' }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}

                  <Button onClick={handleNext} style={{ color: 'white', backgroundColor: '#1d98d1' }}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </center>
            </React.Fragment>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
}