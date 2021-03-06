import React from 'react';
import { connect } from 'react-redux';

import { changeStatus, changeExpand } from '../actions';

import placeholder from '../assets/placeholder.png';
import StatusButton from './statusButton';
import collapseIcon from '.././assets/collapse-icon-2.png'

import './item.css';

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
                color = '#61c056'
            } else {
                color = '#ee4d4d'
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
            <div className='itemContainer'>
                <div className='row item' onClick={() => this.changeExpand(this.props)}>
                    <div className='col-6 titleSection'>
                        <img className='placeholder' src={placeholder} alt="placeholder" />
                        <h1 className='expanded-title'>{this.props.name}</h1>
                    </div>
                    <div className='col-6 infoContainer'>
                            <img className='collapseIcon' src={collapseIcon} alt="collapseIcon"/>
                        <StatusButton item={this.props} />
                        <div className='infoSection'>
                            <span className='percentSaved'><strong>Total Price:</strong> ${parseInt(this.props.total).toFixed(2)}</span>
                            <span className='percentSaved'><strong>Saved:</strong> {this.props.percentSaved}%</span>
                            <span className='percentSaved'><strong>Remaining:</strong> ${progressCalc(this.props.index)}</span>
                        </div>
                    </div>
                </div>
                <div className='row progressSection'>
                    <div className='progress-bar'>
                        <span className='progress-value' style={progressColor()}></span>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps)(Item);