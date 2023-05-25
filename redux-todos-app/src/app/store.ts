import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../slices/todosSlice'


const store = configureStore({
    reducer: {
        todoListState:todoReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store