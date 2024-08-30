import axios from "axios"
import { checkAccessTokenValidation } from "./tokens";

export const getUser = async () => {
    const userInfo = await checkAccessTokenValidation();
    
    if (userInfo && userInfo.valid) {

        const id = userInfo.userId
        
        try {
            const response = await axios.get('http://localhost:5000/api/get-user', {
                params: {
                    id: id
                }
            })
            return response
        } catch (err) {
            console.error('Failed to fetch user:', err);
            throw err;
        }
    }
}