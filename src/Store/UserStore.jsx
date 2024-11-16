import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const token = localStorage.getItem("token");
  const [isdark, setIsdark] = useState(() => {
    // Retrieve saved theme from local storage or default to light
    return JSON.parse(localStorage.getItem("isdark")) || false;
  });
  const baseUrl = "https://mazag-production.up.railway.app";
  useEffect(() => {
    // Update `data-theme` on `html` when `isdark` changes
    document.documentElement.setAttribute(
      "data-theme",
      isdark ? "dark" : "light"
    );
    // Save theme in local storage
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);
  const getUserData = async () => {
    const data = await axios.get(`${baseUrl}/users/me/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return data;
  };
  const getUserProfile = async () => {
    const data = await axios.get(`${baseUrl}/profiles/me/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return data;
  };
  const editUserProfile = async (formData) => {
    console.log(formData);

    const data = await axios.patch(`${baseUrl}/profiles/me/`, formData, {
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  };
  const getProfileById = async (id) => {
    const data = await axios.get(`${baseUrl}/profiles/${id}`);
    return data;
  };

  const getAllProfile = async () => {
    const data = await axios.get(`${baseUrl}/profiles/`);
    return data;
  };

  const followProfileById = async (id) => {
    const data = await axios.post(`${baseUrl}/profiles/${id}/follow/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return data;
  };
  return (
    <UserContext.Provider
      value={{
        getUserData,
        getUserProfile,
        isdark,
        setIsdark,
        editUserProfile,
        baseUrl,
        getProfileById,
        followProfileById,
        getAllProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
