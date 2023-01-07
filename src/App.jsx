import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { HeroContent } from './components/HeroContent'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <HeroContent/>
    </div>
  )
}

export default App
