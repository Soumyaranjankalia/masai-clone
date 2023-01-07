import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { HeroContent } from './components/HeroContent'
import { Students } from './components/Students'
import { HeroContentTwo } from './components/HeroContentTwo'
import { Companies } from './components/Companies'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <HeroContent/>
      <Students/>
      <HeroContentTwo/>
      <Companies/>
    </div>
  )
}

export default App
