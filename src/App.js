
import Home from './Pages/Home/Home';
import Sign from './Pages/Sign/Sign';
import './App.css';
import React from "react";



import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/Netflix" />} />
          <Route path='/Netflix' element = {<Home/>}/>
          <Route path='/sign' element = {<Sign/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
