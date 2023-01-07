import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { HeroContent } from './components/HeroContent'
import { Students } from './components/Students'
import { HeroContentTwo } from './components/HeroContentTwo'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <HeroContent/>
      <Students/>
      <HeroContentTwo/>
    </div>
  )
}

export default App
