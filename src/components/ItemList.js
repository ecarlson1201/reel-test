import React from 'react';
import { connect } from 'react-redux';

import Item from './Item'

import '../float-grid.css'
import './ItemList.css'

export function ItemList(props) {
    const items = props.data.map((item, index) => {
        if (item.visible === true) {
            return <li key={index}>
                <Item index ={index}{...item} />
            </li>
        };
    });
    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps)(ItemList);