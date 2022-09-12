import React, { useContext, useEffect, useReducer } from "react";
import { todoInitializer, todoReducer } from "../reducers";
import { ActionType, TodoAction } from "../reducers/actions";
import { INTITIAL_STATE, RootState } from "../store";

const contextInitValue = {
  state: INTITIAL_STATE,
  dispatch: (payload: TodoAction) => {},
};

export const TodoContext =
  React.createContext<typeof contextInitValue>(contextInitValue);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, [], todoInitializer);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.items));
  }, [state.items]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
