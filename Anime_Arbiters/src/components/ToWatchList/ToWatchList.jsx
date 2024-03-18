import React from 'react';
import WatchCard from './WatchCard';
import './WatchList.css'

export default function ToWatchList({ watch, deleteWatch }) {
  return (
    <div className='watchContainer'>
        {watch.map((watchList, index) => (
          <WatchCard
            key={index}
            title={watchList.title}
            score={watchList.score}
            image={watchList.image}
            onDelete={() => deleteWatch(index)}
          />
        ))}
      </div>
  );
}