import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface OptionProps {
    currentColor: string;
    isActive: boolean;
    handleClick: () => void;
    icon: any;
    label: string;
}

export const Option = ({ currentColor, isActive, handleClick, icon, label }: OptionProps) => {
    return (
        <div className="option">
            <div className="option__container">
                <span style={{
                    display: isActive ? 'block' : 'none',
                    backgroundColor: currentColor
                }}></span>

                <button
                    onClick={handleClick}
                    style={{
                        background: isActive ? 'rgba(255, 255, 255, 0.13)' : 'none',
                        paddingLeft: isActive ? `calc(var(--index) * .7)` : 'calc(var(--index) * 1.34)'
                    }}
                >
                    <FontAwesomeIcon
                        icon={icon}
                        className="option-icon"
                        style={{ color: isActive ? currentColor : "#fff" }}
                    />
                    {label}
                </button>
            </div>
        </div>
    );
};