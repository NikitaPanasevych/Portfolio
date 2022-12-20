import AboutStyle from "./About.module.css"
import { AnimatePresence, motion } from "framer-motion"


const About = () => {
    return(
        <section className={AboutStyle.section}>
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{ease:"easeIn", duration:1}}>
                <div>
                    <h1><strong>About</strong></h1>
                    <article className={AboutStyle.article}>
                    SELF-TAUGHT WEB DEVELOPER READY TO TAKE A STEP FORWARD AND IMPLEMENT 
PROGRAMMING SKILLS IN REAL PROJECTS. I AIM TO GAIN EXPERIENCE AND MASTER DIFFERENT 
PROGRAMMING TOOLS AND MEETING NEW PEOPLE AND MENTORS FROM WHICH I COULD LEARN. 
READY TO LEARN AND WORK.

                    </article>
                </div>
                    <img className={AboutStyle.img} src="https://avatars.githubusercontent.com/u/62018390?v=4"/>
            </motion.div>
            
        </section>
    )
}

export default About;