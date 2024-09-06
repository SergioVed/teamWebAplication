import React from "react"
import "./index.scss"

interface NextBtnProps {
    onClick: (e: React.MouseEvent) => void;
    value: string;
    disabled: boolean,
    classname?: string,
    currentColor: string,
    textColor: string,
}

export const NextBtn = ({ onClick, value, disabled, classname, currentColor, textColor }: NextBtnProps) => {
    return(
        <button style={{ backgroundColor: currentColor, color: textColor }} disabled={disabled} onClick={onClick} type="submit" className={`button ${classname}`}>{value}</button>
    )
}