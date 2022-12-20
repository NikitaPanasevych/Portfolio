import HomeStyles from "./Home.module.css"
import { Fade } from "react-awesome-reveal";

export interface IHome {
    handleClick() : void
}


const Home = (props :IHome) => {

    const handleClick = () => {
        props.handleClick()
    }

    return(
        
            <section className={HomeStyles.section}>
                    <div className={HomeStyles.textbox}>
                        <Fade cascade duration={1000} triggerOnce>
                            <h1 className={HomeStyles.header}>Hello,<br/>I am <strong>Nikita</strong>,<br/>Junior Frontend Developer | React.js</h1>
                            <article className={HomeStyles.article}>Student at Wroclaw. I love to <strong>learn</strong> new things, always open for new challenges</article>
                            <button onClick={handleClick} className={HomeStyles.button}>Let's get in touch</button>
                        </Fade>
                    </div>
                    <svg width="90" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55.4241 0.590304C55.0751 0.445601 54.6737 0.525008 54.4068 0.792867L28 27.1996L1.59316 0.792867C1.32617 0.525992 0.924875 0.446586 0.575859 0.590304C0.226734 0.735008 0 1.0756 0 1.45273V28.5194C0 28.7667 0.098 29.0047 0.273438 29.1793L27.3401 56.246C27.5221 56.428 27.7611 56.5194 28 56.5194C28.239 56.5194 28.4779 56.428 28.6599 56.246L55.7266 29.1793C55.902 29.0047 56 28.7667 56 28.5194V1.45273C56 1.0756 55.7732 0.735008 55.4241 0.590304Z" fill="#F05454"/>
                        <path d="M55.4241 37.5506C55.0751 37.4059 54.6737 37.4853 54.4068 37.7532L28 64.1599L1.59316 37.7532C1.32617 37.4863 0.924875 37.4069 0.575859 37.5506C0.226734 37.6953 0 38.0359 0 38.413V65.4797C0 65.727 0.098 65.965 0.273438 66.1396L27.3401 93.2063C27.5221 93.3883 27.7611 93.4797 28 93.4797C28.239 93.4797 28.4779 93.3883 28.6599 93.2063L55.7266 66.1396C55.902 65.965 56 65.727 56 65.4797V38.413C56 38.0359 55.7732 37.6953 55.4241 37.5506Z" fill="#F5F5F5"/>
                        <path d="M55.4241 75.0709C55.0751 74.9262 54.6737 75.0056 54.4068 75.2735L28 101.68L1.59316 75.2735C1.32617 75.0066 0.924875 74.9272 0.575859 75.0709C0.226734 75.2156 0 75.5562 0 75.9333V103C0 103.247 0.098 103.485 0.273438 103.66L27.3401 130.727C27.5221 130.909 27.7611 131 28 131C28.239 131 28.4779 130.909 28.6599 130.727L55.7266 103.66C55.902 103.485 56 103.247 56 103V75.9333C56 75.5562 55.7732 75.2156 55.4241 75.0709Z" fill="#F05454"/>
                    </svg>
            </section>
        
    )
}

export default Home