import axios from "axios";
import { checkAccessTokenValidation } from "./tokens"

export const addFullInfo = async (updateData: any) => {
    const userInfo = await checkAccessTokenValidation()
    try {
        const userId = userInfo.userId
        const response = await axios.post(`http://localhost:5000/api/add-user/${userId}`, {
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