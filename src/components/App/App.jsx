import React from 'react';
import axios from 'axios';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import PizzaSelect from '../PizzaSelect/PizzaSelect';
import CustomerForm from '../CustomerForm/CustomerForm';


import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
        method: 'GET', 
        url: `/api/pizza/`
    })
        .then((response) => {
            console.log(' the pizzas', response.data)

            dispatch({
                type: 'ALL_PIZZAS',
                payload: response.data
            });
        })
        .catch((err) => {
            console.error('error in GET pizzas', err);
        });
}), [];



  return (
    <Router>

      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>


        </header>
    
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>


      <Route path="/pizzaSelect" exact>
        <ul>
          <PizzaSelect />
        </ul>
      </Route>

      <Route path="/customerForm" exact>
        <CustomerForm />
      </Route>

      <Route path="/admin" exact>
        <Admin />
      </Route>
      
      

      </div>
    </Router>

    

  )};
    
export default App;
