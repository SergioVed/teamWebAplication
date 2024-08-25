import React, { useEffect, useRef, useState } from "react"
import "./index.scss"
import { ContainerHeightFunc, DeleteComponentFunc } from "../../functions"
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../../../input"
import { NextBtn } from "../../components/nextBtn";
import { userInfo } from "../..";

export const InformationPage5 = ({onNext}: {onNext: () => void}) => {
    const pageRef = useRef<HTMLDivElement>(null)
    const [graduation, setGraduation] = useState<string[]>([])
    const [disabled, setDisabled] = useState<boolean>(false)

    ContainerHeightFunc(pageRef)

    useEffect(( )=> {
        const isLastEmpty = graduation[graduation.length - 1] === ""
        setDisabled(isLastEmpty)
    }, [graduation])

    const addInput = () => {
        if (graduation[graduation.length - 1] !== "") {
            setGraduation([...graduation, ""])
        }
    }

    function handleInformation (e: React.MouseEvent) {
        e.preventDefault()
        userInfo.graduation = graduation

        onNext()
    }

    function handleInputChange(index: number, value: string) {
        const newGraduation = [...graduation];
        newGraduation[index] = value;
        setGraduation(newGraduation);
    }

    return(
        <div className="wrapper" ref={pageRef}>
            <div className="InformationPage5">
                <div className="InformationPage5__title-container">
                    <p className="InformationPage5__title-container__title">Вкажи свою освіту або курси, які проходив</p>
                    <p className="InformationPage5__title-container__description">(вказуй тільки освіту/курси, які стосуються IT напрямків, які ти обрав до)</p>
                </div>
                <div className="InformationPage5__container">
                    {graduation.map((value, index) => (
                           <Input
                           value={value}
                           placeholder={""}
                           classname={"InformationPage5__container__input-focus"}
                           icon={faSquareMinus}
                           key={index}
                           onClick={DeleteComponentFunc(index, graduation, setGraduation)}
                           onChange={(e) => handleInputChange(index, e.target.value)}
                       />
                    ))}
                </div>
                <NextBtn classname={"InformationPage5__button"} disabled={disabled} value="+" onClick={addInput}/>
                <NextBtn classname={""} disabled={false} value="далі" onClick={(e) => handleInformation(e)}/>
            </div>
        </div>
    )
}