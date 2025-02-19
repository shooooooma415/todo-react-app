import { Todo } from "../models/todo.ts";

type Props = {
  todo: Todo;
  onUpdate: () => void;
  onDelete: () => void;
};

const TodoItem: React.FC<Props> = ({ todo, onUpdate, onDelete }) => {
  return (
    <div className="border p-2 mb-2">
      <h2 className="text-lg font-bold">{todo.title}</h2>
      <p>{todo.description}</p>
      <p>Priority: {todo.priority ?? "None"}</p>
      <p className="text-sm text-gray-500">Created at: {new Date(todo.created_at).toLocaleString()}</p>
      <button className="text-blue-500" onClick={onUpdate}>Edit</button>
      <button className="text-red-500 ml-2" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;