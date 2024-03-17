import React, { useContext } from 'react';
import './Card.css';
import HandleRecContext from '../../HandleRecContext';
import HandleWatchContext from '../../HandleWatchContext';

export default function Card(props) {
  const { setRecs } = useContext(HandleRecContext);
  const { setWatch } = useContext(HandleWatchContext);

  const recommend = () => {
    const recData = {
      title: props.title,
      score: props.score,
      image: props.image
    };
    setRecs(prevRecs => [...prevRecs, recData]);
  };

  const toWatch = () => {
    const watchData = {
      title: props.title,
      score: props.score,
      image: props.image
    };
    setWatch(prevWatch => [...prevWatch, watchData]);
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
