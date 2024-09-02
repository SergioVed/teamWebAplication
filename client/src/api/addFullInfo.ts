import axios from "axios";
import { checkAccessTokenValidation } from "./tokens";
import { apiURL } from "./api";

export const addFullInfo = async (updateData: any) => {
    const userInfo = await checkAccessTokenValidation()
    try {
        const userId = userInfo.userId
        const response = await axios.post(`${apiURL}/api/add-user/${userId}`, {
            id: userId,
            updateData: updateData
        })
        console.log(response.data)
        return response.data
    } catch (err) {
        console.error('Failed to fetch user:', err);
        throw err;
    }
}