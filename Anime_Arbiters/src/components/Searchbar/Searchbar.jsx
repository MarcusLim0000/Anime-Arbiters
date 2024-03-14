import { useState } from 'react'
import './Searchbar.css'
import { BrowserRouter as Router } from "react-router-dom"

export default function Searchbar() {

  return (
    <>
        <input placeholder='Type how many results you want to show' />
        <button className='Submit'>Submit</button>
    </>
  )
}
