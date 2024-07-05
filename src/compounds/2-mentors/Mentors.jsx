import "./mentors.css"
import Card from "./card/Card"


function Mentors() {
    const myMentors = [
        { id: "1", name: "Eng.Osama ElZero", image: "../../../elzero.cb9596212972463431ba.jpg", info: "I would like to express my special thanks to my first mentor, Eng. Osama, who introduced me to the world of programming.", tech: ["", "CSS", "JS", "git" , "github"], channal: "https://www.youtube.com/@ElzeroWebSchool" },
        { id: "2", name: "Eng.Ahmed Nasser", image: "../../../codeZone2.f4faf4ab609cf11cac4a.png", info: "oooooooooooooooooooooooooooooooo", tech: ["Reactjs", "Redux",], channal: "https://www.youtube.com/@codeZone" },
        { id: "4", name: "Eng.Mohammed ElDsoke", image: "../../../dsouke.96415ef3d1dc0a78e0bf.jpg", info: "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", tech: ["OOP"], channal: "" },
        { id: "3", name: "Eng.Salma Mamdouh", image: "../../../salma.png", info: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", tech: ["Database"], channal: "https://maharatech.gov.eg/course/view.php?id=740" },
    ]
    return (
        <>
            <Card item={myMentors}/>
        </>
    )
}


export default Mentors