import React, { Component } from 'react'

import '../BuildControls/BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

export default class BuildControls extends Component {
    
    render() {
        return (
            <div className= 'BuildControls'>
                {controls.map(ctrl => (
                    <BuildControl 
                    key ={ctrl.label} 
                    label={ctrl.label} 
                    added={() => this.props.ingredientAdded(ctrl.type)}
                    removed={() => this.props.ingredientRemoved(ctrl.type)}
                    disabled={this.props.disabled[ctrl.type]}
                    />
                ))}
                
            </div>
        )
    }
}
