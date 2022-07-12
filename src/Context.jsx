import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const Wrapper = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Wrapper };
