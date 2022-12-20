import { useState, useRef } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

import { ProjectData } from './data/data'
import Contact from './components/Contact'



function App() {
  const [chosenProject, setChosenProject] = useState(0);
  const ref = useRef<null | HTMLDivElement>(null);

  const changeProjectRight = () => {
    chosenProject < 3?
    setChosenProject((prev)=>prev+1)
    :
    null
  }

  const changeProjectLeft = () => {
    chosenProject >= 1?
    setChosenProject((prev)=>prev-1)
    :
    null
  }

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="App">
      <Home handleClick={handleClick} />
      <About />
      <Projects
        ProjectData={ProjectData}
        chosenProject={chosenProject}
        changeProjectLeft={changeProjectLeft}
        changeProjectRight={changeProjectRight}
       />
      <div ref={ref}>
        <Contact />
      </div>
    </div>
  )
}

export default App
