import { supabase } from "../utils/supabaseClient";
import { Todo } from "../models/todo";


export async function fetchTodos(): Promise<Todo[]> {
  const { data, error } = await supabase.from("todos").select("*");

  if (error) {
    console.error("Error fetching To-Dos:", error.message);
    throw error;
  }

  return data as Todo[];
}