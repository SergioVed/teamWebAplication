import axios from "axios";
import { checkAccessTokenValidation } from "./tokens";
import { apiURL } from "./api";
import { NavigateFunction } from "react-router-dom";
import Cookies from "js-cookie";

export const editUser = async (updateData: any) => {
  const token = Cookies.get("accessToken");
  try {
    const userInfo = await checkAccessTokenValidation();
    if (userInfo && userInfo.valid) {
      const id = userInfo.userId;
      console.log(updateData)
      const response = await axios.put(`${apiURL}/api/edit-user`, {
        id: id,
        updateData: updateData
      }, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      return response.data;
    }
  } catch (err) {
    console.error("Token validation failed", err);
  }
};

export const getUser = async () => {
  const userInfo = await checkAccessTokenValidation();

  if (userInfo && userInfo.valid) {
    const id = userInfo.userId;

    try {
      const response = await axios.get(`${apiURL}/api/get-user`, {
        params: {
          id: id,
        },
      });
      return response.data;
    } catch (err) {
      console.error("Failed to fetch user:", err);
      throw err;
    }
  }
};

export const checkUserAuthorization = async (navigate: NavigateFunction) => {
  try {
    const response = await checkAccessTokenValidation();

    if (response && response.valid) {
      navigate(`/home-page/${response.userId}`);
    } else {
      navigate("/sign-up");
    }
  } catch (err) {
    console.error("Token validation failed", err);
  }
};

export const authWithGoogle = async (navigate: (url: any) => void) => {
  try {
    const response = await axios.post(`${apiURL}/api/auth-with-google`);
    const data = response.data;

    navigate(data.url);
  } catch (err) {
    console.error("Error request", err);
  }
};
