import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const constrols = [
    { label: "Salad", type: 'salad' },
    { label: "Meat", type: 'meat' },
    { label: "Bacon", type: 'bacon' },
    { label: "Cheese", type: 'cheese' }
]


const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {constrols.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                //type={ctrl.type} unnecessary looping
                added={() => props.ingredientAdded(ctrl.type)}
                remove={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />

        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >ORDER NOW</button>
    </div>
);

export default buildControls;