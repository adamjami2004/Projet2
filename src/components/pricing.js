import React, { useState } from 'react';
import "./pricingstyle.css"
import Button from 'react-bootstrap/Button';
import Footer from './footer';

const Price = () => {
  const [option, setOption] = useState('');
  const [numberOfNights, setNumberOfNights] = useState(1);
  const [people, setpeople] = useState(1);
  const [dropdownChoice, setDropdownChoice] = useState('');
  const [price, setPrice] = useState(0);

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  const handleNumberOfNightsChange = (event) => {
    setNumberOfNights(parseInt(event.target.value));
  };

  const handlepeople = (event) => {
    setpeople(parseInt(event.target.value));
  };

  const handleDropdownChange = (event) => {
    setDropdownChoice(event.target.value);
  };

  const calculatePrice = () => {
    const optionPrice = parseFloat(option);
    const dropdownValue = parseFloat(dropdownChoice);

    const calculatedPrice = optionPrice * numberOfNights * dropdownValue*people;

    setPrice(calculatedPrice);
  };

  return (
    <div>
      <div id="ecr">
      <h2>Price Simulator</h2>
      </div>
      <h3 id="warning">This price simulator do not give the precise price of the trip but only a close estimation</h3>
      <div id="calcul">
      <label>
        Choose an option:
        <select value={option} onChange={handleOptionChange}>
          <option value="">Select</option>
          <option value="1">North Africa</option>
          <option value="1.20">Europe</option>
          <option value="0.8">South Asia</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        Number of Nights:
        <input
          type="number"
          value={numberOfNights}
          onChange={handleNumberOfNightsChange}
        />
      </label>
      <br />
      <br />
      <label>
        Number People:
        <input
          type="number"
          value={people}
          onChange={handlepeople}
        />
      </label>
      <br />
      <br />
      <label>
        Hotel Type: 
        <select value={dropdownChoice} onChange={handleDropdownChange}>
          <option value="">Select</option>
          <option value="110">3 stars</option>
          <option value="170">4 stars</option>
          <option value="260">5 stars</option>
        </select>
      </label>
      <br />
      <br />
      <Button onClick={calculatePrice} variant="success">Estimate</Button>
      <p>The Estimate Price for your trip is : (Visa fees not included) {price} $</p>
      </div>
    <Footer/>  
    </div>
  );
};

export default Price;
