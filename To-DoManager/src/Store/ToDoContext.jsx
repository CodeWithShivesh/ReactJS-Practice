import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    tasks:[
        {
            id:1,
            task:"task1",
            check:false
        }
    ],
        addTask : (task) => {},
        updateTask : (id, task) => {},
        deleteTask : (id) => {},
        selectTask : (id) => {},
    
})


export const useTodo = () => {
    return (useContext(TodoContext))
}


export const TodoProvider = TodoContext.Provider