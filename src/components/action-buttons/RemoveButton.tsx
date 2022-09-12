import React from "react";
import { FaTrash } from "react-icons/fa";
import { useTodos } from "../../contexts/appContext";
import { ActionType } from "../../reducers/actions";

export const RemoveButton = ({ id }: { id: string }) => {
  const { dispatch } = useTodos();
  return (
    <button
      className="text-red-400 hover:text-red-600"
      data-testid="todo-remove-button"
      onClick={(e) => {
        dispatch({
          type: ActionType.DELETE_TODO,
          payload: {
            id,
          },
        });
      }}
    >
      <FaTrash />
    </button>
  );
};
