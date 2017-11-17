import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// This displays the whole App node and attaches it to the root div
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
var audio = document.getElementById('audio');
// var source = document.getElementById('audioSource');
// source.src = elm.getAttribute('data-value');

audio.load(); //call this to just preload the audio without playing
audio.play(); //call this to play the song right away
