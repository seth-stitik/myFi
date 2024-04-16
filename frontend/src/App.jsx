import React from 'react';
import Navbar from './components/Navbar.jsx';
import BudgetForm from './components/BudgetForm.jsx';
import './App.css'

function App () {
  return (
    <div className="App">
      <Navbar />
      <BudgetForm />
    </div>
  );
}

export default App
