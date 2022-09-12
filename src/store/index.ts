export enum TodoStatus {
  PENDING = "Pending",
  PAUSED = "Paused",
  COMPLETED = "Completed",
}
export type Todo = {
  id: string;
  text: string;
  status: TodoStatus;
  date: Date;
};

export type RootState = {
  items: Todo[];
};

export const INTITIAL_STATE: RootState = {
  items: [],
};
