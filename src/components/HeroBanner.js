import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2525" fontWeight="600" fontSize="26px" fontFamily="Poppins">
        Fitness Zone
      </Typography>
      <Typography fontWeight={700} fontFamily="Poppins" sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Try Again
      </Typography>
      <Typography fontSize="22px" fontFamily="Poppins" lineHeight="35px" mb="20px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Button variant="outlined" href="#exercises" color="error"
    sx={{padding: '10px 15px'}}
    >
      Explore
    </Button>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner