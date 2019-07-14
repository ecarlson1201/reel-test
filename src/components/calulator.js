import React from 'react';
import { connect } from 'react-redux';

import {
    clickCalcItem,
    clickCalcPrice,
    clickCalculate
} from '../actions'

import './calculator.css';

export class Calculator extends React.Component {
    clickCalcItem(num) {
        this.props.dispatch(clickCalcItem(num));
    };

    clickCalcPrice(num) {
        this.props.dispatch(clickCalcPrice(num));
    };

    clickCalculate(num) {
        this.props.dispatch(clickCalculate());
    };

    render() {
        const handleCalcPrice = () => {
            if (this.props.calcPrice === 0) {
                return 'Current Amount Saved';
            } else if (this.props.calcPrice === 1) {
                return 'Amount Remaining';
            } else if (this.props.calcPrice === 2) {
                return 'Total Price';
            };
        };
        const handleCalcItem = () => {
            if (this.props.calcItem === 0) {
                return 'Active Items'
            } else if (this.props.calcItem === 1) {
                return "Expanded Items"
            } else if (this.props.calcItem === 2) {
                return "All Items";
            };
        };
        return (
            <div className='calcContainer'>
                <div className="dropdown">
                    <button id='calcPriceButton' className="dropbtn">{handleCalcPrice()}</button>
                    <ul id='calcPriceList' className="dropdown-content calcPriceList">
                        <li className='sort-list' onClick={() => this.clickCalcPrice(0)}>Current Amount Saved</li>
                        <li className='sort-list' onClick={() => this.clickCalcPrice(1)}>Amount Remaining</li>
                        <li className='sort-list' onClick={() => this.clickCalcPrice(2)}>Total Price</li>
                    </ul>
                </div>
                <span className='calculator-text'>of</span>
                <div className="dropdown">
                    <button id='calcItemButton' className="dropbtn">{handleCalcItem()}</button>
                    <ul id='calcItemList' className="dropdown-content">
                        <li className='sort-list' onClick={() => this.clickCalcItem(0)}>Active Items</li>
                        <li className='sort-list' onClick={() => this.clickCalcItem(1)}>Expanded Items</li>
                        <li className='sort-list' onClick={() => this.clickCalcItem(2)}>All Items</li>
                    </ul>
                </div>
                <button id='calcButton' className='dropbtn' onClick={() => this.clickCalculate()}>Calculate</button>
                <span id='calculated-amount'>${this.props.calculated}</span>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    calcPrice: state.calcPrice,
    calcItem: state.calcItem,
    calculated: state.calculated
});

export default connect(mapStateToProps)(Calculator);