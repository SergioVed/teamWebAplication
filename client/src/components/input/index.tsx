import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
    icon: IconProp,
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    classname: string;
    placeholder: string,
    value: any
}

export const Input: React.FC<IconProps> = ({ icon, onChange, onClick, classname, placeholder, value }) => {

    return(
        <form className="inputWrapper">
            <input value={value} type="text" placeholder={placeholder} className={`inputWrapper__input ${classname}`} onChange={onChange}/>
            <button className="inputWrapper__button" type="button" onClick={onClick}><FontAwesomeIcon icon={icon}/></button>
        </form>
    )
}