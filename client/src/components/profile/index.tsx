import { getUser } from "../../api/getUser";
import { checkAccessTokenValidation } from "../../api/tokens";
import { UserInfo } from "./components/userInfo"
import "./index.scss"
import { useEffect, useState } from "react";

export const Profile = () => {
    const [user, setUser] = useState<any>()

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUser()
            if (response) {
                setUser(response.data)
            }
            // console.log(response);
        };
        fetchData();
    }, []);
    return(
        <div className="profilePage">
            <UserInfo/>
            {user.email}
        </div>
    )
}