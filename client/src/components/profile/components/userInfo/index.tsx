import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const UserInfo = () => {

    return(
        <div className="profilePage-userInfo">
            <FontAwesomeIcon icon={faCircleUser} className="profilePage-userInfo__photo"/>
            <div className="profilePage-userInfo__container">
                <p className="profilePage-userInfo__container__name"></p>
                <p className="profilePage-userInfo__container__userName"></p>
                <p className="profilePage-userInfo__container__description"></p>
            </div>
            <FontAwesomeIcon icon={faPenToSquare} />
        </div>
    )
}