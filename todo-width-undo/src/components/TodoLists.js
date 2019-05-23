import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
const TodoLists = ({onTodoClick,todos}) =>(
    <ul>
        {todos.map(todo => (
            <Todo
            key = {todo.id}
            {...todo}
            onClick = {()=> onTodoClick(todo.id)}
            ></Todo>
        ))}
    </ul>
)

// TodoLists.propTypes = {
//     onTodoClick:PropTypes.func.isRequired,
//     todos:PropTypes.array.isRequired
// }

export default TodoLists