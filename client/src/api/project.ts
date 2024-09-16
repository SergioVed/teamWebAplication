import axios from "axios"
import { apiURL } from "./api"

export const addProject = async ( title: any, description: any, role: any, link: any) => {
    const fullToken = document.cookie
    const token = fullToken.split('=')[1]
    console.log(token)
    const responce = await axios.post(`${apiURL}/api/add`, 
        {
            'title': title,
            'description': description,
            'role': role,
            'link': link
        },
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    )
    return responce.data
}