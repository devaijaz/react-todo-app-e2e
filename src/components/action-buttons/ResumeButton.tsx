import React from "react";
import { FaPlay } from "react-icons/fa";
import { useTodos } from "../../contexts/appContext";
import { ActionType } from "../../reducers/actions";
import { TodoStatus } from "../../store";

export const ResumeButton = ({ id }: { id: string }) => {
  const { dispatch } = useTodos();
  return (
    <button
      className="text-blue-400 hover:text-blue-600 transition-colors"
      data-testid="todo-resume-button"
      onClick={(e) => {
        dispatch({
          type: ActionType.CHANGE_STATUS,
          payload: {
            id,
            status: TodoStatus.PENDING,
          },
        });
      }}
    >
      <FaPlay />
    </button>
  );
};
