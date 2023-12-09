import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import setAuthTokenStored from './components/setTokenStored';


function App() {
    setAuthTokenStored();
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;

//cd sstu-test-system
//npm start