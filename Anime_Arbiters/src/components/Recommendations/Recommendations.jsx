import React, { useEffect, useState } from 'react';
import RecCard from './RecCard';
import './Rec.css';
import { getRecFromAirTable } from '../../airtable/airTableFunctions';

export default function Recommendations() {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecFromAirTable();
        const recommendations = data.records;
        setRecs(recommendations);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setRecs([]);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      const data = await getRecFromAirTable();
      const recommendations = data.records;
      setRecs(recommendations);
    } catch (error) {
      console.error('Error refetching recommendations:', error);
    }
  };

  return (
    <div className="recContainer">
      {recs.map((recommendation, index) => (
        <RecCard
          key={index}
          title={recommendation.fields.title}
          score={recommendation.fields.score}
          image={recommendation.fields.image}
          id={recommendation.id}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
