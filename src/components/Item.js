import React from 'react';
import { connect } from 'react-redux';

import { changeStatus, changeExpand } from '../actions'

import placeholder from '../assets/placeholder.png'
import StatusButton from './StatusButton'

import './Item.css'

export class Item extends React.Component {
    changeStatus(index) {
        this.props.dispatch(changeStatus(index));
    };
    changeExpand(index) {
        this.props.dispatch(changeExpand(index));
    };

    render() {
        const progressColor = () => {
            let color;
            if (this.props.status === 'Active') {
                color = '#b9dbb9'
            } else {
                color = '#e7c1c1'
            };
            return {
                width: `${this.props.percentSaved}%`,
                backgroundColor: color
            };
        };

        return (
            <div className='row item' onClick={() => this.changeExpand(this.props)}>
                <div className='col-3 titleSection'>
                    <h1>{this.props.name}</h1>
                    <img className='placeholder' src={placeholder} alt="placeholder" />
                </div>
                <div className='col-2 statusSection'>
                    <span className='percentSaved'>Progress: {this.props.percentSaved}%</span>
                    <StatusButton item={this.props} />
                </div>
                <div className='col-6 progressSection'>
                    <div className='progress-bar'>
                        <span className='progress-value' style={progressColor()}></span>
                    </div>
                </div>
                <div className='col-1 totalSection'>
                    <strong>Total: ${this.props.total}</strong>
                </div>
            </div>
        );
    };
};

export default connect()(Item);