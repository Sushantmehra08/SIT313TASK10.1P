import React, { useState } from 'react';
import './App.css';
import Subscribe from './Subscribe.jsx';
import Footer from './Footer.jsx';

function App() {
  const [text,setText] = useState('')
  const changeText = () => {
      setText(text)
  }
  return <div className= 'header-div'>
  <br></br>
  
   <br></br>
   <Subscribe />
   <br></br>
  <Footer/>
  </div>
}

export default App;