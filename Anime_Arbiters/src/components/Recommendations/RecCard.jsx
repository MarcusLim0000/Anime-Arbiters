import React from 'react';
import './RecCard.css'

export default function RecCard(props) {
  const handleDelete = () => {
    // Call the onDelete function passed from the parent component
    props.onDelete();
  };

  return (
    <div className='rec-container'>
      <div className="recCard">
        <h2>{props.title}</h2>
        <p>Score: {props.score}</p>
        <img src={props.image} alt={props.title} />
        <div className="buttons-container">
          <button className='delete' onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
