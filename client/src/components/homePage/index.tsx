import { useEffect, useState } from "react";
import { Banners } from "./banners";
import './style.scss'
import { Header } from "../header";
import { TopWorkers } from "../randomWorkers/randomWorkersComponent";
import { Footer } from "../footer";
import { ProjectBlock } from "../projectBlock";
import { Link } from "react-router-dom";
import { UserForm } from "../userInformation";

interface IBanner {
    name: string,
    color: string,
}

export const HomePage = () => {
    const [currentBanner, setCurrentBanner] = useState<number>(0);
    const [currentColor, setCurrentColor] = useState<string>("");

    const banners = [
        { name: "banner 1", color: "#DF4245" },
        { name: "banner 2", color: "#CA99FF" },
        { name: "banner 3", color: "#F4D454" }
    ]

    function changeColor() {
        banners.forEach((element: IBanner, index: number) => {
            if (currentBanner === index) {
                setCurrentColor(element.color)
                console.log(currentColor)
            }
        })
    }

    useEffect(() => {
        changeColor();
    }, [currentBanner])
    return (
        <div className="homepage">
            <Header />
            <div className="homepage__gradient" style={{background: `linear-gradient(180deg, #111111 50%, ${currentColor} 100%)` }}></div>

            <div className="homepage__container">
                {/* <Banners banners={banners} currentBanner={currentBanner} setCurrentBanner={setCurrentBanner} />

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
                </div> */}
                <UserForm/>
            </div>
            {/* <Footer /> */}
        </div>
    )
}