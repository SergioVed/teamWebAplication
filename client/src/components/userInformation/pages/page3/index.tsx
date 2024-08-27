import "./index.scss"
import { works } from "../../../../data/works"
import { LanguageComponent } from "../../components/languageComponent"
import React, { useEffect, useRef, useState } from "react"
import { NextBtn } from "../../components/nextBtn"
import { userInfo } from "../.."
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { OptionVisibleFunc, DeleteComponentFunc, SelectOptionFunc} from "../../functions"

export const InformationPage3 = ({onNext}: {onNext: () => void}) => {
    const optionsRef = useRef<HTMLDivElement>(null);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])
    const [technologies, setTechnologies] = useState<string[]>([])
    const [disabled, setDisabled] = useState<boolean>(false)
    
    useEffect(() => {
        const isEmpty = selectedOptions.length === 0
        setDisabled(isEmpty)
    }, [selectedOptions])

    useEffect(() => {
        const userDirections = userInfo.development
        const filtredDirections: string[] = [];

        userDirections.forEach((direction) => {
            if (works[direction]) {
                filtredDirections.push(...works[direction])
            }
            setTechnologies(filtredDirections)
        })

    }, [userInfo])
    function handleInformation (e: React.MouseEvent) {
        e.preventDefault()
        userInfo.technologies = selectedOptions

        onNext()
    }


    return(
            <form className="InformationPage3">
                <div className="InformationPage3__title-div">
                    <p className="InformationPage3__title-div__title">Обери технології якими володієш</p>
                    <p className="InformationPage3__title-div__sub-title">(можна обрати декілька)</p>
                </div>
                <div className="InformationPage3__container">
                    <button className="InformationPage3__container__selectBtn" onClick={(event) => OptionVisibleFunc(optionsRef, event)}><FontAwesomeIcon icon={faChevronDown} className="InformationPage2__container__selectBtn__img"/></button>
                    <div className="options" ref={optionsRef}>
                        <div className="options-scrollbar">
                            {technologies.map((workKey) => (
                                <p onClick={() => {
                                    SelectOptionFunc(workKey, setSelectedOptions)
                                }} key={workKey} className={selectedOptions.includes(workKey) ? 'darkned' : ''}>{workKey}</p>
                            ))}
                        </div>
                    </div>
                    <div className="selected-options">
                        {selectedOptions.map((option, key) => (
                            <LanguageComponent needed={true} item={option} key={key} deleteFunction={DeleteComponentFunc(key, selectedOptions, setSelectedOptions)}/>
                        ))}
                    </div>
                </div>
                <NextBtn classname={""} value="далі" disabled={disabled} onClick={handleInformation}/>
            </form>
    )
}