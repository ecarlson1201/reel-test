import React from 'react';
import { connect } from 'react-redux';

import {
    sortListAZ,
    sortListZA,
    sortListPercentHighLow,
    sortListPercentLowHigh,
    sortListTotalHighLow,
    sortListTotalLowHigh,
    sortListStatusActive,
    sortListStatusPaused,
    searchList
} from '../actions'

import './SearchSort.css'

export class Search extends React.Component {
    sortListAZ() {
        this.props.dispatch(sortListAZ())
    };
    sortListZA() {
        this.props.dispatch(sortListZA())
    };
    sortListPercentHighLow() {
        this.props.dispatch(sortListPercentHighLow())
    };
    sortListPercentLowHigh() {
        this.props.dispatch(sortListPercentLowHigh())
    };
    sortListTotalHighLow() {
        this.props.dispatch(sortListTotalHighLow())
    };
    sortListTotalLowHigh() {
        this.props.dispatch(sortListTotalLowHigh())
    };
    sortListStatusActive() {
        this.props.dispatch(sortListStatusActive())
    }
    sortListStatusPaused() {
        this.props.dispatch(sortListStatusPaused())
    }
    searchList(input) {
        const text = this.textInput.value.trim()
        this.props.dispatch(searchList(text))
    }
    render() {
        return (
            <div className='row'>
                <div className='col-12 searchSort'>
                    <div className='col-6'>
                        <div className='search'><span>Search: </span>
                            <input type="text" ref={input => this.textInput = input} onKeyUp={(input) => this.searchList(input)} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="dropdown">
                            <button className="dropbtn">Sort By</button>
                            <ul className="dropdown-content">
                                <li className='sort-list' onClick={() => this.sortListAZ()}>Alphabetically (A-Z)</li>
                                <li className='sort-list' onClick={() => this.sortListZA()}>Alphabetically (Z-A)</li>
                                <li className='sort-list' onClick={() => this.sortListPercentHighLow()}>% Saved (High-Low)</li>
                                <li className='sort-list' onClick={() => this.sortListPercentLowHigh()}>% Saved (Low-High)</li>
                                <li className='sort-list' onClick={() => this.sortListTotalHighLow()}>Total (High-Low)</li>
                                <li className='sort-list' onClick={() => this.sortListTotalLowHigh()}>Total (Low-High)</li>
                                <li className='sort-list' onClick={() => this.sortListStatusActive()}>Status (Active)</li>
                                <li className='sort-list' onClick={() => this.sortListStatusPaused()}>Status (Paused)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
};

export default connect()(Search);