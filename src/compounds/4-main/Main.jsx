import { useState } from "react"
import './main.css'
import { myProjects } from "./myprojects"
import { motion, AnimatePresence, spring } from "framer-motion";



function Main() {
    const [currentActive, setcurrentActive] = useState("All")
    const [arr, setArr] = useState(myProjects)
    const handelClick = (buttonCategory) => {
        setcurrentActive(buttonCategory);
        const newArray = myProjects.filter((item) => {
            const specific = item.category.find((myItem) => {
                return myItem === buttonCategory
            })
            return specific === buttonCategory
        })
        setArr(newArray)
    }
    return (
        <main className="flex">
            <section className="flex left-section">
                <button onClick={
                    () => {
                        setcurrentActive("All")
                        setArr(myProjects)
                    }
                }
                    className={currentActive === "All" ? "active" : null}>All Projects
                </button>
                <button onClick={() => {
                    handelClick("css")
                }}
                    className={currentActive === "css" ? "active" : null}>HTML & CSS
                </button>
                <button onClick={() => {
                    handelClick("js")
                }}
                    className={currentActive === "js" ? "active" : null}>JS
                </button>
                <button onClick={() => {
                    handelClick("React")
                }}
                    className={currentActive === "React" ? "active" : null}>React
                </button>
            </section>
            <motion.section
                className="right-section flex" layout>
                    {arr.map((Item) => {
                        return (
                            <motion.article key={Item.imgPath} className=" card" animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: "spring", damping: 6, stiffness: 50 }}
                                layout>
                                <img width={220} src={Item.imgPath} alt="" />
                                <div style={{ width: "220px" }} className="box" >
                                    <h1 className="title">{Item.projectTitle}</h1>
                                    <p className="sub-title"> Lorem ipsum, dolor svc;vvit amet consectxfdetur adipixxxsicing elit. Id nisi repellendus explicabo perspiciatis aliquam deserunt</p>
                                    <div className="flex icons">
                                        <div style={{ gap: "11px" }} className="flex">
                                            <div className="icon-link"></div>
                                            <div className="icon-github"></div>
                                        </div>
                                        <a href="" className="link flex" >
                                            More
                                            <span style={{ alignSelf: "end", fontSize: "15px" }} className="icon-arrow-thin-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}
            </motion.section>
        </main>
    )
}


export default Main