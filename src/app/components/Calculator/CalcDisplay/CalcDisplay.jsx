import React from 'react';
import cl from './calcDisplay.module.css';

const CalcDisplay = ({ value, op }) => {
  return (
    <div className={cl.display}>
      <div className={cl.supDisplayValue}>{`${value}${op}${value}`}</div>
      <div>{value || 0}</div>
    </div>
  );
};

export default CalcDisplay;
