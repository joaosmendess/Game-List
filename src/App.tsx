import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </>
  );
};

export default App;