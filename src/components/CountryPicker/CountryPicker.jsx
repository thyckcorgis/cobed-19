import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ onCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => {onCountryChange(e.target.value)}}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option value={country} key={i}>{country}</option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;
