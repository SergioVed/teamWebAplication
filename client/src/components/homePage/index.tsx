import { useEffect, useState } from "react";
import { Banners } from "./banners";
import './style.scss'
import { Header } from "../header";
import { TopWorkers } from "../randomWorkers/randomWorkersComponent";
import { Footer } from "../footer";
import { ProjectBlock } from "../projectBlock";
import { Link } from "react-router-dom";
import { Gradient } from "../gradient";
import { banners } from "../../data/banners";
import { UserForm } from "../userInformation";

interface IBanner {
    name: string,
    color: string,
}

export const HomePage = () => {
    const [currentBanner, setCurrentBanner] = useState<number>(0);
    const [currentColor, setCurrentColor] = useState<string>("");

    function changeColor() {
        banners.forEach((element: IBanner, index: number) => {
            if (currentBanner === index) {
                setCurrentColor(element.color);
            }
        })
    }

    useEffect(() => {
        changeColor();
    }, [currentBanner]);

    return (
        <div className="homepage">
            <Header />

            <Gradient currentColor={currentColor} />

            <div className="homepage__container">
                <Banners banners={banners} currentBanner={currentBanner} setCurrentBanner={setCurrentBanner} />

                <TopWorkers />

                <div className="homepage__projects">
                    <h1>Найновіші проєкти</h1>

                    <div className="homepage-projects__projects">
                        <ProjectBlock currentColor={currentColor} />
                        <ProjectBlock currentColor={currentColor} />
                        <ProjectBlock currentColor={currentColor} />
                        <ProjectBlock currentColor={currentColor} />
                    </div>

                    <Link to={'/'} className="projects__btn" style={{ backgroundColor: currentColor }}>переглянути більше</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}