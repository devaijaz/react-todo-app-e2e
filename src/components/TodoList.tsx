import React, { useMemo } from "react";
import { useTodos } from "../contexts/appContext";
import { Todo, TodoStatus } from "../store";
import { RemoveButton } from "./action-buttons/RemoveButton";
import { PauseButton } from "./action-buttons/PauseButton";
import { CompleteButton } from "./action-buttons/CompleteButton";
import { ResumeButton } from "./action-buttons/ResumeButton";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import moment from "moment";
const formatDate = (date: Date) => {
  return moment(new Date(date), "YYYYMMDD").fromNow();
};

export const TodoList = () => {
  const {
    state: { items },
  } = useTodos();

  const pending = useMemo(() => {
    return items.filter((todo) => todo.status === TodoStatus.PENDING);
  }, [items]);

  const paused = useMemo(() => {
    return items.filter((todo) => todo.status === TodoStatus.PAUSED);
  }, [items]);

  const completed = useMemo(() => {
    return items.filter((todo) => todo.status === TodoStatus.COMPLETED);
  }, [items]);

  return (
    <div className="mt-2">
      <Todos todos={pending} status={TodoStatus.PENDING}></Todos>
      <Todos todos={paused} status={TodoStatus.PAUSED}></Todos>
      <Todos todos={completed} status={TodoStatus.COMPLETED}></Todos>
    </div>
  );
};

type mappingType = {
  [key in TodoStatus]?: {
    title: string;
    cssClass: string;
  };
};
const mapping: mappingType = {
  [TodoStatus.PAUSED]: {
    title: "Do it Later",
    cssClass: "text-orange-600",
  },
  [TodoStatus.COMPLETED]: {
    title: "Completed",
    cssClass: "text-green-600",
  },
};

const Todos = ({ todos, status }: { todos: Todo[]; status: TodoStatus }) => {
  return (
    <div className="card mt-2">
      {todos.length && status !== TodoStatus.PENDING ? (
        <div className="p-2">
          <div className={mapping[status]?.cssClass}>
            <strong>{mapping[status]?.title}</strong> (
            <span data-testid={`todo-${status.toLowerCase()}-count`}>
              {todos.length}
            </span>
            )
          </div>
        </div>
      ) : null}
      <ul data-testid={`${status.toLowerCase()}-todos-list`}>
        {todos.map(({ text, id, date }) => {
          return (
            <li
              key={id}
              aria-label={text}
              className="listitem"
              tabIndex={0}
              role={"listitem"}
            >
              <div className="flex justify-between group flex-wrap">
                <div className="">
                  <div>{text}</div>
                  <div className="text-xs text-slate-400">
                    {formatDate(date)}
                  </div>
                </div>
                <div className="transition-all">
                  {status === TodoStatus.PENDING ? (
                    <>
                      <RemoveButton id={id} />
                      <PauseButton id={id} />
                      <CompleteButton id={id} />
                    </>
                  ) : null}

                  {status === TodoStatus.PAUSED ? (
                    <>
                      <ResumeButton id={id} />
                    </>
                  ) : null}
                  {status === TodoStatus.COMPLETED ? (
                    <>
                      <RemoveButton id={id} />
                    </>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
