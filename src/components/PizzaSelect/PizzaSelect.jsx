
import {useEffect} from 'react';

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
    
    const handleActive = () => {
        setActive((previousStatus) => {
          return !previousStatus;
        });
      };

    return(
        <>
            {pizzaList.map((pizza, index) => (
                
                <div key={index}> 
                <img src={pizza.image_path} />
                    <p>{pizza.name}</p>
                    <p>{pizza.description}</p>
                    <p>{pizza.price}</p>
                    
                    {active ? (
                        <button className="active"
                            onClick={() => handleActive()}> 
                            ADD
                        </button>
                    ) : (
                        <button className="inactive"
                            onClick={() => handleActive()}> 
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

