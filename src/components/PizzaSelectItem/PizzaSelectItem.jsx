import { useDispatch } from 'react-redux';
import { useState} from 'react';

function PizzaSelectItem({pizza}, {index}){
    const [active, setActive] = useState(true);
    const dispatch = useDispatch();

    const addPizza = () => {
        console.log('add pizzza');
        setActive((previousStatus) => {
            return !previousStatus;
          });
        dispatch({
            type: 'ADD_TO_CART',
            payload: pizza
        })
    }
    
    const removePizza = () => {
        console.log('remove pizza');
        setActive((previousStatus) => {
            return !previousStatus;
          });

          dispatch({
            type: 'REMOVE_FROM_CART',
            payload: pizza
          })
    }

    return(
        <>
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
        </>
    );
}

export default PizzaSelectItem;