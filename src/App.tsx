import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Home from './Pages/Home';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
};

export default App;