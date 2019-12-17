import React, { Component } from 'react'

import Aux from '../../higherordercomponent/Aux';
import Burger from '../../components/Burger/Burger'

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
        }
    }

    render() {
        return (
            <>
                <Burger ingredients = {this.state.ingredients}/>
                <div>Build Controls</div>
            </>
        )
    }
}