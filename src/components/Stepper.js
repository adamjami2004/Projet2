import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Stepperstyle.css';
import Alert from 'react-bootstrap/Alert';
const steps = ['Basic Info', 'Dates', 'Destination', 'Payment Info', 'Confirmation'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const isStepOptional = (step) => {
    return step === 1;
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

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box id="bar" sx={{ width: '70%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
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
          <Typography id="confirmation" sx={{ mt: 2, mb: 1 }}>
            The Booking has been completed! You'll receive an email confirmation soon.

          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Book another Trip</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography id="step" sx={{ mt: 2, mb: 1 }}>
            Step {activeStep + 1}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            {activeStep === 0 && (
              <React.Fragment>
                <TextField label="First Name" />
                <br />
                <TextField label="Last Name" />
                <br />
                <TextField label="Email" />
                <br />
                <TextField label="Phone Number" />
              </React.Fragment>
            )}
            {activeStep === 1 && (
              <React.Fragment>
                <TextField label="Start Date" />
                <br />
                <TextField label="End Date" />
                <br />
                <TextField label="Citizenship" />
                <br />
                <TextField label="City of Departure" />
              </React.Fragment>
            )}
            {activeStep === 2 && (
              <React.Fragment>
                <TextField label="Number of Nights" />
                <br />
                <TextField label="Number of people" />
                <br />
                <TextField label="Hotel Name" />
                <br />
                <Button as={Link} to="/destination" variant="primary">
                  Our destinations
                </Button>
              </React.Fragment>
            )}
            {activeStep === 3 && (
              <React.Fragment>
                <TextField label="Card Number" />
                <br />
                <TextField label="Expiration Date" />
                <br />
                <TextField label="Name on the card" />
                <br />
                <TextField label="CCV" />
              </React.Fragment>
            )}
            {activeStep === 4 && (
              <React.Fragment>
                <FormControlLabel
                  control={<Checkbox checked={checked} onChange={handleChange} />}
                  label="I've read and blablabla all the terms and conditions."
                />
              </React.Fragment>
            )}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
            <Button  id="bouton" color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ ml: 3 }}>
              Back
            </Button>
            <Button onClick={handleNext} sx={{ mr:3 }}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
