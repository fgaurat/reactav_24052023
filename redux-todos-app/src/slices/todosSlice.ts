import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../core/Todo'


interface TodoListState{
    todos:Todo[]
}

const initialState: TodoListState = {
    todos: [
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
    ],
  }

  export const todoSlice = createSlice(
    {
        name:"todoList",
        initialState,
        reducers:{}
    }
  )

  export default todoSlice.reducer