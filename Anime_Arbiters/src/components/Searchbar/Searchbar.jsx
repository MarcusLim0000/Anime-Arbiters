import React, { useState } from 'react';
import Results from '../Results/Results';

export default function Searchbar({setShowResults}) {

  const [results, setResults] = useState([]);

  async function callAnimeList() {
    try {
      const result = await fetch('https://api.jikan.moe/v4/top/anime');
      const payload = await result.json();
      const animeList = payload.data || [];
      const mappedResults = animeList.map(anime => ({
        mal_id: anime.mal_id,
        title: anime.title,
        score: anime.score,
        image: anime.images.jpg.image_url
      }));
      console.log(mappedResults) //need to edit out once app is done
      setResults(mappedResults);
    } catch (error) {
      console.error('Error fetching anime list:', error);
    }
  }

  return (
    <>
      <button 
        className="Submit"
        type="button"
        onClick={callAnimeList}
      >
        Get Anime!
      </button>
      <Results results={results} />
    </>
  );
}