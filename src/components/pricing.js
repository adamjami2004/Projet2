import React, { useState } from 'react';
import './pricingstyle.css';
import Button from 'react-bootstrap/Button';
import Footer from './footer';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslation } from 'react-i18next';




const Price = () => {
  const [option, setOption] = useState('');
  const [numberOfNights, setNumberOfNights] = useState(1);
  const [people, setPeople] = useState(1);
  const [dropdownChoice, setDropdownChoice] = useState('');
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const swapLanguage = () => {
    if (i18n.language === 'en') {
      changeLanguage('fr');
    } else {
      changeLanguage('en');
    }
  };

  const handleNumberOfNightsChange = (event) => {
    setNumberOfNights(parseInt(event.target.value));
  };

  const handlePeopleChange = (event) => {
    setPeople(parseInt(event.target.value));
  };

  const handleDropdownChange = (event) => {
    setDropdownChoice(event.target.value);
  };

  const calculatePrice = () => {
    setIsLoading(true);

    // Simulate a 3-second wait before calculating the price
    setTimeout(() => {
      const optionPrice = parseFloat(option);
      const dropdownValue = parseFloat(dropdownChoice);
      const calculatedPrice = optionPrice * numberOfNights * dropdownValue * people;
      setPrice(calculatedPrice);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div>
      <div id="ecr">
        <h2>{t('b')}</h2>
      </div>
      
      <div id="calcul">
        <TextField
          select
          label={t('c')}
          value={option}
          onChange={handleOptionChange}
          variant="outlined"
          sx={{ width: 200 }} 
        >
          <MenuItem value="">Selection</MenuItem>
          <MenuItem value="1">{t('na')}</MenuItem>
          <MenuItem value="1.20">{t('asia')}</MenuItem>
          <MenuItem value="0.8">{t('eu')}</MenuItem>
        </TextField>
        <br />
        <br />
        <TextField
          type="number"
          label={t('d')}
          value={numberOfNights}
          onChange={handleNumberOfNightsChange}
          variant="outlined"
          sx={{ width: 200 }} 
        />
        <br />
        <br />
        <TextField
          type="number"
          label={t('e')}
          value={people}
          onChange={handlePeopleChange}
          variant="outlined"
          sx={{ width: 200 }} // Set the width for "Number of People" input
        />
        <br />
        <br />
        <TextField
          select
          label={t('f')}
          value={dropdownChoice}
          onChange={handleDropdownChange}
          variant="outlined"
          sx={{ width: 200 }} // Set the width for "Hotel Type" dropdown
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="110">{t('i')}</MenuItem>
          <MenuItem value="170">{t('j')}</MenuItem>
          <MenuItem value="260">{t('k')}</MenuItem>
        </TextField>
        <br />
        <br />
        <Button onClick={calculatePrice} variant="success" disabled={isLoading}>
          {isLoading ? <CircularProgress id="et" size={20} color="inherit" /> : t('g')}
        </Button>
        {isLoading ? null : <p id='pr'>{t('h')} {price} $</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Price;
