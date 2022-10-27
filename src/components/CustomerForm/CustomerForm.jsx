import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import axios from 'axios';


function CustomerForm() {

    const dispatch = useDispatch(); //allows action request to be sent to reducer
    const pizzas = useSelector(store => store.pizzas); // allows access to redux store

    const [customer, setCustomer] = useState({
        customer_name: "",
        street_address: "",
        city: "",
        zip: "",
        type: "",
        total: 0,
        time: '' /// timestamp
    })

    ///  TODO GET CART PRICE INFO, DISPLAY



    //SET NAME
    const handleNameChange = (event) => {
        setCustomer({
            ...customer,
            customer_name: event.target.value
        });
        console.log(customer)
    };
    //SET STREET ADDRESS
    const handleStreetAddressChange = (event) => {
        setCustomer({
            ...customer,
            street_address: event.target.value
        });
        console.log(customer)
    };
    //SET CITY
    const handleCityChange = (event) => {
        setCustomer({
            ...customer,
            city: event.target.value
        });
        console.log(customer)
    };
    //SET ZIP
    const handleZipChange = (event) => {
        setCustomer({
            ...customer,
            zip: event.target.value
        });
        console.log(customer)
    };
    //SET TYPE
    // TODO -- GET VALUE FROM RADIO BUTTONS
    const handleTypeChange = (event) => {
        setCustomer({
            ...customer,
            type: event.target.value
        });
        console.log(customer)
    };
    console.log('outside of functions', customer)


    ///complete handleSubmit for form. completes POST/Dispatch

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios({
            method: 'POST',
            url: '/api/order',
            data: customer
        })
        .then(response=>{
            console.log(response.data);

            dispatch({
                type: 'ADD_CUSTOMER',
                payload: response.data
            })
        })
        .catch(error=>{
            console.log('POST failed:', error)
        });
    }










    return (<>


        <h1>Here on the customer form</h1>

        {/* /// ADD onSubmit */}
        <form onSubmit={handleSubmit}>

            {/* INPUTS FOR CUSTOMER INFO */}
            <input
                onChange={handleNameChange}
                type="text"
                placeholder='Name'
            />
            <input
                onChange={handleStreetAddressChange}
                type="text"
                placeholder="Street Address"

            />
            <input
                onChange={handleCityChange}
                type="text"
                placeholder='City'

            />
            <input
                onChange={handleZipChange}
                type="text"
                placeholder='Zip'
            />


            {/* radio buttons for delivery type */}
            {/* ⬇️ TODO----->>GET VALUE FROM RADIO BUTTONS */}
            <div onChange={handleTypeChange}>
                <input
                    type="radio"
                    name="type"
                    value="pickup"
                />
                <label htmlFor="pickup">Pickup</label>
            
                <input
                    type="radio"
                    name="type"
                    value="delivery"
                />
                <label htmlFor="delivery">Delivery</label>
            </div>
<button type='submit'>Next</button>
        </form>
    </>);
};

export default CustomerForm;