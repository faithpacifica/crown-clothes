import { createContext, useState } from "react"; //1

// as the actual value you want to access  //2
export const UserContext = createContext({
  // pass default value
  currentUser: null,
  setCurrentUser: () => null,
});

// provider  actual component //3
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
