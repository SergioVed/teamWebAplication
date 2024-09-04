import "./index.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getUser } from "../../../../api/user";

export const UserInfo = () => {

    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUser()
            if (response) {
                setUser(response)
            }
        };
        fetchData();
    }, []);

    return(
        <div className="profilePage-userInfo">
            <FontAwesomeIcon icon={faCircleUser} className="profilePage-userInfo__photo"/>
            <div className="profilePage-userInfo__container">
                <p className="profilePage-userInfo__container__name">{user?.name || "Name"}</p>
                <p className="profilePage-userInfo__container__userName">{user?.nickname}</p>
                <p className="profilePage-userInfo__container__description">{user?.description}</p>
            </div>
            <FontAwesomeIcon icon={faPenToSquare} />
        </div>
    )
}