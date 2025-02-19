import { Todo } from '../utils/types';

type Props = {
  todo: Todo;
  onUpdate: () => void;
  onDelete: () => void;
};

const TodoItem: React.FC<Props> = ({ todo, onUpdate, onDelete }) => {
  return (
    <div className="flex justify-between p-2 border-b">
      <span>{todo.title}</span>
      <div>
        <button onClick={onUpdate} className="mr-2">Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
