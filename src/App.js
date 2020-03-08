import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Slider from  './components/Slider.js';
import Info from './components/Info';
import WhatWeDo from './components/Whatwedo';



function App() {
  return (
    <div style={{maxWidth: "100%"}}>
      <Header/>
      <div style={{marginBottom: "50px"}}>

      </div>
        <Slider />
        <Info/>
        <WhatWeDo/>
    </div>
  );
}




export default App;
