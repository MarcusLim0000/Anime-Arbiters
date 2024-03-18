import React from 'react';
import RecCard from './RecCard';
import './Rec.css'

export default function Recommendations({ recs, deleteRec }) {
  return (
    <div className = 'recContainer'>
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