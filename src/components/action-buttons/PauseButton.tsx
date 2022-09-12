import React from "react";
import { FaPause } from "react-icons/fa";
import { useTodos } from "../../contexts/appContext";
import { ActionType } from "../../reducers/actions";
import { TodoStatus } from "../../store";

export const PauseButton = ({ id }: { id: string }) => {
  const { dispatch } = useTodos();
  return (
    <button
      className="text-orange-400 hover:text-orange-600 transition-colors"
      data-testid="todo-pause-button"
      onClick={(e) => {
        dispatch({
          type: ActionType.CHANGE_STATUS,
          payload: {
            id,
            status: TodoStatus.PAUSED,
          },
        });
      }}
    >
      <FaPause />
    </button>
  );
};
