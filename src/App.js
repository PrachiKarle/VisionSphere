import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import EyeGlasses from "./EyeGlasses";
import Kids from "./Kids";
import Contact from "./Contact";
import ScreenGlasses from "./ScreenGlasses";
import SunGlasses from "./SunGlasses";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Header/>}>

              <Route index element={<Home/>}/>
              <Route path="/eye" element={<EyeGlasses/>}/>
              <Route path="/screen" element={<ScreenGlasses/>}/>
              <Route path="/kids" element={<Kids/>}/>
              <Route path="/sun" element={<SunGlasses/>}/>

              <Route path="/contact" element={<Contact/>}/>
              <Route path="/account" element={<Sign/>}/>
              <Route path="/cart" element={<Cart/>}/>
              
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
