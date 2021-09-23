import React from 'react';
import cl from './Button.module.css';

const Button = ({ children, type, ...props }) => {
  return (
    <button type={type} className={[cl.btn, cl[type]].join(' ')} {...props}>
      {children}
    </button>
  );
};

export default Button;
