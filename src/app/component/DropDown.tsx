'use client'
import React, { useState } from 'react';

// @ts-ignore
const Dropdown = ({ options, select }) => {
  const [selectedOption, setSelectedOption] = useState('');
// @ts-ignore
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
// @ts-ignore
  return (
    <select className={select} onChange={handleChange} value={selectedOption}>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;