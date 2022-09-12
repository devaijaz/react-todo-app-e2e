import React, { useMemo } from "react";
import { useTodos } from "../contexts/appContext";
import { TodoStatus } from "../store";

export const Progressbar = () => {
  const {
    state: { items },
  } = useTodos();

  const { total, paused, completed } = useMemo(() => {
    const paused = items.filter(
      (todo) => todo.status === TodoStatus.PAUSED
    ).length;
    const completed = items.filter(
      (todo) => todo.status === TodoStatus.COMPLETED
    ).length;
    const compPecentage = completed > 0 ? (completed / items.length) * 100 : 0;
    const pausePercentage =
      paused > 0 ? (paused / items.length) * 100 + compPecentage : 0;
    return {
      total: items.length,
      paused: pausePercentage,
      completed: compPecentage,
    };
  }, [items]);
  if (!items.length) return null;
  return (
    <div className="card p-2">
      <span>
        Progress (<span data-testid="todo-total-count">{total}</span>)
      </span>
      <div
        data-testid="progressbar-container"
        className="mt-2 relative w-full h-[10px] bg-slate-200 rounded dark:bg-black overflow-hidden transition-all"
      >
        <div
          data-testid="progress-paused-div"
          className={`absolute bg-orange-400 top-0 left-0 h-full transition-all`}
          style={{ width: `${paused}%` }}
        ></div>
        <div
          data-testid="progress-completed-div"
          className={`absolute bg-green-600 top-0 left-0 h-full transition-all`}
          style={{ width: `${completed}%` }}
        ></div>
      </div>
    </div>
  );
};
