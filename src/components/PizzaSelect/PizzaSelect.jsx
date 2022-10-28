

import { useState } from 'react';
import { useSelector } from 'react-redux';

import PizzaSelectItem from '../PizzaSelectItem/PizzaSelectItem';

function PizzaSelect(){
    const [active, setActive] = useState(true);

    // const params = useParams();
    const pizzas = useSelector( store => store.pizzas);
    console.log('pizzas', pizzas)

    return(
        <>
            <h2>Step 1: Select Your Pizza</h2>

            {pizzas.map((pizza, index) => (
                <PizzaSelectItem 
                    key={index}
                    index={index}
                    pizza={pizza} />
            ))}
            <button> Next </button>
            
        </>
    );
}

export default PizzaSelect;

