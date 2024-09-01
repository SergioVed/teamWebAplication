import { useEffect } from "react"
import "./index.scss"
import { useNavigate } from "react-router-dom"

export const FinalPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/")
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    return(
        <div className="finalPage-container">
            <p className="finalPage-container__title">Thanks for registration</p>
        </div>
    )
}