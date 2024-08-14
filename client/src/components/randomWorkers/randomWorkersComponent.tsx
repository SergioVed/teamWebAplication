import "./index.scss"
import { workers, Worker, best, getNew } from "../../data/workers"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { UserCard } from "./workerCard";

// import userImg from "../img/randomWorkers/user.png";

export const TopWorkers = () => {

    // console.log(best(workers))
    // console.log(getNew(workers))
    const [title, setTitle] = useState("")

    const newWorkers: Worker[] = getNew(workers)
    const bestWorkers: Worker[] = best(workers)

    const array = [newWorkers, bestWorkers]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex === 1) {
            setTitle("Наші найкращі спеціалісти")
        } else {
            setTitle("Наші найновіші спеціалісти")

        }
    }, [currentIndex])

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % array.length)
    }

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + array.length) % array.length)
    }
    
    return(
        <div className="workers">
            <div className="workers__text">
                <h1>{title}</h1>
                <p>Вручну перевірені таланти для усіх ваших професійних потреб</p>
            </div>
            <div className="workers__container">
                <button className="workers__container__btn" onClick={handleNext}><FontAwesomeIcon icon={faChevronLeft} /></button>
                {array[currentIndex].map((e: Worker) => (
                    <UserCard name={e.name} img={e.img} work={e.work}/>
                ))}
                <button className="workers__container__btn" onClick={handlePrevious}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        </div>
    )
}

// import "./index.scss"
// import { workers, Worker } from "../../data/bestWorkersTest"
// import userImg from "../img/randomWorkers/user.png";
// import { useState } from "react";

// export const TopWorkers = () => {

//     const [currentIndex, setCurrentIndex] = useState(0);
    
//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % arrays.length);
//     };
    
//     const bestWorkers = [...workers].sort((a, b) => {
//         return b.rating - a.rating
//     })
//     const worstWorkers = [...workers].sort((a, b) => {
//         return a.rating - b.rating
//     })
//     const newestWorkers = [...workers].sort((a, b) => {
//         return b.date.getTime() - a.date.getTime()
//     })

//     const arrays = [bestWorkers, worstWorkers, newestWorkers]

    
//     return(
//         <div className="workers">
//             <div className="workers__text">
//                 <h1>Наші найкращі спеціалісти</h1>
//                 <p>Вручну перевірені таланти для усіх ваших професійних потреб</p>
//             </div>
//             <div className="workers__container">
//                 <button className="worker__container__nextBtn" onClick={handleNext}>Next</button>
//                 {arrays[currentIndex].slice(0, 5).map((e: Worker) => (
//                     <div className="workers__container__user">
//                         <img src={e.img} alt="userImg" className="workers__container__user-img"/>
//                         <p className="workers__container__user-name">{e.name}</p>
//                         <p className="workers__container__user-work">{e.work}</p>
//                     </div>
//                 ))}
//                 <button className="worker__container__previousBtn">Previous</button>
//             </div>
//         </div>
//     )
// }