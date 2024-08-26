import "./index.scss"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface LanguageComponentProps {
    item: string,
    deleteFunction: (e: React.MouseEvent) => void
}

export const LanguageComponent = ({item, deleteFunction}: LanguageComponentProps) => {



    return(
        <div className="LanguageComponent">
            <p>{item}</p>
            <FontAwesomeIcon className="LanguageComponent__img" icon={faXmark} onClick={deleteFunction}/>
        </div>
    )
}