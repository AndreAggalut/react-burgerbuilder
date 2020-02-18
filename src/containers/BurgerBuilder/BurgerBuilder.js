import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}; 

export default class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad :0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
    }

    updatePurchaseState (ingredients){

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el;
        } , 0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandle = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients:updatedIngredients,
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandle = ( type ) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return 0;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice  - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients:updatedIngredients,
        })
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        console.log("hello world");
        this.setState({purchasing: true});
        console.log("hello world");
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing : false});
    }

    purchaseContinueHandler = () =>{
        alert('You Can continue');
    }

    render() {
        const disabledInfo ={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary 
                ingredients= {this.state.ingredients}
                price = {this.state.totalPrice}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger 
                ingredients = {this.state.ingredients}/>
                <BuildControls 
                ingredientAdded ={this.addIngredientHandle} 
                ingredientRemoved = {this.removeIngredientHandle}
                disabled = {disabledInfo}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
                price = {this.state.totalPrice}
                />
            </>
        )
    }
}
