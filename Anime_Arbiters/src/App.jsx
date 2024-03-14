import { useState } from 'react'
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Recommendations from './components/Recommendations/Recommendations.jsx'; 
import ToWatchList from './components/ToWatchList/ToWatchList.jsx';
import Home from './components/Home/Home.jsx';

export default function App() {
  return (
    <>
      <nav>
        <Link to='/'>
          <h1>The Anime Arbiters App</h1>
        </Link>
        <Link to='/recommendations'>
          <button className='Recommend_button'>Recommendations</button>
        </Link>
        <Link to='/toWatchList'>
          <button className='ToWatch_button'>To watch list</button>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/recommendations' component={Recommendations} />
          <Route exact path='/toWatchList' component={ToWatchList} />
        </Switch>
      </main>
    </>
  );
}

// async function callAnimeList() {
//   const ret = await fetch('https://api.jikan.moe/v4/anime')
//   const payload = await ret.json()
//   const animeList = payload.data
//   console.log(animeList.map(x=>[x.mal_id,x.title]))
// }

// callAnimeList()