// import { useContext } from "react"
// import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"
import { Todo } from "../interfaces/interfaces"

interface Props {
    todo: Todo,
}

export const TodoItem = ({ todo }: Props ) => {

    // const { toggleTodo } = useContext( TodoContext )

    const { toggleTodo } = useTodos() //menos lineas de codigo y mas limpio con un custom hook 

    // const handleDbClick = () => {
    //     toggleTodo( todo.id )
    // }
    

    return (
        <li 
            style={{
                cursor: 'pointer',
                textAlign: 'left',
                textDecoration: todo.completed ? 'line-through' : ''
            }}
            onDoubleClick={ () => toggleTodo( todo.id ) }
        >
            { todo.desc }
        </li>
    )   
}
