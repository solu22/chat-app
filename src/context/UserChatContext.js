
import { createContext,  useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const UserChatContext = createContext();


export const UserChatContextProvider = ({ children }) => {
    const { currUser } = useContext(AuthContext);
  const InitState = {
      chatId:"",
      user:{}
  }

  const chatReducer = (state, action)=>{
      switch (action.type) {
        case "CHANGE_USER":
          return {
            user: action.payload,
            chatId:
              currUser.uid > action.payload.uid
                ? currUser.uid + action.payload.uid
                : action.payload.uid + currUser.uid,
          };
        default:
          return state;
      }
      
  }

  const[ state, dispatch] = useReducer(chatReducer, InitState)

  return (
    <UserChatContext.Provider value={{ data:state, dispatch }}>
      {children}
    </UserChatContext.Provider>
  );
};
