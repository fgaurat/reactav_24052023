import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../core/Todo'
import { DAO } from '../core/DAO'
import { TodoDAO } from '../core/TodoDAO'


interface TodoListState{
    todos:Todo[]
}

const initialState: TodoListState = {
    todos: []
  }


export const getTodosAsync = createAsyncThunk("todos/getTodos",async ()=>{
    const dao:DAO<Todo> = new TodoDAO()
    const todos = await dao.findAll()
    return todos
})


  export const todoSlice = createSlice(
    {
        name:"todoList",
        initialState,
        reducers:{},
        extraReducers:{
          [getTodosAsync.fulfilled.type]: (state,action)=>{
              state.todos = action.payload
          }
        }
    }
  )

  export default todoSlice.reducer