import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { router } from "../App";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

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
    setToken(localStorage.getItem("token"));
    const data = await axios.get(`${baseUrl}/users/me/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return data;
  };
  const getUserProfile = async () => {
    setToken(localStorage.getItem("token"));

    const data = await axios.get(`${baseUrl}/profiles/me/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return data;
  };
  const editUserProfile = async (formData) => {
    setToken(localStorage.getItem("token"));

    const data = await axios.patch(`${baseUrl}/profiles/me/`, formData, {
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  };
  const getProfileById = async (id) => {
    setToken(localStorage.getItem("token"));
    const data = await axios.get(`${baseUrl}/profiles/${id}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    console.log(data);
    return data;
  };

  const getAllProfile = async (page = 1, page_size) => {
    setToken(localStorage.getItem("token"));

    const data = await axios.get(
      `${baseUrl}/profiles/?page=${page}&page_size=${page_size}`
    );
    return data;
  };

  const followProfileById = async (id) => {
    setToken(localStorage.getItem("token"));

    const data = await axios.post(
      `${baseUrl}/profiles/${id}/follow/`,
      {},
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );
    return data;
  };
  const UnfollowProfileById = async (id) => {
    setToken(localStorage.getItem("token"));

    const data = await axios.delete(`${baseUrl}/profiles/${id}/follow/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    console.log(data);

    return data;
  };
  const validateToken = async () => {
    setToken(localStorage.getItem("token"));

    try {
      await axios.post(`${baseUrl}/auth/jwt/verify/`, { token });
      return true;
    } catch (err) {
      if (err.response?.status === 401) {
        return await refreshToken();
      }
      return false;
    }
  };
  const refreshToken = async () => {
    setToken(localStorage.getItem("token"));

    try {
      const refresh = localStorage.getItem("refresh");
      const response = await axios.post(`${baseUrl}/auth/jwt/refresh/`, {
        refresh,
      });
      if (response.status === 200) {
        const newToken = response.data.access;
        setToken(newToken);
        localStorage.setItem("token", newToken);
        return true;
      }
    } catch (err) {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      setToken(null);
      window.location.href = "/login";
      return false;
    }
  };
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    router.navigate("/login");
  };

  useEffect(() => {
    validateToken();
  }, [token]);
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
        UnfollowProfileById,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
