import React from 'react';
import './Card.css';
import { pushRecToAirtable } from '../../airtable/airTableFunctions';
import { pushWatchToAirtable } from '../../airtable/airTableFunctions';

export default function Card(props) {

  const handleRec = (recData) => {
    pushRecToAirtable(recData)
  };

  const handleWatch = (watchData) => {
    pushWatchToAirtable(watchData)
  };

  const recommend = () => {
    const recData = {
      title: props.title,
      score: props.score,
      image: props.image
    };
    handleRec(recData);
  };

  const toWatch = () => {
    const watchData = {
      title: props.title,
      score: props.score,
      image: props.image
    };
    handleWatch(watchData);
  };

  return (
    <div className="result-item">
      <h2>{props.title}</h2>
      <p>Score: {props.score}</p>
      <img src={props.image} alt={props.title} />
      <div className="buttons-container">
        <button className='recommendButton' onClick={recommend}>Recommend</button>
        <button className='toWatchButton' onClick={toWatch}>To watch</button>
      </div>
    </div>
  );
}
