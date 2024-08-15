import { useEffect, useState } from "react";
import { Banners } from "./banners";
import './style.scss'
import { Header } from "../header";
import { TopWorkers } from "../randomWorkers/randomWorkersComponent";
import { Footer } from "../footer";
import { ProjectBlock } from "../projectBlock";
import { Link } from "react-router-dom";


export const HomePage = () => {

    const [currentBanner, setCurrentBanner] = useState(0)

    const [currentColor, setCurrentColor] = useState("")

    const banners = [
        {name: "banner 1", color: "red"},
        {name: "banner 2", color: "purple"},
        {name: "banner 3", color: "yellow"}
    ]

    function changeColor() {
        banners.forEach((element, index) => {
            if (currentBanner === index) {
                console.log(element)
            } 
        })
    }

    changeColor()

    return (
        <div className="homepage">
            <Header />
            <div className="homepage__gradient" style={{}}></div>

            <div className="homepage__container">
                <Banners banners={banners} currentBanner={currentBanner} setCurrentBanner={setCurrentBanner}/>

                <TopWorkers />

                <div className="homepage__projects">
                    <h1>Найновіші проєкти</h1>

                    <div className="homepage-projects__projects">
                        <ProjectBlock />
                        <ProjectBlock />
                        <ProjectBlock />
                        <ProjectBlock />
                    </div>

                    <Link to={'/'} className="projects__btn">переглянути більше</Link>
                </div>
            </div>
        <Footer/>
        </div>
    )
}