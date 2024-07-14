import { useEffect } from 'react'
import './card.css'
import { useRef } from 'react'
// @ts-ignore
import oop from "/src/tech/oop.png"
import Swal from 'sweetalert2'
import { color, delay, distance, easeOut, inView } from 'framer-motion'


function Card(props) {
    const mentorSection = useRef()
    const headerSection = useRef()

    console.log(mentorSection.current);
    
    const handelscrolling = ()=>{
        // @ts-ignore
        if(window.scrollY >= mentorSection.current.offsetTop && window.scrollY <= mentorSection.current.offset ){
            // @ts-ignore
            headerSection.current.style.letterSpacing = "54px"
        }
        else{
            // @ts-ignore
            headerSection.current.style.letterSpacing = "15px"
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handelscrolling)
    },[])
    const handelMentor = (Mentors , i)=>{
        console.log(Mentors.channal);
        Swal.fire({
            html: `You can use <b>bold</b>, <i>italic</i>, and <a href=${Mentors[i].channal}>links</a> here!`
        });
        // Swal.fire({
        //     // popup: 'swal2-show',
        //     // backdrop: 'swal2-backdrop-show',
        //     // icon: 'swal2-icon-show',
        //     width : "60%" ,
        //     padding : "20px",
        //     animation : true , 
        //     grow : "column" , 
        //     title: `<h5>${Mentors[i].name}<h5/>`,
        //     color : "blue",
        //     text: Mentors[i].info,
        //     imageUrl: Mentors[i].image,
        //     imageWidth: 250,
        //     imageHeight: 250,
        //     imageAlt: Mentors[i].name ,
        //     showConfirmButton : false , 
        //     footer: `<div className = "flex g-20">
        //                 <a href= ${Mentors[i].channal} style = ${{color : "red"}}>YouTube</a>
        //                 <a href= ${Mentors[i].channal} style = ${{color : "red"}}>Website</a>
        //                 <a href= ${Mentors[i].channal} style = ${{color : "red"}}>linkedin</a>
        //                 <a href= ${Mentors[i].channal} style = ${{color : "red"}}>facebook</a>
        //                 <swal-button>
        //             </div>`
        // });
    }
    // eslint-disable-next-line react/prop-types
    const Mentors = props.item
    // eslint-disable-next-line react/prop-types
    const ListOfMentors = Mentors.map((item , i) =>
        <>
            <div className="mentor-card" key={item.id} onClick={()=>handelMentor(Mentors , i)}>
                <div className='image-holder'>
                    <img className='card-image' src={item.image} alt="" />
                    <div className='mentor-tech'>{item.tech.map((ele , index)=>{
                            return <img src= {ele} alt="" key={index} className={ele === oop ? 'tech-image oop' : 'tech-image'}/>     
                    })}</div>
                </div>
                <h2 className='mentor-name'>{item.name}</h2>
            </div>
        </>
    )
    return (
        <>
            <h2 className='intro' ref={headerSection}> My Mentors</h2>
            <div className="mentor-section" ref={mentorSection}>
                    {ListOfMentors}
            </div>
        </>
    )
}


export default Card