import { type } from "@testing-library/user-event/dist/type";
import { createContext, useEffect, useReducer } from "react";
import { useAuthContext } from "../customHook/useAuthContext";
import useFetch from "../customHook/useFetch";

export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    case "SET":
      return [...action.item];
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(state.index, 1);
      return newArr;
    default:
      throw new Error("Error");
  }
};
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const { user } = useAuthContext();
  const { data } = useFetch(
    `https://tour-et.onrender.com/api/wishlist
    `,
    user
  );

  function fetchData() {
    if (!user) {
      return;
    }
    dispatch({ type: "SET", item: data });
  }
  useEffect(() => {
    fetchData();
  }, [data]);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
