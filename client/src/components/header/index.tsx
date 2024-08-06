import "./index.scss"
import { Element, elements } from "../../data/header"
import { Input } from "../input"
import profileImg from "../../img/header/profile.png"
import { Link } from "react-router-dom"

export const Header = () => {

    return(
        <div className="header">
            <div className="header__elements">
                {elements.map((e: Element) => (
                    <Link to={""} className="header__elements__a">{e.value}</Link>
                ))}
            </div>
            <div className="header__inputContainer">
                <Input/>
                <img src={profileImg} alt="profileImg" className="header__inputContainer__img"/>
            </div>
        </div>
    )
}