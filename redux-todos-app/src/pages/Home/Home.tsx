import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../../components/TodoForm/TodoForm'
import { Todo } from '../../core/Todo'

function Home() {




  return (
    <>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>

    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">

        <div className="w-full sm:w-auto flex-grow p-4">
          <TodoList></TodoList>
        </div>
        <div className="w-full sm:w-auto flex-grow p-4">

          <TodoForm></TodoForm>
        </div>
      </div>
  </>
  )
}

export default Home