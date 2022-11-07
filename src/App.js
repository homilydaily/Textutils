import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import React from "react";
// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  return (
    <>
    {/* <BrowserRouter> */}
<Navbar title="TextUtils"/>
<div className="container my-3">
<TextForm heading="Enter the text to analyze below"/>

        {/* <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={}/>
        </Routes> */}

       
</div>
    {/* </BrowserRouter> */}



    </>
  );
}

export default App;
