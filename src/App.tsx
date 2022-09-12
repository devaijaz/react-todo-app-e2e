import { Progressbar } from "./components/Progressbar";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="todoapp-container mx-auto">
      <div className="card">
        <TodoInput />
      </div>
      <div className="my-2">
        <Progressbar />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
