import React from 'react';
import WatchCard from './WatchCard';

export default function ToWatchList({ watch, deleteWatch }) {
  return (
    <div>
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