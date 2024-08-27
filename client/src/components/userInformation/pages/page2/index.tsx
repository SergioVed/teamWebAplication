import "./index.scss"
import { works } from "../../../../data/works"
import { LanguageComponent } from "../../components/languageComponent"
import React, { useEffect, useRef, useState } from "react"
import { NextBtn } from "../../components/nextBtn"
import { userInfo } from "../.."
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { OptionVisibleFunc, DeleteComponentFunc, SelectOptionFunc} from "../../functions"

export const InformationPage2 = ({onNext} : {onNext: () => void}) => {
    const optionsRef = useRef<HTMLDivElement>(null);

    const [selectedOptions, setSelectedOptions] = useState<string[]>([])
    const [disabled, setDisabled] = useState<boolean>(false)

    useEffect(() => {
        const isEmpty = selectedOptions.length === 0
        setDisabled(isEmpty)
    }, [selectedOptions])

    function handleInformation (e: React.MouseEvent) {
        e.preventDefault()
        userInfo.development = selectedOptions
        onNext()
    }

    return(
            <form className="InformationPage2">
                <div className="InformationPage2__title-div">
                    <p className="InformationPage2__title-div__title">Обери напрям в якому працюєш</p>
                    <p className="InformationPage2__title-div__sub-title">(можна обрати декілька)</p>
                </div>
                <div className="InformationPage2__container">
                    <button className="InformationPage2__container__selectBtn" onClick={(event) => OptionVisibleFunc(optionsRef, event)}><FontAwesomeIcon icon={faChevronDown} className="InformationPage2__container__selectBtn__img"/></button>
                    <div className="options" ref={optionsRef}>
                        <div className="options-scrollbar">
                            {Object.keys(works).map((workKey) => (
                                <p onClick={() => {
                                    SelectOptionFunc(workKey, setSelectedOptions)
                                }} key={workKey} className={selectedOptions.includes(workKey) ? 'darkned' : ''}>{workKey}</p>
                            ))}
                        </div>
                    </div>
                    <div className="selected-options">
                        {selectedOptions.map((option, key) => (
                            <LanguageComponent needed={true} item={option} key={key} deleteFunction={(DeleteComponentFunc(key, selectedOptions, setSelectedOptions))}/>
                        ))}
                    </div>
                </div>
                <div className="InformationPage2__button-wrapper">
                    <NextBtn classname={"InformationPage2__button-wrapper__button"} value="далі" disabled={disabled} onClick={handleInformation}/>
                </div>
            </form>
    )
}