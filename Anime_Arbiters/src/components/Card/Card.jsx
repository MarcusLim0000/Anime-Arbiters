import React from 'react';
import './Card.css';

export default function Card({ title, score }) {
  return (
    <div className="result-item">
      <h2>{title}</h2>
      <p>Score: {score}</p>
      <div className="buttons-container">
        <button className='recommendButton'>Recommend</button>
        <button className='toWatchButton'>To watch</button>
      </div>
    </div>
  );
}
