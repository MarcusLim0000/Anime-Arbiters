import React from 'react';
import './WatchList.css'

export default function WatchCard(props) {
  const handleDelete = () => {
    // Call the onDelete function passed from the parent component
    props.onDelete();
  };

  return (
      <div className="watchCard">
        <h2>{props.title}</h2>
        <p>Score: {props.score}</p>
        <img src={props.image} alt={props.title} />
        <div className="buttons-container">
          <button className='delete' onClick={handleDelete}>Delete</button>
        </div>
      </div>
  );
}