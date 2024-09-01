import React, { useEffect, useRef, useState } from "react"
import "./index.scss"
import { DeleteComponentFunc } from "../../functions"
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../../../input"
import { NextBtn } from "../../components/nextBtn";
import { UpdateCookie } from "../../functions/updateCookie";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const InformationPage5 = () => {
    const [graduation, setGraduation] = useState<{name: string}[]>([{name: ""}])
    const [disabled, setDisabled] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(( )=> {
        const isLastEmpty = graduation[graduation.length - 1].name === ""
        setDisabled(isLastEmpty)
    }, [graduation])

    const addInput = () => {
        if (graduation[graduation.length - 1].name !== "") {
            setGraduation([...graduation, {name: ""}])
        }
    }
    console.log(graduation)
    function handleInputChange(index: number, value: string) {
        const newGraduation = [...graduation];
        newGraduation[index].name = value;
        setGraduation(newGraduation);
    }
    
    function handleInformation (e: React.MouseEvent) {
        e.preventDefault()
        UpdateCookie({education: graduation})
        console.log(Cookies.get("userInfo"))
        navigate("/sign-up/information-page6")
    }

    return(
            <div className="InformationPage5">
                <div className="InformationPage5__title-container">
                    <p className="InformationPage5__title-container__title">Вкажи свою освіту або курси, які проходив</p>
                    <p className="InformationPage5__title-container__description">(вказуй тільки освіту/курси, які стосуються IT напрямків, які ти обрав до)</p>
                </div>
                <div className="InformationPage5__container">
                    {graduation.map((value, index) => (
                           <Input
                           value={value.name}
                           placeholder={""}
                           classname={"InformationPage5__container__input-focus"}
                           icon={faSquareMinus}
                           key={index}
                           onClick={DeleteComponentFunc(index, graduation, setGraduation)}
                           onChange={(e) => handleInputChange(index, e.target.value)}
                           needed={true}
                           multiline={false}
                       />
                    ))}
                </div>
                <NextBtn disabled={disabled} value="+" classname="InformationPage5__addGraduation-btn" onClick={addInput}/>
                <NextBtn disabled={disabled} value="далі" onClick={(e) => handleInformation(e)}/>
            </div>
    )
}