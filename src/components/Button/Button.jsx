import React from 'react';
import { ButtonSbm } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <div>
      <ButtonSbm onClick={onClick}>Load more</ButtonSbm>
    </div>
  );
};

export default Button;
