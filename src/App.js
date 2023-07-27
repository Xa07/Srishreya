import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
function App(){
  return(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
