import React, { useEffect, useState } from 'react';
import WatchCard from './WatchCard';
import './WatchList.css';
import { getWatchFromAirTable } from '../../airtable/airTableFunctions';

export default function ToWatchList() {
  const [watch, setWatch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWatchFromAirTable();
        const watchList = data.records;
        setWatch(watchList);
      } catch (error) {
        console.error('Error fetching Watch List:', error);
        setWatch([]);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      const data = await getWatchFromAirTable();
      const watchList = data.records;
      setWatch(watchList);
    } catch (error) {
      console.error('Error deleting watch:', error);
    }
  };

  return (
    <div className='watchContainer'>
      {watch.map((watchItem, index) => (
        <WatchCard
          key={index}
          title={watchItem.fields.title}
          score={watchItem.fields.score}
          image={watchItem.fields.image}
          id={watchItem.id}
          onDelete={() => handleDelete(watchItem.id)}
        />
      ))}
    </div>
  );
}
