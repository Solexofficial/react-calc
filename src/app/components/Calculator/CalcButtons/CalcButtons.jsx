import React from 'react';
import Button from '../../UI/Button/Button';
import cl from './CalcButtons.module.css';

const CalcButtons = () => {
  return (
    <div className={cl.buttonsWrapper}>
      <Button value={7}>+</Button>
      <Button value={8}>-</Button>
      <Button value={9}>*</Button>
      <Button value={9}>/</Button>
      <Button value={7}>7</Button>
      <Button value={8}>8</Button>
      <Button value={9}>9</Button>
      <Button value={4}>4</Button>
      <Button value={5}>5</Button>
      <Button value={6}>6</Button>
      <Button value={1}>1</Button>
      <Button value={2}>2</Button>
      <Button value={3}>3</Button>
      <Button value={0}>0</Button>
      <Button value={'.'}>.</Button>
      <Button value={'AC'}>AC</Button>
      <Button type='long' value={'='}>
        =
      </Button>
    </div>
  );
};

export default CalcButtons;
