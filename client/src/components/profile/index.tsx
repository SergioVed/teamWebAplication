import { useNavigate } from "react-router-dom";
import { checkUserAuthorization, getUser } from "../../api/user";
import { UserInfo } from "./components/userInfo"
import "./index.scss"
import { useEffect, useState } from "react";

export const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        checkUserAuthorization(navigate);
    }, [])
    return(
        <div className="profilePage">
            <UserInfo/>
        </div>
    )
}