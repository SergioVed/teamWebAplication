import { useEffect, useState } from "react";
import { Banners } from "./banners";
import './style.scss'
import { Header } from "../header";


export const HomePage = () => {
    return (
        <div className="homepage">
        <Header/>
            <div className="homepage__gradient"></div>

            <div className="homepage__container">
                <Banners />
            </div>
        </div>
    )
}