import { useTodos } from "../hooks/useTodos"

export const Title = () => {

    const { pendingTodos } = useTodos();

    return (
        <h2>
           TODOS: { pendingTodos } 
        </h2>
    )
}
