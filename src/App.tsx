import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header'; 
import Footer from './components/Footer'; 
import AppRoutes from './routes';

import './App.css';

function App() {
  return (
    <Router>
      <Header /> 
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
