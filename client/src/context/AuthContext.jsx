import { createContext, useContext, useState } from "react";

const LoggedInContext = createContext(false);
const UpdateLoggedInContext = createContext(() => {});

// loggedin Context function
export const useLoggedIn = () => {
  return useContext(LoggedInContext);
};

// update loggedIn function
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
