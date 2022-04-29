import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import BlockCard from './components/BlockCard';
import Wifi from './components/Wifi';


function App() {
  return (
    <>
      <div className="ReactApp">

        <Header />

        <BlockCard />
        <Wifi />

        <Footer />
      </div>



    </>

  );
}

export default App;
