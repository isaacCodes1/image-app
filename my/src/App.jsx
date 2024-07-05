import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div>
      <h1 className='h1'>Image Search Engine</h1>
    <form id="search-form">
        <input type="text" id="search-box" placeholder="Search anything here..." />
        <button>Search</button>
    </form>
    <div id="search-result"></div>
    <button id="show-more-btn">Show more</button>
  </div>
            
  )
}

export default App
