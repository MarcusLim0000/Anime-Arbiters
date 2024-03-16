import React from 'react';
import './Card.css';

export default function Card(props) {

  return (
    <div className="result-item">
      <h2>{props.title}</h2>
      <p>Score: {props.score}</p>
      <img src={props.image} />
      <div className="buttons-container">
        <button className='recommendButton'>Recommend</button>
        <button className='toWatchButton'>To watch</button>
      </div>
    </div>
  );
}
