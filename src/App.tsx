import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
//import Home from './Pages/Home';
import SignIn from './Pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <SignIn />
    </>
  );
};

export default App;