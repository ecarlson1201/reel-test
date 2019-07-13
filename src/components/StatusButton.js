import React from 'react';
import { connect } from 'react-redux';

import { changeStatus } from '../actions'

import playIcon from '../assets/play-icon.png'
import pauseIcon from '../assets/pause-icon.png'

import './statusButton.css'

class StatusButton extends React.Component {
  handleClick = e => {
    e.stopPropagation();
    this.props.dispatch(changeStatus(this.props.item));
  };
  
  render() {
    const handlePlayPause = () => {
      if (this.props.item.status === "Paused") {
        return playIcon;
      } else {
        return pauseIcon;
      };
    };
    return (
      <button className='statusButton' onClick={this.handleClick}><img className='button-image' src={handlePlayPause()} alt="play-icon" /></button>
    );
  };
};

export default connect()(StatusButton);