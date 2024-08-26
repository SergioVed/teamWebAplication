import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { userInfo } from "../..";
import page1Img from "../../../../img/informationPage/InformationPage1.webp"
import { NextBtn } from "../../components/nextBtn";

export const InformationPage1 = ({onNext} : {onNext: () => void}) => {

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

    return (
        
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
    );
};
