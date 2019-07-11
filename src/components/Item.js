import React from 'react';
import { connect } from 'react-redux';

import { changeStatus } from '../actions'

import placeholder from '../assets/placeholder.png'

import './Item.css'

export class Item extends React.Component {
    changeStatus(index) {
        this.props.dispatch(changeStatus(index))
    }
    render() {
        return (
            <div className='row item'>
                <div className='col-3 titleSection'>
                    <h1>{this.props.name}</h1>
                    <img className='placeholder' src={placeholder} alt="placeholder" />
                </div>
                <div className='col-2 statusSection'>
                    <div>{this.props.status}</div>
                    <button onClick={() => this.changeStatus(this.props)}>{this.props.status === 'Active' ? 'Pause' : 'Resume'}</button>
                </div>
                <div className='col-6 progressSection'>
                    <span className='percentSaved'>{this.props.percentSaved}%</span>
                    <progress className='progressBar' value={this.props.percentSaved} max='100' ></progress>
                </div>
                <div className='col-1 totalSection'>
                    Total: ${this.props.total} <br />
                </div>
            </div>
        )
    }
}

export default connect()(Item);