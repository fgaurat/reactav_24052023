import React from 'react'
import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../../components/TodoForm/TodoForm'
import { Todo } from '../../core/Todo'

function Home() {

    const todos = [
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
          },
          {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
          },
          {
            "userId": 1,
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
          },        
    ]

    const doDelete = (todo:Todo)=>{
        console.log("doDelete "+todo)
    }
    const handleSubmit = (todo:Todo)=>{
        console.log("handleSubmit "+todo)
    }

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
  )
}

export default Home