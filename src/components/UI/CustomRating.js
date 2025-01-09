import React from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const BlackCircle = styled('div')({
  width: 10, 
  height: 10,
  backgroundColor: '#6A1E55',
  borderRadius: '50%', 
  display: 'inline-block',
  margin: 3,
});

const EmptyCircle = styled('div')({
  width: 10,
  height: 10,
  backgroundColor: 'transparent',
  border: '1px solid #6A1E55', 
  borderRadius: '50%',
  display: 'inline-block',
  margin: 3,
});

const CustomRating = ({ defaultValue, size = "small" }) => {
  return (
    <Rating
      readOnly
      name="customized-icons"
      defaultValue={defaultValue}
      size={size}
      icon={<BlackCircle />}
      emptyIcon={<EmptyCircle />}
    />
  );
};

export default CustomRating;
