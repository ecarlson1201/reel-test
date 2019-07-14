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
            <div className='itemContainer'>
                <div className='row itemPreview' onClick={() => this.changeExpand(this.props)}>
                    <div className='col-6'>
                        <h1 className='previewHeader'>{this.props.name}</h1>
                    </div>
                    <div className='col-6 statusSection'>
                        <StatusButton item={this.props} />
                        <div className={this.props.status}>{this.props.status} <span className='percent-header'>({this.props.percentSaved}%)</span></div>
                    </div>
                </div>
            </div>
        );
    };
};

export default connect()(Item);