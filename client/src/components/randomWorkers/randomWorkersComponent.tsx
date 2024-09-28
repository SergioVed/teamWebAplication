import "./index.scss"
import { workers, Worker, best, getNew } from "../../data/workers"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { UserCard } from "./workerCard";

export const TopWorkers = () => {

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
                {array[currentIndex].map((e: Worker, index: number) => (
                    <UserCard name={e.name} img={e.img} work={e.work} key={index}/>
                ))}
                <button className="workers__container__btn" onClick={handlePrevious}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        </div>
    )
}