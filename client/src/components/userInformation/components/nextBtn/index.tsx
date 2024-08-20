import React from "react"
import "./index.scss"

interface NextBtnProps {
    handleInformation: (e: React.MouseEvent) => void
}

export const NextBtn = ({ handleInformation }: NextBtnProps) => {
    return(
        <button onClick={handleInformation} type="submit" className="button">далі</button>
    )
}