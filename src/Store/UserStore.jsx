import axios from "axios";
import { createContext } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const getUserData = async() => {
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

  return (
    <UserContext.Provider value={{ getUserData }}>
      {children}
    </UserContext.Provider>
  );
}
