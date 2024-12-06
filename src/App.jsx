// import React from "react";
//import { BrowserRouter as Router, Routes,Route } from "react-router-dom"; // tumne react router dom install kiya jo usko bad me uninstall kardena
// import Projects from "./components/Projects";
// import TechStacks from "./components/TechStacks";

import Home from "./components/Home";

export default function App() {
  return (
    <>

    {/* <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/components/Projects" element={<Projects/>}/>
        <Route exact path="/components/TechStacks" element={<TechStacks/>}/>
      </Routes>
    </Router> */}

    <Home/>
    
    </>
  )
}