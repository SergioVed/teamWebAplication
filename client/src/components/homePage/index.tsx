import { useEffect, useState } from "react";
import { Banners } from "./banners";
import './style.scss'


export const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage__gradient"></div>

            <div className="homepage__container">
                <Banners />
            </div>
        </div>
    )
}