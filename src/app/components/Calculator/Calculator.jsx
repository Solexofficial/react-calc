import React from 'react';
import CalcButtons from './CalcButtons/CalcButtons';
import CalcDisplay from './CalcDisplay/CalcDisplay';

const Calculator = () => {
  return (
    <div className='calculator'>
      <CalcDisplay value={5} op={'/'} />
      <CalcButtons />
    </div>
  );
};

export default Calculator;
