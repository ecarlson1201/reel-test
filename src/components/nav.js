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
    searchList,
    expandAll
} from '../actions'

import './nav.css'

export class Search extends React.Component {
    sortListAZ() {
        this.props.dispatch(sortListAZ());
    };
    sortListZA() {
        this.props.dispatch(sortListZA());
    };
    sortListPercentHighLow() {
        this.props.dispatch(sortListPercentHighLow());
    };
    sortListPercentLowHigh() {
        this.props.dispatch(sortListPercentLowHigh());
    };
    sortListTotalHighLow() {
        this.props.dispatch(sortListTotalHighLow());
    };
    sortListTotalLowHigh() {
        this.props.dispatch(sortListTotalLowHigh());
    };
    sortListStatusActive() {
        this.props.dispatch(sortListStatusActive());
    };
    sortListStatusPaused() {
        this.props.dispatch(sortListStatusPaused());
    };
    searchList(input) {
        const text = this.textInput.value.trim();
        this.props.dispatch(searchList(text));
    };
    expandAll() {
        this.props.dispatch(expandAll());
    };
    render() {
        return (
            <div className='row'>
                <nav role='navigation' className='searchSort'>
                    <label htmlFor="search-input">
                        <input name='search-input' id='search-input' onFocus={(e) => e.target.placeholder = ""}
                            onBlur={(e) => e.target.placeholder = "Search"} placeholder='Search'
                            type="text" ref={input => this.textInput = input} onKeyUp={(input) => this.searchList(input)} />
                    </label>

                    <button id='expandAll' onClick={() => this.expandAll()}>
                        {this.props.expandAll === false ? "Expand All" : "Collapse All"}</button>
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
                </nav>
            </div>

        );
    };
};

const mapStateToProps = state => ({
    expandAll: state.expandAll
});

export default connect(mapStateToProps)(Search);