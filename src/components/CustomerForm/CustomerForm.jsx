import { useSelector, useDispatch } from 'react-redux';


function CustomerForm() {
    const dispatch = useDispatch();
    const pizzas = useSelector(store => store.pizzas);









    return (<>


        <h1>Here on the customer form</h1>

        {/* /// ADD onSubmit */}
        <form >
            <input
                type="text"
                placeholder='Name'
                onChange={handleNameChange}
            />
            <input
                type="text"
                placeholder="Street Address"
                onChange={handleStreetAddressChange}
            />
            <input
                type="text"
                placeholder='City'
                onChange={handleCityChange}
            />
            <input
                type="text"
                placeholder='Zip'
                onChange={handleZipChange}
            />

        </form>
    </>);
};

export default CustomerForm;