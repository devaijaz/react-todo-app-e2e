import { RootState, Todo, TodoStatus } from "../store";
import { ActionType, TodoAction } from "./actions";

import { v4 as uuid } from "uuid";

export const todoInitializer = (intialState: Todo[]) => {
  const storageItems = localStorage.getItem("todos");
  if (storageItems) {
    intialState = JSON.parse(storageItems);
  }
  return {
    items: intialState,
  } as RootState;
};

export const todoReducer = (state: RootState, action: TodoAction) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: uuid(),
            text: action.payload.text,
            status: TodoStatus.PENDING,
            date: new Date(),
          },
        ],
      };
    case ActionType.CHANGE_STATUS:
      return {
        ...state,
        items: state.items.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, status: action.payload.status };
          }
          return todo;
        }),
      };
    case ActionType.DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload.id),
      };
    case ActionType.SET_TODO:
      return {
        ...state,
        items: action.payload,
      };
    default:
      throw new Error("Invalid Action Type");
  }
};
