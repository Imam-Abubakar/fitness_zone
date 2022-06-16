import React from 'react';
import { Stack, Typography } from '@mui/material';


import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  
  return(
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '135px', height: '141px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '135px', height: '141px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 900, left: 50, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '20px', height: '20px' }} />
    <Typography fontSize="12px" fontWeight="bold" fontFamily="Poppins" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

  }

export default BodyPart;