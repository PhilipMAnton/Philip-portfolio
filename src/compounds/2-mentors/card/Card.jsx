import { useEffect } from 'react'
import './card.css'
import { useRef } from 'react'
function Card(props) {
    const mentorSection = useRef()
    const headerSection = useRef()

    console.log(mentorSection.current);
    
    const handelscrolling = ()=>{
        if(window.scrollY >= mentorSection.current.offsetTop && window.scrollY <= mentorSection.current.offset ){
            headerSection.current.style.letterSpacing = "54px"
        }
        else{
            headerSection.current.style.letterSpacing = "15px"
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handelscrolling)

    },[])
    // eslint-disable-next-line react/prop-types
    const Mentors = props.item
    // eslint-disable-next-line react/prop-types
    const ListOfMentors = Mentors.map((item) =>
        <>
            <div className="mentor-card" key={item.id}>
                <div className='image-holder'>
                    <img className='card-image' src={item.image} alt="" />
                    <div className='mentor-tech'>{item.tech.map((ele)=>{
                            return <p className='tech'>{ele}</p>      
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