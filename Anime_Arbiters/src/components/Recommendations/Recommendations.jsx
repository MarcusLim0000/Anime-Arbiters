import React from 'react';
import RecCard from './RecCard';

export default function Recommendations({ recs, deleteRec }) {
  return (
    <div>
        {recs.map((recommendation, index) => (
          <RecCard
            key={index}
            title={recommendation.title}
            score={recommendation.score}
            image={recommendation.image}
            onDelete={() => deleteRec(index)}
          />
        ))}
      </div>
  );
}