import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase";

import { createAction } from "../utils/reducer/reducer";

export const UserContext = createContext({
  //
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES = {
  // USER_ACTION_TYPES bu degani action type larni saqlash uchun object , bu object ichida biz action type larni string sifatida saqlaymiz , bu bizga typo xatolarini oldini olishga yordam beradi
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  // initial state bu degani boshlang'ich holat , currentUser boshida null bo'ladi
  currentUser: null,
};

const userReducer = (state, action) => {
  //state bu degani hozirgi holat , action bu degani dispatch ga berilgan object { type: 'SET_CURRENT_USER', payload: user } bu object ni reducer ga yuboradi va reducer bu object ni qabul qiladi
  console.log("dispatched", action);
  const { type, payload } = action; // action bu degani dispatch ga berilgan object { type: 'SET_CURRENT_USER', payload: user } bu object ni destructure qilib type va payload ni olamiz

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER: // bu degani agar type SET_CURRENT_USER bo'lsa , currentUser ni payload ga tenglaymiz
      return { ...state, currentUser: payload }; // bu degani state ni copy qilib currentUser ni payload ga tenglaymiz , bu yerda payload bu user bo'ladi
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  //currentUser bu degani state dan currentUser ni olamiz , dispatch bu degani reducer ga action yuborish uchun function
  const setCurrentUser = (
    user // setCurrentUser bu degani user ni currentUser ga tenglaydigan function , bu function ni biz onAuthStateChangedListener da chaqiramiz va user ni currentUser ga tenglaymiz
  ) => dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)); // bu degani dispatch ga action yuborish uchun createAction function ni chaqiramiz va action type ni USER_ACTION_TYPES.SET_CURRENT_USER ga tenglaymiz va payload ni user ga tenglaymiz
  // createAction(type, payload) action object yaratadi, natija ->
  // {
  //   type: "SET_CURRENT_USER",
  //     payload: user
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  console.log(currentUser);

  const value = {
    currentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
