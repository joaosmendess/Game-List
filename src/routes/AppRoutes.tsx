import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import GlobalStyles from '../styles/GlobalStyles';

const AppRoutes: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
     
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRoutes;