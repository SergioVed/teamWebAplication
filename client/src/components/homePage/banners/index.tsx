import { useState, useRef, useEffect } from "react";
import { Banner1 } from "./banner1"
import { Banner2 } from "./banner2"
import { Banner3 } from "./banner3"

export const Banners = ({ banners, currentBanner, setCurrentBanner }: any) => {

    useEffect(() => {
        let counter = 1;
        const interval = setInterval(() => {
            setCurrentBanner( counter - 1 )

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

    function radioChecked(index: number) {
        setCurrentBanner(index)
    }
    
    return (
        <div className="banners">
            <div className="banners__container">
                <input type="radio" name="radio-btn" id="radio1" onChange={() => radioChecked(0)} checked={currentBanner === 0}/>
                <input type="radio" name="radio-btn" id="radio2" onChange={() => radioChecked(1)} checked={currentBanner === 1}/>
                <input type="radio" name="radio-btn" id="radio3" onChange={() => radioChecked(2)} checked={currentBanner === 2}/>

                <Banner1 color={banners[0].color}/>
                <Banner2 color={banners[1].color}/>
                <Banner3 color={banners[2].color}/>

                <div className="navigation__auto">
                    <div className={`auto__btn1 ${currentBanner === 0 ? 'active' : ''}`}></div>
                    <div className={`auto__btn2 ${currentBanner === 1 ? 'active' : ''}`}></div>
                    <div className={`auto__btn3 ${currentBanner === 2 ? 'active' : ''}`}></div>
                </div>
            </div>

            <div className="manual__nav">
                <label htmlFor="radio1" className={`manual__btn ${currentBanner === 0 ? 'active' : ''}`}></label>
                <label htmlFor="radio2" className={`manual__btn ${currentBanner === 1 ? 'active' : ''}`}></label>
                <label htmlFor="radio3" className={`manual__btn ${currentBanner === 2 ? 'active' : ''}`}></label>
            </div>
        </div>
    )
}