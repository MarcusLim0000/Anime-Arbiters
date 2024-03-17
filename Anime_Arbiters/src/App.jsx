import React, { useState } from 'react'
import HandleRecContext from './HandleRecContext.js';
import HandleWatchContext from './HandleWatchContext.js'
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Recommendations from './components/Recommendations/Recommendations.jsx'; 
import ToWatchList from './components/ToWatchList/ToWatchList.jsx';
import Home from './components/Home/Home.jsx';

export default function App() {
  const [recs, setRecs] = useState([]);
  console.log(recs) //delete once app is done

  const handleRec = (recData) => {
    setRecs(prevRecs => [...prevRecs, recData]);
  };

  const deleteRec = (index) => {
    const updatedRecs = recs.filter((_, i) => i !== index);
    setRecs(updatedRecs);
  };
  
  const [watch, setWatch] = useState([]);
  console.log(watch) //delete once app is done
  
  const handleWatch = (watchData) => {
    setWatch(prevWatch => [...prevWatch, watchData]);
  };

  const deleteWatch = (index) => {
    const updatedWatch = watch.filter((_, i) => i !== index);
    setWatch(updatedWatch);
  };

  return (
    <HandleRecContext.Provider value={{ handleRec, setRecs }}>
      <HandleWatchContext.Provider value={{ handleWatch, setWatch }}>
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
              <Route exact path='/recommendations' render={(props) => <Recommendations {...props} recs={recs} deleteRec={deleteRec}/>} />
              <Route exact path='/toWatchList' render={(props) => <ToWatchList {...props} watch={watch} deleteWatch={deleteWatch}/>} />
            </Switch>
          </main>
        </>
      </HandleWatchContext.Provider>
    </HandleRecContext.Provider>
  );
}
