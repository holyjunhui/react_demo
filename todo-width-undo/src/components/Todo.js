import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, text, completed }) => (
    <li onClick = {onClick}
        style = {{textDecoration:completed ? 'line-through':'none'}}
    >
        {text}
    </li>
) 

Todo.protoTypes = {
    onClick:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    completed:PropTypes.string.isRequired
}
export default Todo