import { useState } from 'react'
import { Route } from "react-router-dom";

import Searchbar from '../Searchbar/Searchbar.jsx'
import Results from '../Results/Results.jsx'

export default function Home() {

  return (
    <>
      <div>
        <p>
        Uma Musume Pretty Derby (Japanese: ウマ娘 プリティーダービー, Hepburn: Uma Musume Puritī Dābī, lit. "Horse Girl Pretty Derby") is a multimedia franchise created by Cygames. A mobile game for iOS and Android was scheduled to debut in late 2018 and then delayed to February 2021. 
        A 13-episode anime television series adaptation by P.A. Works aired from April to June 2018, followed by a second season by Studio Kai which aired from January to March 2021, then a third season which aired from October to December 2023.
        An anime television series adaptation of the spin-off manga Umayon aired from July to September 2020. A short web anime titled Umayuru premiered in October 2022. A second web anime titled Uma Musume Pretty Derby: Road to the Top premiered in April 2023 and ran for four episodes. 
        An anime film titled Uma Musume Pretty Derby: Beginning of a New Era will open in Japan in May 2024.
        </p>
        <Searchbar/>
        <Results />
      </div>
    </>
  )
}
