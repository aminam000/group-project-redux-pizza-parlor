import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import axios from 'axios';

function PizzaSelect(){
    // const params = useParams();
    const dispatch = useDispatch();
    const pizzaList = useSelector( store => store.pizzaList);
    console.log('pizzalist', pizzaList)
    
    
    return(
        <>
            {pizzaList.map((pizza, index) =>
                <li key={index}> 
                    {pizza.name}
                </li>
            )}
        </>
    );
}

export default PizzaSelect;
