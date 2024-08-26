import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { userInfo } from "../..";
import page1Img from "../../../../img/informationPage/InformationPage1.webp"
import { NextBtn } from "../../components/nextBtn";
import { Input } from "../../../input";

export const InformationPage1 = ({onNext} : {onNext: () => void}) => {
    const pageRef = useRef<HTMLDivElement>(null);

    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')

    function handleInformation(e: React.FormEvent) {
        if (name === '' || surName === '') {
            return
        }

        e.preventDefault()
        userInfo.name = name;
        userInfo.surname = surName

        onNext()
    }

    useEffect(() => {
        const container = document.querySelector('.homepage__container');
        if (container && pageRef.current) {
            const containerPaddingTop = parseFloat(window.getComputedStyle(container).paddingTop)
            pageRef.current.style.height = `calc(100vh - ${containerPaddingTop}px)`;
        }
    }, [])

    return (
        <div className="wrapper" ref={pageRef}>
            <form className="InformationPage1">
                <div className="InformationPage1__wrapper">
                    <div className="InformationPage1__container">
                        <div>
                            <p className="InformationPage1__container__title">Привіт!</p>
                            <p className="InformationPage1__container__p">Перед початком роботи треба заповнити дані про себе</p>
                        </div>
                        <div className="InformationPage1__container__inputs">
                            <label htmlFor="name">Твоє ім’я</label>
                            <input type="text" id="name" onChange={(e) => setName(e.target.value)} required/>
                        </div>
                        <div className="InformationPage1__container__inputs">
                            <label htmlFor="sur-name">Твоє прізвище</label>
                            <input type="text" id="sur-name" onChange={(e) => setSurName(e.target.value)} required/>
                        </div>
                    </div>
                    <img src={page1Img} alt="" />
                </div>
                <NextBtn classname={""} value="далі" disabled={false} onClick={handleInformation}/>
            </form>
        </div>
    );
};
