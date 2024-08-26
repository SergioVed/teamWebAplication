import axios from "axios";
import Cookies from 'js-cookie';
import { apiURL } from "./api";

export const checkAccessTokenValidation = async () => {
    const token = Cookies.get('accessToken'); 
    
    if (token) {
        try {
            const response = await axios.post(`${apiURL}/api/validate-token`, { "accessToken": token });

            return response.data
        } catch (error) {
            console.error('Token validation failed', error);
            return null;
        }
    } else {
        console.error('Token validation failed');
        return null;
    }
};