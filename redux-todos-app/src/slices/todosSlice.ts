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

export const deleteTodoAsync = createAsyncThunk("todos/deleteTodo",async (todo:Todo)=>{
    const dao:DAO<Todo> = new TodoDAO()
    await dao.delete(todo)
    return todo
})

export const saveTodoAsync = createAsyncThunk("todos/saveTodo",async (todo:Todo)=>{
    const dao:DAO<Todo> = new TodoDAO()
    const savedTodo = await dao.save(todo)
    return savedTodo
})


  export const todoSlice = createSlice(
    {
        name:"todoList",
        initialState,
        reducers:{},
        extraReducers:{
          [getTodosAsync.fulfilled.type]: (state,action)=>{
              state.todos = action.payload
          },
          [deleteTodoAsync.fulfilled.type]: (state,action)=>{
            state.todos = state.todos.filter(t => t.id !== action.payload.id)
          },
          [saveTodoAsync.fulfilled.type]: (state,action)=>{
            state.todos.push(action.payload)
          }
        }
    }
  )

  export default todoSlice.reducer