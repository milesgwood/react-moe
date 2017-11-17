import React, { Component } from 'react';

class Controls extends Component {
  render() {
    console.log("Controls props")
    console.log(this.props);
    return (
      <div className="Controls">
        <button name="Next" onClick={this.props.playNextSong}>Next Song</button>
      </div>
    );
  }
}

export default Controls;
