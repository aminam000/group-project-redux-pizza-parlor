

import { useState } from 'react';
import { useSelector } from 'react-redux';

import PizzaSelectItem from '../PizzaSelectItem/PizzaSelectItem';

function PizzaSelect(){
    const [active, setActive] = useState(true);

    // const params = useParams();
    const pizzaList = useSelector( store => store.pizzaList);
    console.log('pizzalist', pizzaList)
    
    

    const addPizza = () => {
        console.log('add pizzza');
        setActive((previousStatus) => {
            return !previousStatus;
          });
    }
    const removePizza = () => {
        console.log('remove pizza');
        setActive((previousStatus) => {
            return !previousStatus;
          });
    }

    return(
        <>
            <h2>Step 1: Select Your Pizza</h2>

            {pizzaList.map((pizza, index) => (
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

