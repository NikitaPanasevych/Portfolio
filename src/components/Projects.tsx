import ProjectStyle from "./Projects.module.css"
import { AnimatePresence, motion } from "framer-motion"
import { useRef } from "react"
import { Fade } from "react-awesome-reveal";

export interface IProjectData {
    ProjectData: {}[]
    chosenProject: number,
    changeProjectRight(): void,
    changeProjectLeft(): void
}

const Projects = (props: IProjectData) => {

    const changeProjectRight = () => {
        props.changeProjectRight()
    }

    const changeProjectLeft = () => {
        props.changeProjectLeft()
    }

    return(
        <section className={ProjectStyle.section}>
            <Fade triggerOnce duration={1000} delay={0} className={ProjectStyle.Left}>
                {props.ProjectData.map((elem:any)=>
                elem.id === props.chosenProject?
                <motion.div
                >
                    <h1><strong>{elem.title}</strong></h1>
                    <article>
                        {elem.description}
                    </article>
                    <div className={ProjectStyle.links}>
                        {   elem.title !== "Featured projects"?
                            <div>
                                <div>
                                    <h3>Tools</h3>
                                    <div className={ProjectStyle.linksIcons}>
                                        {elem.tools.map((e:string)=><img className={ProjectStyle.tools} src={e} />)}
                                    </div>
                                </div>
                                <div>
                                    <h3>Links</h3>
                                    <div className={ProjectStyle.linksIcons}>
                                        {elem.linkIcons.map((e:string)=>
                                        <a href={elem.links}>  
                                            <img src={e} />
                                        </a>)}
                                    </div>
                                </div>
                            </div>
                            : null
                        } 
                    </div>
                </motion.div>
                :null
                )}
            </Fade>
                <motion.div 
                    initial={{
                        opacity: 0
                    }}
                    animate={{opacity:1}}
                    transition={{ease:"easeIn", duration:1 , delay:1}}
                    className={ProjectStyle.Right}
                    >
                        {props.ProjectData.map((elem:any)=>
                        elem.id === props.chosenProject?
                            <AnimatePresence>
                                <motion.img 
                                initial={{
                                    opacity: 0
                                }}
                                animate={{opacity:1}}
                                exit={{opacity:0}}
                                transition={{ease:"easeIn", duration:1}}
                                src={elem.image} alt="" />
                            </AnimatePresence>
                            :null)}
                        <div className={ProjectStyle.Switch}>
                            <button onClick={changeProjectLeft} className={ProjectStyle.button}>
                                <img className={ProjectStyle.img} src="https://user-images.githubusercontent.com/62018390/208675326-fa5e563d-611b-45e6-a925-2498e6f08ef0.png" />
                            </button>
                            <div>
                                {
                                    props.ProjectData.map((e:any)=>e.id === props.chosenProject?
                                    <AnimatePresence>
                                        <motion.svg
                                        className={ProjectStyle.svg} 
                                        height="40" width="40"
                                        initial={{scale: 0}}
                                        animate={{scale: 1}}
                                        exit={{scale:0}}
                                        transition={{duration: 0.2, ease: "easeInOut"}}
                                        >
                                            <circle cx="15" cy="15" r="15"  fill="#F05454" />
                                        </motion.svg>
                                    </AnimatePresence>
                                    :
                                    
                                        <motion.svg 
                                            className={ProjectStyle.svg} 
                                            height="40" width="40"
                                        >
                                            <circle cx="15" cy="15" r="15"  fill="white" />
                                        </motion.svg>
                                    
                                    )
                                }
                            </div>
                            <button onClick={changeProjectRight} className={ProjectStyle.button}>
                                <img className={ProjectStyle.img2} src="https://user-images.githubusercontent.com/62018390/208675326-fa5e563d-611b-45e6-a925-2498e6f08ef0.png" />
                            </button>
                        </div>
                </motion.div>
        </section>
    )
}

export default Projects;