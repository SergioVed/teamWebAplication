import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const PopUp = ({popupDisabled, closePopup, setLink}: any) => {
    const [popupLink, setPopupLink] = useState('')
    function addLink() {
        setLink(popupLink);
        closePopup()
    }
    return(
        <div className={`popup ${popupDisabled}`}>
            <div className="popup__window">
                <FontAwesomeIcon icon={faXmark} className="popup__window__close-btn" onClick={closePopup}/>
                <p className="popup__window__text">Додай посилання на свій проєкт</p>
                <input onChange={e => {setPopupLink(e.target.value)}} type="text" className="popup__window__input"/>
                <button className="popup__window__btn" onClick={addLink}>додати</button>
            </div>
        </div>
    )
}