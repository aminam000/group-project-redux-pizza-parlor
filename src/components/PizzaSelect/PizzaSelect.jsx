import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function PizzaSelect(){

    const pizzaList = useSelector( store => store.pizzaList);
    const dispatch = useDispatch();
    
    useEffect(() => {
        axios({
            method: 'GET', 
            url: '/api/pizza'
        })
            .then((response) => {
                console.log(' the pizzas', response.data)

                dispatch({
                    type: 'ALL_PIZZAS',
                    payload: response.data
                });
            })
            .catch((err) => {
                console.error('error in GET pizzas', err)
            });
    }), [];


    return(
        <>
            <h1> {pizzaList.name}</h1>
        </>
    );
}

export default PizzaSelect;
