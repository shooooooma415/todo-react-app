import { useEffect, useState } from 'react';
import { Todo } from '../utils/types';
import { fetchTodos } from '../repositories/todoRepository';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  return { todos };
}
