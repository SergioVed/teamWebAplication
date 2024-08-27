import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
    icon?: IconProp,
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    classname: string;
    placeholder: string,
    value: any,
    needed: boolean,
    multiline: boolean;
    maxLength?: number
}

export const Input: React.FC<IconProps> = ({ icon, onChange, onClick, classname, placeholder, value, needed, multiline, maxLength }) => {
    return (
        <form className="inputWrapper">
            {multiline ? (
                <textarea
                    value={value}
                    placeholder={placeholder}
                    className={`inputWrapper__input ${classname}`}
                    onChange={onChange}
                    maxLength={maxLength}
                />
            ) : (
                <input
                    value={value}
                    placeholder={placeholder}
                    className={`inputWrapper__input ${classname}`}
                    onChange={onChange}
                />
            )}
            {needed && icon &&(
                <button
                    className="inputWrapper__button"
                    type="button"
                    onClick={onClick}
                >
                    <FontAwesomeIcon icon={icon} />
                </button>
            )}
        </form>
    );
}