import { useEffect, useState } from "react";
import { Banners } from "./banners";
import './style.scss'
import { Header } from "../header";
import { TopWorkers } from "../randomWorkers/randomWorkersComponent";


export const HomePage = () => {
    return (
        <div className="homepage">
        <Header/>
            <div className="homepage__gradient"></div>

            <div className="homepage__container">
                <Banners />

                <TopWorkers/>
            </div>
        </div>
    )
}