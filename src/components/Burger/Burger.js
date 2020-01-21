import React from 'react';

import '../Burger/Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
           return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        
        }); // an array for two ingredientss
    })
    .reduce((arr,curr) => {
        return arr.concat(curr);
    }, []);
    if(transformedIngredient.length === 0){
        transformedIngredient= <p>Please start adding ingredients!</p>
    }
    console.log(transformedIngredient)
        return (
            <div className='Burger'>
                <BurgerIngredient type ="bread-top"/>
                {transformedIngredient}
                <BurgerIngredient type ="bread-bottom"/>
                
            </div>
        )
    }
export default burger;
