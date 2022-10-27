import { useSelector } from 'react-redux';

function Checkout({info}) {
    console.log('in Checkout');
    // const dipatch = useDispatch();
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

        axios.post({
            method: 'POST',
            url: '/api/order',
            data: custInfo
        })
          .then(() => {
            console.log('in POST /orders')
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
                    })}
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