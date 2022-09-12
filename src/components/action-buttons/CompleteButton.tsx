import React from "react";
import { FaCheck } from "react-icons/fa";
import { useTodos } from "../../contexts/appContext";
import { ActionType } from "../../reducers/actions";
import { TodoStatus } from "../../store";

export const CompleteButton = ({ id }: { id: string }) => {
  const { dispatch } = useTodos();
  return (
    <button
      className="text-green-400 hover:text-green-600 transition-colors"
      data-testid="todo-complete-button"
      title="Mark as completed"
      aria-label="Mark the todo as completed task"
      onClick={(e) => {
        dispatch({
          type: ActionType.CHANGE_STATUS,
          payload: {
            id,
            status: TodoStatus.COMPLETED,
          },
        });
      }}
    >
      <FaCheck />
    </button>
  );
};
