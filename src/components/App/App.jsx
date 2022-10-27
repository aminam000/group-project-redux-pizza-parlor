import React from 'react';
import axios from 'axios';
import './App.css';
import {Route, HashRouter as Router} from 'react-router-dom';
import PizzaSelect from '../PizzaSelect/PizzaSelect';
import CustomerForm from '../CustomerForm/CustomerForm';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
    
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
    

      <Route path="/pizzaSelect" exact>
        <PizzaSelect />
      </Route>

      <Route path="/customerForm" exact>
        <CustomerForm />
      </Route>
      
      

      </div>
    </Router>
  );
}

export default App;
