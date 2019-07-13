import React from 'react';
import { connect } from 'react-redux';

import { changeStatus, changeExpand } from '../actions'

import placeholder from '../assets/placeholder.png'
import StatusButton from './statusButton'

import './item.css'

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

        const progressCalc = index => {
            let total = parseInt(this.props.data[index].total);
            let percent = parseInt(this.props.data[index].percentSaved) / 100;
            let remaining = total - total * percent;
            return remaining.toFixed(2);
        };
        return (
            <div className='row item' onClick={() => this.changeExpand(this.props)}>
                <div className='col-3 titleSection'>
                    <h1 className='expanded-title'>{this.props.name}</h1>
                    <span className='percentSaved'>Saved: {this.props.percentSaved}%</span>
                    <span>${progressCalc(this.props.index)} remaining</span><br />
                </div>
                <div className='col-3 statusSection'>
                    <img className='placeholder' src={placeholder} alt="placeholder" />
                </div>
                <div className='col-6 progressSection'>
                <StatusButton item={this.props} />
                    <div className='progress-bar'>
                        <span className='progress-value' style={progressColor()}></span>
                    </div>
                    <strong className='totalSection'> Total:${this.props.total}</strong>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps)(Item);