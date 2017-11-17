import React, { Component } from 'react';

class Player extends Component {
  render() {
    console.log("props in Player:")
    console.log(this.props);
    return (
      <div className="Player">
        <video id="audio" controls autoPlay name="media" crossOrigin="anonymous" preload="auto">
          <source src={this.props.src} type="audio/flac"/>
        </video>
      </div>
    );
  }
}

export default Player;
