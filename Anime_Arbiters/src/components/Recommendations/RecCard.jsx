import React from 'react';
import './Rec.css'
import { deleteRecFromAirTable } from '../../airtable/airTableFunctions';

export default function RecCard(props) {
  const handleDelete = async () => {
    try {
      await deleteRecFromAirTable(props.id);
      props.onDelete();
    } catch (error) {
      console.error('Error deleting recommendation:', error);
    }
  };

  return (
      <div className="recCard">
        <h2>{props.title}</h2>
        <p>Score: {props.score}</p>
        <img src={props.image} alt={props.title} />
        <div className="buttons-container">
          <button className='delete' onClick={handleDelete}>Delete</button>
        </div>
      </div>
  );
}
