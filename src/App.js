import React from 'react';
import NavBar from '../src/components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
