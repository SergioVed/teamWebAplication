import React from "react"
import "./index.scss"

interface NextBtnProps {
    onClick: (e: React.MouseEvent) => void;
    value: string;
    disabled: boolean,
    classname?: string
}

export const NextBtn = ({ onClick, value, disabled, classname }: NextBtnProps) => {
    return(
        <button disabled={disabled} onClick={onClick} type="submit" className={`button ${classname}`}>{value}</button>
    )
}