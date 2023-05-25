import useDeleteTodo from "../../hooks/useDeleteTodo";
import useFetchTodos from "../../hooks/useFetchTodos";

import TodoList from "../../components/TodoList/TodoList";
import { Todo } from "../../core/Todo";
import TodoForm from "../../components/TodoForm/TodoForm";
import { FormEvent, FormEventHandler } from "react";

export default function Home() {
  const { todos, setTodos, loading, error } = useFetchTodos();
  const {
    deleteTodo,
    loading: loadingDelete,
    error: errorDelete,
  } = useDeleteTodo();

  if (loading) {
    return <>Loading ...</>;
  }

  if (error) {
    return <>Error ...</>;
  }

  const doDelete = async (todo: Todo) => {
    // console.log(todo)
    await deleteTodo(todo);
    const t = todos.filter((t) => t.id !== todo.id);
    setTodos(t);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">

          <div className="w-full sm:w-auto flex-grow p-4">
            <TodoList todos={todos} doDelete={doDelete}></TodoList>
          </div>
          <div className="w-full sm:w-auto flex-grow p-4">

            <TodoForm handleSubmit={handleSubmit}></TodoForm>
          </div>
        </div>
    </>
  );
}
