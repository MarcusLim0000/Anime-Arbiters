import React from 'react';
import './WatchList.css'
import deleteWatchFromAirTable from '../../airtable/airTableDeleteWatch';

export default function WatchCard(props) {
  const handleDelete = async () => {
    try {
      await deleteWatchFromAirTable(props.id);
      props.onDelete();
    } catch (error) {
      console.error('Error deleting to watch anime:', error);
    }
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