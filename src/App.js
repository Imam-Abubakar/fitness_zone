import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import MetaTags from 'react-meta-tags';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <MetaTags>
            <title>GoldsGym</title>
            <meta id="meta-description" name="description" content="Simple exercise app with react" />
            <meta id="og-title" property="og:title" content="GoldsGym" />
            <meta id="og-image" property="og:image" content="../assets/images/Logo.png" />
    </MetaTags>
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
    </>
  );
}

export default App;
