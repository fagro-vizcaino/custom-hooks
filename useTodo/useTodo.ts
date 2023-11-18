import { useReducer, useEffect } from "react";
import {
  DeleteDataAction,
  SetDataAction,
  TodoReducer,
  ToggleDataAction,
} from "./todoReducer";

const init = () => JSON.parse(localStorage.getItem("todos") || "") || [];

export function useTodo(initialState: Todos[] = []): useTodoHook {
  const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo: Todos) => {
    const action: SetDataAction = {
      type: "ADD_TODO",
      payload: { data: todo },
    };
    console.log("this is the action", action);

    dispatch(action);
  };

  const handleDelete = (id: number) => {
    console.log("delete this", id);

    const action: DeleteDataAction = {
      type: "DELETE_TODO",
      payload: { data: { id } },
    };

    dispatch(action);
  };
  const handleToggle = (id: number) => {
    const action: ToggleDataAction = {
      type: "TOGGLE_TODO",
      payload: { data: { id } },
    };

    dispatch(action);
  };
  const todosCount = () => todos.length;
  const todosPendingCount = () => todos.filter((it) => !it.done).length;

  return {
    todos,
    handleDelete,
    handleToggle,
    handleNewTodo,
    todosCount,
    todosPendingCount,
  };
}

type useTodoHook = {
  todos: Todos[];
  handleNewTodo: (todo: Todos) => void;
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
  todosCount: () => number;
  todosPendingCount: () => number;
};
