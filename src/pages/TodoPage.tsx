import { useTodos } from "../hooks/useTodos.ts";
import { Todo } from "../models/todo.ts";
import TodoItem from "../components/TodoItem.tsx";

const TodoPage: React.FC = () => {
  const { todos } = useTodos();

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">To-Do List</h1>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} onUpdate={() => {}} onDelete={() => {}} />
      ))}
    </div>
  );
};

export default TodoPage;