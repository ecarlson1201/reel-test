import React from 'react';
import { connect } from 'react-redux';

import Item from './item'
import ItemPreview from './itemPreview'

import '../float-grid.css'

export function ItemList(props) {
    const items = props.data.map((item, index) => {
        if (item.visible === true && item.expanded === true) {
            return <li key={index}>
                <Item index={index}{...item} />
            </li>
        } else if (item.visible === true && item.expanded === false) {
            return <li key={index}>
                <ItemPreview index={index}{...item} />
            </li>
        };
    });
    return (
        <div className='board'>
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