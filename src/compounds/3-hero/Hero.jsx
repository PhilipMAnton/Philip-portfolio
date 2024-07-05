/* eslint-disable react/no-unescaped-entities */
import './hero.css'
// @ts-ignore
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className='hero flex' >
            <div className="left-section">
                <motion.h1
                className='title'
                    initial = {{transform : "scale(0)"}}
                    animate = {{transform : "scale(1)"}}
                    transition={{duration : 1}}
                    
                // eslint-disable-next-line react/no-unescaped-entities
                > Hello,<br /> <span style={{marginLeft : 10 , fontSize : 50}}> I'm Philip Maher</span> <br />a Front-End developer using ReactJS. <br />
                </motion.h1>
                <p className='sub-title'> With a strong science background from the Faculty of Science, I'm eager to contribute my skills and learn from your team.</p>
                <div className="all-icons flex">
                    <a className="icon icon-whatsapp" href="HTTPS://wa.me/2001552899199"></a>
                    <a target='_blank' className="icon icon-social-linkedin" href="https://www.linkedin.com/in/philip-maher-b14060316/"></a>
                    <a target='_blank' className="icon icon-github" href="https://github.com/PhilipMAnton"></a>
                    <a target='_blank' className="icon icon-envelope" href="mailto:philipmaheer@gmail.com"></a>
                </div>
            </div>
                <div className="parent-avater flex">
                    <div className='image-border'>
                        <img src="/nobg.png" alt="" className='avater' />
                    </div>
                </div>
        </section>
    )
}


export default Hero