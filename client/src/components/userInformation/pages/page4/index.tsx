import "./index.scss"
import { EnglishLvl } from "../../../../data/works"
import React, { useRef, useState } from "react"
import { NextBtn } from "../../components/nextBtn"
import { userInfo } from "../.."
import { RadioBtn } from "../../components/radioBtn"

export const InformationPage4 = ({onNext}: {onNext: () => void}) => {
    const [selectedLevel, setSelectedLevel] = useState<string>("")

    function handleInformation(e: React.MouseEvent) {
        e.preventDefault()
        userInfo.language = selectedLevel

        onNext()
    }

    return(
            <form className="InformationPage4">
                <p className="InformationPage4__title">Обери свій рівень англійської мови</p>
                <div className="InformationPage4__container">
                    {EnglishLvl.map((e, index) => (
                        <div className="InformationPage4__container__element" key={index}>
                            <RadioBtn index={index} selectedLevel={e.title} setSelectedLevel={setSelectedLevel} title={e.title} description={e.description}/>
                        </div>
                    ))}
                </div>
                <NextBtn classname={"btn-wrapper"} value="далі" disabled={false} onClick={(e) => handleInformation(e)}/>
            </form>
    )
}