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
                        <Fade cascade duration={1000} delay={800} triggerOnce>
                            <h1 className={HomeStyles.header}>Hello,<br/>I am <strong>Nikita</strong>,<br/>Junior Frontend Developer | React.js</h1>
                            <article className={HomeStyles.article}>Student at Wroclaw. I love to <strong>learn</strong> new things, always open for new challenges</article>
                            <button onClick={handleClick} className={HomeStyles.button}>Let's get in touch</button>
                        </Fade>
                    </div>
            </section>
        
    )
}

export default Home