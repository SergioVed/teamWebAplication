import { UserInfo } from "./components/userInfo"
import "./index.scss"
import { useEffect, useState } from "react";

export const Profile = () => {
    const [user, setUser] = useState(null);
    
    return(
        <div className="profilePage">
            <UserInfo/>
            {user}
        </div>
    )
}