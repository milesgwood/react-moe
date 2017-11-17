import React, { Component } from 'react';

class SongInfo extends Component {
  render() {
    console.log("SongInfo props")
    console.log(this.props);
    return (
      <div className="SongInfo">
        <h3>{this.props.show.setList[this.props.s_index].title}</h3>
        <div>{this.props.show.showName}</div>
      </div>
    );
  }
}

export default SongInfo;
