import "./index.scss"
import { EnglishLvl } from "../../../../data/works"
import { ContainerHeightFunc } from "../../functions"
import React, { useRef, useState } from "react"
import { NextBtn } from "../../components/nextBtn"
import { userInfo } from "../.."

export const InformationPage4 = ({onNext}: {onNext: () => void}) => {
    const [selectedLevel, setSelectedLevel] = useState<string>("")
    const pageRef = useRef<HTMLDivElement>(null)

    ContainerHeightFunc(pageRef)

    function handleInformation(e: React.MouseEvent) {
        e.preventDefault()
        userInfo.language = selectedLevel

        onNext()
    }

    return(
        <div className="wrapper" ref={pageRef}>
            <form className="InformationPage4">
                <p className="InformationPage4__title">Обери свій рівень англійської мови</p>
                <div className="InformationPage4__container">
                    {EnglishLvl.map((e, index) => (
                        <div className="InformationPage4__container__element" key={index}>
                            <label htmlFor={`level-${index}`}>
                                <input type="radio" checked={selectedLevel === e.title} value={e.title} name="englishLevel" id={`level-${index}`} onChange={(e) => setSelectedLevel(e.target.value)}/>
                                <span className="InformationPage4__container__element__title">{e.title}</span>
                                <p className="InformationPage4__container__element__description">{e.description}</p>
                            </label>
                        </div>
                    ))}
                </div>
                <NextBtn classname={"btn-wrapper"} value="далі" disabled={false} onClick={(e) => handleInformation(e)}/>
            </form>
        </div>
    )
}