import { useState, useRef, useEffect } from "react";
import { Banner1 } from "./banner1"
import { Banner2 } from "./banner2"
import { Banner3 } from "./banner3"

export const Banners = () => {
    useEffect(() => {
        let counter = 1;
        const interval = setInterval(() => {
            const radioButton = document.getElementById('radio' + counter) as HTMLInputElement | null;
            if (radioButton) {
                radioButton.checked = true;
            }

            counter++;

            if (counter > 3) {
                counter = 1;
            }
        }, 8000);

        return () => clearInterval(interval); 
    }, []);
    return (
        <div className="banners">
            <div className="banners__container">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />

                <Banner1 />
                <Banner2 />
                <Banner3 />

                <div className="navigation__auto">
                    <div className="auto__btn1"></div>
                    <div className="auto__btn2"></div>
                    <div className="auto__btn3"></div>
                </div>
            </div>

            <div className="manual__nav">
                <label htmlFor="radio1" className="manual__btn"></label>
                <label htmlFor="radio2" className="manual__btn"></label>
                <label htmlFor="radio3" className="manual__btn"></label>
            </div>
        </div>
    )
}