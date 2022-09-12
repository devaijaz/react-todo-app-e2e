import { Todo, TodoStatus } from "../store";

export enum ActionType {
  ADD_TODO = "add_todo",
  CHANGE_STATUS = "change_status",
  DELETE_TODO = "delete_todo",
  SET_TODO = "set_todo",
}

export type TodoAction =
  | {
      type: ActionType.ADD_TODO;
      payload: {
        text: string;
      };
    }
  | {
      type: ActionType.CHANGE_STATUS;
      payload: {
        id: string;
        status: TodoStatus;
      };
    }
  | {
      type: ActionType.DELETE_TODO;
      payload: {
        id: string;
      };
    }
  | {
      type: ActionType.SET_TODO;
      payload: Todo[];
    };
