import React from 'react';
import './WatchList.css'
import { deleteWatchFromAirTable, pushRecToAirtable } from '../../airtable/airTableFunctions';

export default function WatchCard(props) {
  const handleDelete = async () => {
    try {
      await deleteWatchFromAirTable(props.id);
      props.onDelete();
    } catch (error) {
      console.error('Error deleting to watch anime:', error);
    }
  };

  const deleteAndRec = async () => {
    try {
      await deleteWatchFromAirTable(props.id);
      props.onDelete();
    } catch (error) {
      console.error('Error deleting to watch anime:', error);
    }
    pushRecToAirtable(props)
  };

  return (
      <div className="watchCard">
        <h2>{props.title}</h2>
        <p>Score: {props.score}</p>
        <img src={props.image} alt={props.title} />
        <div className="buttons-container">
          <button className='delete' onClick={handleDelete}>Delete</button>
          <button className='RecAndDel'onClick={deleteAndRec}>Worth!!!</button>
        </div>
      </div>
  );
}