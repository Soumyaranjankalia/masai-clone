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
import { PrepLeaf } from './components/PrepLeaf'
import { Footer } from './components/Footer'
import { Nsdc } from './components/Nsdc'
import { Partner } from './components/Partner'

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
      <PrepLeaf/>
      <Nsdc/>
      {/* <ViewCourse/> */}
      <Instructor/>
      <Story/>
      <Partner/>
      <Footer/>
    </div>
  )
}

export default App
