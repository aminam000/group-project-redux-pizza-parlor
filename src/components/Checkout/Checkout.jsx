import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Checkout({info}) {
    // console.log('in Checkout');
    const history = useHistory();
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);

    let custInfo = {
        customer_name: info.name,
        street_address: info.address,
        city: info.city,
        zip: info.zip,
        type: info.type,
        total: info.total,
    }

    function handleCheckout() {
        console.log('in handleCheckout');
        alert('Submitted Order!')

        axios.post({
            method: 'POST',
            url: '/api/order',
            data: custInfo
        })
          .then(() => {
            // Clears cart
            dispatch({
                type: 'SET_CLEAR_CART'
            });
            // Sends back to first page
            history.push('/');
          })
          .catch((err) => {
            console.log('POST error', err);
          });
    }

    return (
        <>
            <div>
            <h2>Step 3: Checkout</h2>
            </div>
            <ul>
                <li>{info.name}</li>
                <li>{info.address}</li>
                <li>{info.city}</li>
                <li>{info.type}</li>
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((pizzaItem) => {
                        return ( 
                            <tr key={pizzaItem.id} >
                                <td>{pizzaItem.name}</td>
                                <td>{pizzaItem.price}</td>
                            </tr>
                        )
                    })};
                </tbody>
            </table>

            <h3>Total:</h3>

            <button
                type='submit'
                onClick={handleCheckout}
            >
                Checkout
            </button>
            
        </>
    );
}

export default Checkout;