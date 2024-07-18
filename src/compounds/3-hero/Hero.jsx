/* eslint-disable react/no-unescaped-entities */
import './hero.css'
// @ts-ignore
import { easeOut, motion, spring } from 'framer-motion';

function Hero() {
    return (
        <section className='hero flex' >
            <div className="left-section">
                <h1 className='title'>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut" }} >Hello,</motion.span>
                    <br />

                    <motion.span initial={{ opacity:0 , margin: "5px" }} animate={{ opacity:1 , margin: "10px"  }} transition={{opacity : {duration : 0.8 , delay: 0.6 ,  ease: "easeInOut"} , margin: {duration : 0.6 , delay: 2 , ease: "easeInOut"}}} style={{fontSize : "4rem"}}  > I'm Philip Maher</motion.span>
                    <br />
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8,  ease: "easeInOut", delay: 1.2 }} > a Front-End developer using ReactJS.</motion.span>
                    <br />
                </h1>
                <p className='sub-title'> With a strong science background from the Faculty of Science, I'm eager to contribute my skills and learn from your team.</p>
                <motion.div className="all-icons flex" initial={{ opacity: 0 ,  gap: 0 }} animate={{ opacity: 1,  gap: "1.5rem" }} transition={{ duration: 0.8,  ease: "easeInOut", delay: 1.5 }}>
                    <a className="icon icon-whatsapp" href="HTTPS://wa.me/2001552899199" ></a>
                    <a target='_blank' className="icon icon-social-linkedin" href="https://www.linkedin.com/in/philip-maher-b14060316/"></a>
                    <a target='_blank' className="icon icon-github" href="https://github.com/PhilipMAnton"></a>
                    <a target='_blank' className="icon icon-envelope" href="mailto:philipmaheer@gmail.com"></a>
                </motion.div>
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