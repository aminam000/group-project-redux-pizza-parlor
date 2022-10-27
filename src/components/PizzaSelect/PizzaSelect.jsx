import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import axios from 'axios';

function PizzaSelect(){
    const [active, setActive] = useState(true);

    // const params = useParams();
    const dispatch = useDispatch();
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
                
                <div key={index}> 
                <img src={pizza.image_path} />
                    <p>{pizza.name}</p>
                    <p>{pizza.description}</p>
                    <p>{pizza.price}</p>
                    
                    {active ? (
                        <button className="active"
                            onClick={() => addPizza()}> 
                            ADD
                        </button>
                    ) : (
                        <button className="inactive"
                            onClick={() => removePizza()}> 
                            REMOVE
                        </button>
                    )}
                    
                </div>
            ))}
            <button> Next </button>
        </>
    );
}

export default PizzaSelect;
