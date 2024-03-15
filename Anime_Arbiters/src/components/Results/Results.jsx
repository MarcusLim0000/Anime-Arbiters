import React from 'react';
import Card from '../Card/Card';

export default function Results({ results }) {
  // Convert the object into an array using Object.values()
  const resultsArray = Object.values(results || {});

  return (
    <div className="results-container">
    <div className="results-container">
      {resultsArray.map(result => (
        <Card key={result.mal_id} title={result.title} score={result.score} />
      ))}
    </div>
    </div>
  );
}