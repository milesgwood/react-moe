import React, { Component } from 'react';
import SongInfo from './Components/SongInfo';
import Controls from './Components/Controls';
import ReactAudioPlayer from 'react-audio-player';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      src: "",
      s_index: 0,
      set: [],
      show:{
        	"id": 1841,
        	"venue": "moedown 9, Snow Ridge Ski Area",
        	"showUrl": "moe2008-08-31.ka500.603a.722.flac16",
        	"showName": "moe. Live at moedown 9",
        	"date": null,
        	"score": 0,
        	"setList": [
        		{
        			"id": 29190,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d1.t01_Tailspin.flac",
        			"mtime": "1220584213",
        			"source": "original",
        			"format": "Flac",
        			"length": "773.53",
        			"track": "01",
        			"title": "Tailspin >>>",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29193,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d1.t02_Timmy_Tucker.flac",
        			"mtime": "1220584250",
        			"source": "original",
        			"format": "Flac",
        			"length": "1047.2",
        			"track": "02",
        			"title": "Timmy Tucker >>>",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29209,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d1.t03_Understand.flac",
        			"mtime": "1220584266",
        			"source": "original",
        			"format": "Flac",
        			"length": "438.01",
        			"track": "03",
        			"title": "Understand",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29205,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d1.t04_Queen_Of_Everything.flac",
        			"mtime": "1220584306",
        			"source": "original",
        			"format": "Flac",
        			"length": "497.78",
        			"track": "04",
        			"title": "Queen Of Everything",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29203,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d1.t05_Down_Boy.flac",
        			"mtime": "1220584338",
        			"source": "original",
        			"format": "Flac",
        			"length": "504.46",
        			"track": "05",
        			"title": "Down Boy",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29201,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d1.t06_MacIntyre_Range.flac",
        			"mtime": "1220584373",
        			"source": "original",
        			"format": "Flac",
        			"length": "638.84",
        			"track": "06",
        			"title": "MacIntyre Range * % >>>",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29191,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d1.t07_32_Things.flac",
        			"mtime": "1220584417",
        			"source": "original",
        			"format": "Flac",
        			"length": "955.97",
        			"track": "07",
        			"title": "32 Things *",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29200,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d2.t01_Mayor_Of_Moe.ville.flac",
        			"mtime": "1220587564",
        			"source": "original",
        			"format": "Flac",
        			"length": "773.06",
        			"track": "08",
        			"title": "Mayor Of Moe.ville",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29206,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d2.t02_George.flac",
        			"mtime": "1220587624",
        			"source": "original",
        			"format": "Flac",
        			"length": "607.61",
        			"track": "09",
        			"title": "George >>>",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29208,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d2.t03_Happy_Hour_Hero.flac",
        			"mtime": "1220587661",
        			"source": "original",
        			"format": "Flac",
        			"length": "840.21",
        			"track": "10",
        			"title": "Happy Hour Hero ^ >>>",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29199,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d2.t04_Recreational_Chemistry.flac",
        			"mtime": "1220587719",
        			"source": "original",
        			"format": "Flac",
        			"length": "1380.34",
        			"track": "11",
        			"title": "Recreational Chemistry",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29204,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d3.t01_New_York_City.flac",
        			"mtime": "1220587733",
        			"source": "original",
        			"format": "Flac",
        			"length": "374",
        			"track": "12",
        			"title": "New York City >>>",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29194,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d3.t02_George.flac",
        			"mtime": "1220587776",
        			"source": "original",
        			"format": "Flac",
        			"length": "746.09",
        			"track": "13",
        			"title": "George >>>",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29197,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d3.t03_Roll.flac",
        			"mtime": "1220587783",
        			"source": "original",
        			"format": "Flac",
        			"length": "165.98",
        			"track": "14",
        			"title": "Roll >>>",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29198,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d3.t04_Armageddon_Jig.flac",
        			"mtime": "1220587787",
        			"source": "original",
        			"format": "Flac",
        			"length": "93.52",
        			"track": "15",
        			"title": "Armageddon Jig >>>",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29196,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d3.t05_Strychnine_Waltz.flac",
        			"mtime": "1220587795",
        			"source": "original",
        			"format": "Flac",
        			"length": "180.76",
        			"track": "16",
        			"title": "Strychnine Waltz >>>",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29192,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d3.t06_Plane_Crash.flac",
        			"mtime": "1220587880",
        			"source": "original",
        			"format": "Flac",
        			"length": "1993.94",
        			"track": "17",
        			"title": "Plane Crash",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29195,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d4.t01_Wind_It_Up.flac",
        			"mtime": "1220587902",
        			"source": "original",
        			"format": "Flac",
        			"length": "490.72",
        			"track": "18",
        			"title": "Wind It Up",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29202,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d4.t02_Fireworks.flac",
        			"mtime": "1220587931",
        			"source": "original",
        			"format": "Flac",
        			"length": "627.85",
        			"track": "19",
        			"title": "Fireworks!!!",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		},
        		{
        			"id": 29207,
        			"showId": 1841,
        			"name": "moe2008-08-31.ka500.603a.722.d4.t03_Always_Look_On_The_Bright_Side_Of_Life.flac",
        			"mtime": "1220587942",
        			"source": "original",
        			"format": "Flac",
        			"length": "314.94",
        			"track": "20",
        			"title": "Always Look On The Bright Side Of Life",
        			"album": "2008-08-31 moedown 9, Snow Ridge Ski Area",
        			"score": 0,
        			"show": null
        		}
        	]
        }
    }
    this.playNextSong = this.playNextSong.bind(this)
    this.__getShowData = this.__getShowData.bind(this)
  }

  componentWillMount() {
    this.__getShowData(this);
  }

    componentDidMount(){
      var audio = document.getElementsByClassName('react-audio-player')[0];
      audio.addEventListener("ended", this.playNextSong);
    }

    playNextSong(){
      console.log("Playing Next Song")
      var set = this.state.show.setList;
      var s_index = (this.state.s_index + 1) % set.length;
      var src = 'http://archive.org/download/' + this.state.show.showUrl + '/' + this.state.show.setList[s_index].name;
      this.setState({src: src, s_index: s_index});
    }

  __getShowData(app) {
    fetch(
          `http://moebot.audio/justListen`,
          {   method: 'GET',
              mode: 'basic',
              headers: new Headers(
                 {"Content-Type": "application/json",
                  "Accept":"application/json"}
              )
           }
         ).then(function(response){
           console.log(response);
           return response.json();
         }).then(function(data) {
           var set = data.setList;
           var s_index = Math.floor((Math.random() * set.length) + 1);
           var src = 'http://archive.org/download/' + data.showUrl + '/' + data.setList[s_index].name;
           console.log("JSON Show Data")
           console.log(data);
           app.setState({show: data, src: src, s_index: s_index});
         });
       }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Listen to moe.</h2>
        </div>
        <SongInfo
          show={this.state.show}
          s_index={this.state.s_index}
        />
        <ReactAudioPlayer
          id='audio'
          src={this.state.src}
          autoPlay
          controls
        />
        <Controls playNextSong={this.playNextSong.bind(this)}/>
      </div>
    );
  }
}

export default App;
