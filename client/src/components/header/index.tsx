import "./index.scss"
import { Element, elements } from "../../data/header"
import { Input } from "../input"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {

    return(
        <div className="header">
            <div className="header__elements">
                {elements.map((e: Element, index: number) => (
                    <Link to={""} key={index} className="header__elements__a">{e.value}</Link>
                ))}
            </div>
            <div className="header__inputContainer">
                <Input/>
                <Link to={""}><FontAwesomeIcon icon={faCircleUser} className="header__inputContainer__profileImg"/></Link>
            </div>
        </div>
    )
}