import React from 'react';
import { connect } from 'react-redux';

import { changeExpand } from '../actions';
import StatusButton from './statusButton';

import './itemPreview.css';

export class Item extends React.Component {
    changeExpand(index) {
        this.props.dispatch(changeExpand(index))
    };
    render() {
        return (
            <div className='row itemPreview' onClick={() => this.changeExpand(this.props)}>
                <div className='col-3'>
                    <h1>{this.props.name}</h1>
                </div>
                    <StatusButton item={this.props}/>
                <div className='col-2 statusSection'>
                    <div className={this.props.status}>{this.props.status} <span className='percent-header'>({this.props.percentSaved}%)</span></div>
                </div>
            </div>
        );
    };
};

export default connect()(Item);