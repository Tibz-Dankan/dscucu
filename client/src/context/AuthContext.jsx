import { createContext, useContext, useState } from "react";

const LoggedInContext = createContext(false);
const UpdateLoggedInContext = createContext(() => {});

export const useLoggedIn = () => {
  return useContext(LoggedInContext);
};

export const useUpdateLoggedIn = (boolean) => {
  return useContext(UpdateLoggedInContext);
};

export const LoggedInProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLoggedIn = (boolean) => {
    setIsLoggedIn(boolean);
  };

  return (
    <LoggedInContext.Provider value={isLoggedIn}>
      <UpdateLoggedInContext.Provider value={updateLoggedIn}>
        {props.children}
      </UpdateLoggedInContext.Provider>
    </LoggedInContext.Provider>
  );
};
