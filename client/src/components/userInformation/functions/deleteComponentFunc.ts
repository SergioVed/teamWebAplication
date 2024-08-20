import React from "react"

export function DeleteComponentFunc(optionToDelete: string, setSelectedOptions:any) {
    return(e: React.MouseEvent) => {
        e.preventDefault()
        setSelectedOptions((prevOptions: []) =>
            prevOptions.filter((option) => option !== optionToDelete
        ))
    }
}