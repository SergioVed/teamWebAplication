import { useNavigate } from "react-router-dom";
import { checkUserAuthorization, getUser } from "../../api/user";
import "./index.scss"
import { useEffect, useState } from "react";

export const Profile = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     checkUserAuthorization(navigate);
    // }, [])
    useEffect(() => {
        getUser()
    }, [])
    return(
        <div className="profilePage">

        </div>
    )
}