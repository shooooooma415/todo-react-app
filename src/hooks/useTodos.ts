import { useEffect, useState } from "react";
import { fetchTodos } from "../repositories/todoRepository";
import { Todo } from "../models/todo";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadTodos() {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error("Failed to load todos", error);
      } finally {
        setLoading(false);
      }
    }

    loadTodos();
  }, []);

  return { todos, loading };
}