import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const PopupHomePage = ({popupDisabled, closePopup}: any) => {
    const navigate = useNavigate()

    return(
        <div className={`popupHomepage ${popupDisabled}`}>
            <div className="popupHomepage__window">
                <FontAwesomeIcon icon={faXmark} className="popupHomepage__window__close-btn" onClick={closePopup}/>
                <p className="popupHomepage__window__text">Додай інформацію про себе</p>
                <button className="popupHomepage__window__btn" onClick={() => navigate('/sign-up/information-page1')}>додати</button>
            </div>
        </div>
    )
}