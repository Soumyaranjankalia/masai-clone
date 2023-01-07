import './App.css'
import { NavBar } from './components/NavBar'
import { HeroContent } from './components/HeroContent'
import { Students } from './components/Students'
import { HeroContentTwo } from './components/HeroContentTwo'
import { Companies } from './components/Companies'
import { Placement } from './components/Placement'
import { Skill } from './components/Skill'
import { ViewCourse } from './components/ViewCourse'
import { Instructor } from './components/Instructor'
import { Story } from './components/Story'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <HeroContent/>
      <Students/>
      <HeroContentTwo/>
      <Companies/>
      <Placement/>
      <Skill/>
      {/* <ViewCourse/> */}
      <Instructor/>
      <Story/>
    </div>
  )
}

export default App
