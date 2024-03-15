import { useState } from 'react'

import Searchbar from '../Searchbar/Searchbar.jsx'
import Results from '../Results/Results.jsx'

export default function Home() {

  return (
    <>
      <div>
          <p className='introduction'>
            The Anime Arbiters is an app that will bring up the highest rated anime shows from the My Anime List website. Use it to keep track of what shows to watch and which to recommend! Happy Judging!
          </p>
        <Searchbar/>
        <Results />
      </div>
    </>
  )
}
