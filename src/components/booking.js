import React, { useState } from 'react';
import { Container, ProgressBar, Button, Form, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './bookingstyle.css'

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: '',
    step2: '',
    step3: '',
    step45:'',
    step2Date: null, // Added state for the selected date
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, step2Date: date }); // Update the selected date in the state
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);
  };

  return (
    <div>
      <Container fluid className="d-flex justify-content-center align-items-center">
        <div className="w-75">
          <ProgressBar id="progression" now={(currentStep / 4) * 100} label={`${currentStep}/4`} />

          {currentStep === 1 && (
            <Form onSubmit={handleSubmit} id="mer">
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="step1"
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="step1"
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email Adress</Form.Label>
                <Form.Control
                  type="text"
                  name="step1"
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group id="number">
                <Form.Label>N° of people registered for the trip</Form.Label>
                <Form.Control
                  as="select"
                  name="step1"                
                  onChange={handleFormChange}>
                  <option value="">Select an option</option>
                  <option value="option1"> 1</option>
                  <option value="option2"> 2</option>
                  <option value="option3"> 3</option>
                  <option value="option3"> 4</option>
                  <option value="option3"> 5+</option>
                </Form.Control>
              </Form.Group>

              <Form.Group id="number">
                <Form.Label>Citizenship</Form.Label>
                <Form.Control
                  as="select"
                  name="step1"                
                  onChange={handleFormChange}
                >
                  <option value="">Select an option</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Australia">Belgium</option>
                  <option value="Australia">Bulgaria</option>
                  <option value="Australia">China</option>
                  <option value="Australia">Canada</option>
                  <option value="Australia">Danemark</option>
                  <option value="Australia">France</option>
                  <option value="Australia">England</option>
                  <option value="Australia">Italy</option>
                  <option value="Australia">Morocco</option>
                  <option value="Australia">Portugal</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </Form.Control>
              </Form.Group>

              

              
              <Button id="next" variant="danger" onClick={handleNextStep}>
                Next
              </Button>
            </Form>
          )}

          {currentStep === 2 && (
            <Form onSubmit={handleSubmit}>
              {/* Form fields for step 2 */}
              <Form.Group>
                <Form.Label>Departure Date</Form.Label>
                <br />
                <DatePicker
                  selected={formData.step2Date} // Use the selected date from state
                  onChange={handleDateChange} // Handle date selection
                  dateFormat="MM/dd/yyyy" // Define the date format
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Return Date</Form.Label>
                <br />
                <DatePicker
                  selected={formData.step2Date} // Use the selected date from state
                  onChange={handleDateChange} // Handle date selection
                  dateFormat="MM/dd/yyyy" // Define the date format
                />
              </Form.Group>

              <Button id="previous" variant="danger" onClick={handlePreviousStep}>
                Prev
              </Button>
              <Button variant="danger" onClick={handleNextStep}>
                Next
              </Button>
            </Form>
          )}

          {currentStep === 3 && (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
              <Form.Label>Step 3</Form.Label>
              <Form.Control
                type="text"
                name="step3"
                value={formData.step3}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Button id="previous" variant="danger" onClick={handlePreviousStep}>
              Prev
            </Button>
            <Button variant="danger" onClick={handleNextStep}>
              Next
            </Button>
            </Form>
          )}

          {currentStep === 4 && 
          <Alert id="alert" variant="success">Congrats, your trip is now booked! You will receive an email confirmation soon. The details conncerning the payment procedure will be communicated to you too.</Alert>}
        </div>
      </Container>
    </div>
  );
};

export default Booking;
