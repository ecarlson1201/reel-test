import React from 'react';
import { connect } from 'react-redux';

import {changeExpand} from '../actions'

import './ItemPreview.css'

export class Item extends React.Component {
    changeExpand(index) {
        this.props.dispatch(changeExpand(index))
    }
    render() {
        return (
            <div className='row itemPreview' onClick={() => this.changeExpand(this.props)}>
                <div className='col-3 titleSection'>
                    <h1>{this.props.name}</h1>
                </div>
                <div className='col-2 statusSection'>
                    <div className={this.props.status}>{this.props.status}</div>
                </div>
            </div>
        )
    }
}

export default connect()(Item);