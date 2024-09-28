import axios from "axios";
import { apiURL } from "./api";

export const addProject = async (title: string, description: string, role: string, link: string, images: File[]) => {
  try {
    const fullToken = document.cookie;
    const token = fullToken.split('=')[1];
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('role', role);
    formData.append('link', link);
    
    images.forEach((img) => {
      formData.append('images', img);
    });
    
    const response = await axios.post(`${apiURL}/api/add`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${token}`,
      },
    });
    
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data.errors) {
      const validationErrors = error.response.data.errors.map((err: any) => ({
        field: err.path,
        message: err.msg,
      }));
      return { success: false, errors: validationErrors };
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getAllProjects = async () => {
  try {
    const fullToken = document.cookie;
    const token = fullToken.split('=')[1];

    const response = await axios.get(`${apiURL}/api/getAll`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    
  }
}