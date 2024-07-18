import { useEffect } from 'react'
import './card.css'
import { useRef } from 'react'
// @ts-ignore
import oop from "/src/tech/oop.png"
import Swal from 'sweetalert2'
import { color, delay, distance, easeOut, inView } from 'framer-motion'
import Youtube from "../../../../public/pngwing.com.png"
import { motion, AnimatePresence } from "framer-motion"


function Card(props) {
    const mentorSection = useRef()
    const headerSection = useRef()

    const handelscrolling = () => {
        // @ts-ignore
        if (window.scrollY < mentorSection.current.offsetTop) {
            // @ts-ignore
            console.log("true");

            headerSection.current.style.letterSpacing = "15px"
        }
        else {
            // @ts-ignore
            console.log("false");
            headerSection.current.style.letterSpacing = "2px"
        }
    }
    const handelMentorClick = (Mentors, i) => {
        Swal.fire({
            html: `
            <div class="sw-container">
                <div class = "sw-img-holder"> 
                                    <img class = "sw-img" src=${Mentors[i].image}  alt="" />
                                    <h2 class= "sweet-name">${Mentors[i].name} </h2>
                </div> 
                <div class = "sw-info"> 
                        <p> ${Mentors[i].info} </p>
                </div> 
            </div>
                    `,
            width: "50%",
            padding: "20px",
            showConfirmButton: false,
            showCloseButton: true,
            footer: `<div>
                        <a href= ${Mentors[i].channal} style = ${{ color: "red" }} target = "_blank">
                            <img class = "youtube" src=${Youtube} alt="" />
                        </a>
                    </div>`,

        });
    }
    useEffect(() => {
        window.addEventListener("scroll", handelscrolling)
    }, [])
    // eslint-disable-next-line react/prop-types
    const Mentors = props.item
    // eslint-disable-next-line react/prop-types
    const ListOfMentors = Mentors.map((item, i) => (
            <div className="mentor-card " key={item.id} onClick={() => handelMentorClick(Mentors, i)} >
                <div className='image-holder'>
                    <img className='card-image' src={item.image} alt="" />
                    <div className='mentor-tech'>{item.tech.map((ele, index) => {
                        return <img src={ele} alt="" key={index} className={ele === oop ? 'tech-image oop' : 'tech-image'} />
                    })}</div>
                </div>
                <h2 className='mentor-name'>{item.name}</h2>
            </div>

    )

    )
    return (
        <>
            <div className="mentor-section" ref={mentorSection}>
                <h2 className='intro' ref={headerSection}> My Mentors</h2>
                <div className="slider ">
                    <button className='slider-button'>
                        <motion.span>&laquo;</motion.span>
                    </button>
                    <div className="inner-container">
                        <div className='inner'>
                            {ListOfMentors}
                        </div>
                    </div>
                    <button className='slider-button'>
                        <motion.span>&raquo;</motion.span>
                    </button>
                </div>

            </div>

        </>
    )
}


export default Card