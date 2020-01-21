import React, { Component } from 'react';

import '../BuildControl/BuildControl.css';

export default class BuildControl extends Component {
    render() {
        return (
            <div className='BuildControl'>
                <div className='Label'>{this.props.label}</div>
                <button className='Less' onClick={this.props.removed} disabled={this.props.disabled}>Less</button>
                <button className = 'More' onClick={this.props.added}>More</button>
            </div>
        )
    }
}
