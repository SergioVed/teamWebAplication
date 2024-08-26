import "./index.scss"
import { Element, elements } from "../../data/header"
import { Input } from "../input"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {

    const [value, setValue] = useState<string>("")

    function click() {
        console.log(value)
    }

    return(
        <div className="header">
            <div className="header__container">

                <div className="header__elements">
                    {elements.map((e: Element, index: number) => (
                        <Link to={""} key={index} className="header__elements__a">{e.value}</Link>
                    ))}
                </div>
                <div className="header__inputContainer">
                    <Input multiline={false} needed={true} value={value} placeholder="пошук напрямів" classname={"header__inputContainer__input-focus"} icon={faMagnifyingGlass} onClick={click} onChange={(e) => setValue(e.target.value)}/>
                    <Link to={""}><FontAwesomeIcon icon={faCircleUser} className="header__inputContainer__profileImg"/></Link>
                </div>

            </div>
        </div>
    )
}