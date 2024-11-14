import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [isdark, setIsdark] = useState(() => {
    // Retrieve saved theme from local storage or default to light
    return JSON.parse(localStorage.getItem("isdark")) || false;
  });

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
    const token = localStorage.getItem("token");
    const data = await axios.get(
      "https://mazag-production.up.railway.app/users/me/",
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );
    return data;
  };
  const getUserProfile = async () => {
    const token = localStorage.getItem("token");
    const data = await axios.get(
      "https://mazag-production.up.railway.app/profiles/me/",
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );
    return data;
  };

  return (
    <UserContext.Provider
      value={{ getUserData, getUserProfile, isdark, setIsdark }}
    >
      {children}
    </UserContext.Provider>
  );
}
