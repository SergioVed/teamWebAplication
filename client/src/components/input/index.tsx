import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Input = () => {

    return(
        <form className="inputWrapper">
            <input type="text" className="inputWrapper__input"/>
            <button className="inputWrapper__button" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </form>
    )
}