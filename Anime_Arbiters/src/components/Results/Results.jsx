import React from 'react';
import Card from '../Card/Card';

export default function Results({ results }) {
  const resultsArray = Object.values(results || {});

  return (
    <div className="results-container">
    <div className="results-container">
      {resultsArray.map(result => (
        <Card key={result.mal_id} title={result.title} score={result.score} image={result.image} />
      ))}
    </div>
    </div>
  );
}