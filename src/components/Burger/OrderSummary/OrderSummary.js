import React, { useEffect } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
const OrderSummary = (props) => {
    useEffect(() => {
        // Update the document title using the browser API
        console.log("Order Summary Did Update");
    });
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}: {props.ingredients[igKey]}
                    </span>
                </li>

            );

        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>The delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button
                btnType='Danger'
                clicked={props.purchaseCancelled}

            >CANCEL</Button>
            <Button
                btnType='Success'
                clicked={props.purchaseContinued}

            >CONTINUE</Button>
        </Aux>
    );

}

export default OrderSummary;