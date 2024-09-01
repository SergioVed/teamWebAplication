import { getUser } from "../../api/getUser";
import { checkAccessTokenValidation } from "../../api/tokens";
import { UserInfo } from "./components/userInfo"
import "./index.scss"
import { useEffect, useState } from "react";

export const Profile = () => {

    return(
        <div className="profilePage">
            <UserInfo/>
        </div>
    )
}