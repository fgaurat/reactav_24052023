import { useState,  } from "react";
import { Todo } from "../core/Todo";
import { TodoDAO } from "../core/TodoDAO";

export default function useDeleteTodo() {
  const [loading, setLoading] = useState(false);
  const [error] = useState<unknown>(null);
  const dao = new TodoDAO();
  
  const deleteTodo = async (todo:Todo)=>{
    setLoading(true)
    try{
      await dao.delete(todo)
      setLoading(false)
    }
    catch(error){
      setLoading(false)
    }
  }


  return { deleteTodo, loading,error };
}
