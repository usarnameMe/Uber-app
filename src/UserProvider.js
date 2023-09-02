import React, { createContext, useState, useEffect } from "react";
import { storeData, getData } from "./helpers/manageStorage";

export const UserContext = createContext();
export const UpdateUserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const retrieveData = async () => {
      const storedUser = await getData();
      setUser(storedUser);
    };
    retrieveData();
  }, []);

  const userLogged = async (user) => {
    setUser(user);
    await storeData(user);
  };

  const updateUser = async (updatedUser) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedUser,
    }));
    await storeData({
      ...user,
      ...updatedUser,
    });
  };

  return (
    <UserContext.Provider value={user}>
      <UpdateUserContext.Provider value={{ userLogged, updateUser }}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
};
