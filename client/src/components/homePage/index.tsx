import { useEffect, useState } from "react";
import { Banners } from "./banners";
import './style.scss'
import { Header } from "../header";
import { TopWorkers } from "../randomWorkers/randomWorkersComponent";
import { ProjectBlock } from "../projectBlock";
import { Link } from "react-router-dom";


export const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <div className="homepage__gradient"></div>

            <div className="homepage__container">
                <Banners />

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
        </div>
    )
}