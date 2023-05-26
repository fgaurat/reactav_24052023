import useDeleteTodo from "../../hooks/useDeleteTodo";
import useFetchTodos from "../../hooks/useFetchTodos";

// import TodoList from "../../components/TodoList/TodoList";
import { Todo } from "../../core/Todo";
// import TodoForm from "../../components/TodoForm/TodoForm";
import useSaveTodo from "../../hooks/useSaveTodo";
import HOCCompletedTodoList from "../../components/HOCCompletedTodoList/HOCCompletedTodoList";
import { Suspense, lazy } from "react";
import Spinner from "../../components/Spinner/Spinner";

const TodoList = lazy(() => import("../../components/TodoList/TodoList"));
const TodoForm = lazy(() => import("../../components/TodoForm/TodoForm"));
// const HOCCompletedTodoList  = lazy(() => import('../../components/HOCCompletedTodoList/HOCCompletedTodoList'));

const CompletedTodoList = HOCCompletedTodoList(TodoList);

export default function Home() {
  const { todos, setTodos, loading, error } = useFetchTodos();
  const { deleteTodo } = useDeleteTodo();
  const { saveTodo } = useSaveTodo();

  if (loading) {
    return <>Loading ...</>;
  }

  if (error) {
    return <>Error ...</>;
  }

  const doDelete = async (todo: Todo) => {
    await deleteTodo(todo);
    const t = todos.filter((t) => t.id !== todo.id);
    setTodos(t);
  };

  const handleSubmit = async (todo: Todo) => {
    console.log(todo);
    const newTodo = await saveTodo(todo);
    todos.push(newTodo!);

    setTodos([...todos]);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">todos-app-lazy-suspense</h1>

      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
        <div className="w-full sm:w-auto flex-grow p-4">
          <Suspense fallback={<Spinner/>}>
            <TodoList todos={todos} doDelete={doDelete}></TodoList>
          </Suspense>
          <Suspense fallback={<Spinner/>}>
            <CompletedTodoList
              todos={todos}
              doDelete={doDelete}
            ></CompletedTodoList>
          </Suspense>
        </div>
        <div className="w-full sm:w-auto flex-grow p-4">
          <Suspense fallback={<Spinner/>}>
            <TodoForm handleSubmit={handleSubmit}></TodoForm>
          </Suspense>
        </div>
      </div>
    </>
  );
}
