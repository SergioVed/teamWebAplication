import "./index.scss"
import { works } from "../../../../data/works"
import { LanguageComponent } from "../../components/languageComponent"
import React, { useEffect, useRef, useState } from "react"
import { NextBtn } from "../../components/nextBtn"
import { userInfo } from "../.."
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { OptionVisibleFunc, ContainerHeightFunc, DeleteComponentFunc, SelectOptionFunc} from "../../functions"

export const InformationPage3 = ({onNext}: {onNext: () => void}) => {
    const pageRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLDivElement>(null);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])
    const [technologies, setTechnologies] = useState<string[]>([])
    
    ContainerHeightFunc(pageRef)
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
        console.log(userInfo)

        onNext()
    }


    return(
        <div className="wrapper" ref={pageRef}>
            <form className="InformationPage2">
                <div className="InformationPage2__title-div">
                    <p className="InformationPage2__title-div__title">Обери технології якими володієш</p>
                    <p className="InformationPage2__title-div__sub-title">(можна обрати декілька)</p>
                </div>
                <div className="InformationPage2__container">
                    <button className="InformationPage2__container__selectBtn" onClick={(event) => OptionVisibleFunc(optionsRef, event)}><FontAwesomeIcon icon={faChevronDown} className="InformationPage2__container__selectBtn__img"/></button>
                    <div className="options" ref={optionsRef}>
                        <div className="options-scrollbar">
                            {technologies.map((workKey) => (
                                <p onClick={() => {
                                    console.log(`Clicked on: ${workKey}`);
                                    SelectOptionFunc(workKey, setSelectedOptions)
                                }} key={workKey} className={selectedOptions.includes(workKey) ? 'darkned' : ''}>{workKey}</p>
                            ))}
                        </div>
                    </div>
                    <div className="selected-options">
                        {selectedOptions.map((option, key) => (
                            <LanguageComponent item={option} key={key} deleteFunction={DeleteComponentFunc(option, setSelectedOptions)}/>
                        ))}
                    </div>
                </div>
                <NextBtn handleInformation={handleInformation}/>
            </form>
        </div>
    )
}