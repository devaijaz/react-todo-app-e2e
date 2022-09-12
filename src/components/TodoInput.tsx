import React, { FormEvent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useTodos } from "../contexts/appContext";
import { ActionType } from "../reducers/actions";
const TEXT_MIN_LENGTH = 10;
export const TodoInput = () => {
  const { dispatch } = useTodos();
  const [text, setText] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (text.trim().length > 0) {
      dispatch({
        type: ActionType.ADD_TODO,
        payload: { text: text.trim() },
      });
      setText("");
    } else {
      setText(text.trim());
    }
  };

  return (
    <form
      data-testid="todo-add-form"
      onSubmit={handleSubmit}
      className="w-full flex p-2"
    >
      <input
        data-testid="todo-input"
        className="flex-1 form-input"
        value={text}
        type="search"
        placeholder={`Enter todo text, min ${TEXT_MIN_LENGTH} chars`}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button
        data-testid="todo-add-button"
        className={`text-purple-600 text-2xl
           hover:text-purple-800
           focus:text-purple-800 
           transition-colors`}
      >
        <FaPlus />
      </button>
    </form>
  );
};
