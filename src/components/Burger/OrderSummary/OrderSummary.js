import React from 'react'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
        <li key={igKey}>
            <span style ={{textTransform: 'capitalize'}}>{igKey}:{props.ingredients[igKey]}</span>
        </li>
        )
    })
    return(
        <>
            <h3>Your Order</h3>
            <p>A Delicious with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>

        </>
    )
}

export default orderSummary;