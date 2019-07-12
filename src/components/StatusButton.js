import React from 'react';
import { connect } from 'react-redux';

import { changeStatus } from '../actions'

import './StatusButton.css'

class StatusButton extends React.Component {
    handleClick = e => {
      e.stopPropagation();
      this.props.dispatch(changeStatus(this.props.item));
    }
  
    render() {
      return (
      <button className='statusButton' onClick={this.handleClick}>{this.props.item.status === 'Active' ? 'Pause' : 'Resume'}</button>   
      )
    }
  }

  export default connect()(StatusButton);