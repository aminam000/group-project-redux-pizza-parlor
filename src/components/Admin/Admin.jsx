import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import React, { useState } from 'react';
import CustomerForm from '../CustomerForm/CustomerForm';
import Checkout from '../Checkout/Checkout';


function Admin(){
const dispatch = useDispatch();
const info = useSelector(store => store.info);



    useEffect(() => {
        // On page load.....
        showPizza();
      }, []);
    
      const showPizza = () => {
        console.log('in GET showPizza Admin');
    
        axios({
          method: 'GET',
          url: '/api/order'
        
        })
          .then((response) => {
     
            dispatch({
              type: 'ALL_PIZZA',
              payload: response.data
            });
          })
          .catch((err) => {
            console.error('GET showpizza admin failed :(((', err);
          });
      }



  //no input is being taken, just displaying to the dom

    return(

        <>
        <h1>Prime Pizza Orders</h1>
        <table>
            <thead>
            <tbody>
                    {info.map((order) => {
                        return ( 
                            <tr key={order.id} >
                                <th>Name</th>
                                <th>Time Order Placed</th>
                                <th>Type</th>
                                <th>Cost</th>

                                <td>{order.name}</td>
                                <td>{order.time}</td>
                                <td>{order.type}</td>
                                <td>{order.price}</td>
                            </tr>
                        )
                    })};
                </tbody>
            </thead>
            
        </table>
        </>
    )
}

export default Admin;