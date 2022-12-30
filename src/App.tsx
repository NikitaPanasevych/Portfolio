import { useState, useRef, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import { AnimatePresence, motion } from 'framer-motion'
import { ProjectData } from './data/data'
import Contact from './components/Contact'
import Loader from './components/Loader'



function App() {
  const [chosenProject, setChosenProject] = useState(0);
  const [loading, setLoading] = useState(true)
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(()=>{setTimeout(() => setLoading(false), 1000)},[])

  const changeProjectRight = () => {
    chosenProject < 2?
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
      <AnimatePresence>
        {
          loading &&
          <motion.div
          exit={{ height: 0 }}
          transition={{duration:0.75, ease:'easeInOut'}}
          >
            <Loader />
          </motion.div>
        }
        </AnimatePresence>
        <AnimatePresence>
          {
          !loading &&
              <>
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
              </>
          }
        </AnimatePresence>
    </div>
  )
}

export default App
