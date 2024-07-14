import "./mentors.css"
import Card from "./card/Card"
// @ts-ignore
import database from "/src/tech/database.png"
// @ts-ignore
import html from "/src/tech/html.png"
// @ts-ignore
import css from "/src/tech/css.png"
// @ts-ignore
import js from "/src/tech/JS.png"
// @ts-ignore
import react from "/src/tech/react.png"
// @ts-ignore
import Redux from "/src/tech/Redux.png"
// @ts-ignore
import git from "/src/tech/git.png"
// @ts-ignore
import github from "/src/tech/github.png"
// @ts-ignore
import oop from "/src/tech/oop.png"

function Mentors() {
    const myMentors = [
        { id: "1", name: "Eng.Osama ElZero", image: "../../../elzero.cb9596212972463431ba.jpg", info: "I would like to express my special thanks to my first mentor, Eng. Osama, who introduced me to the world of programming.", tech: [html, css, js, git , github], channal: "https://www.youtube.com/@ElzeroWebSchool" },
        { id: "2", name: "Eng.Ahmed Nasser", image: "../../../codeZone2.f4faf4ab609cf11cac4a.png", info: "oooooooooooooooooooooooooooooooo", tech: [react, Redux,], channal: "https://www.youtube.com/@codeZone" },
        { id: "4", name: "Eng.Mohammed ElDsoke", image: "../../../dsouke.96415ef3d1dc0a78e0bf.jpg", info: "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", tech: [oop], channal: "https://www.youtube.com/@DesoukiEgypt" },
        { id: "3", name: "Eng.Salma Mamdouh", image: "../../../salma.png", info: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", tech: [database], channal: "https://maharatech.gov.eg/course/view.php?id=740" },
    ]
    return (
        <>
            <Card item={myMentors} />
        </>
    )
}


export default Mentors