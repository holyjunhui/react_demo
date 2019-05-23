import React from 'react'
import { connect } from "react-redux";
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoLists'


const getVisible = (todos, filter) => {
    console.log("todos",todos)
    switch(filter) {
        case "SHOW_ALL":
            return todos
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed)
        case "SHOW_ACTIVE":
            return todos.filter(t=>! t.completed)
        default:
            return new Error("unkown")
    }
}

const mapStateToProps = (state) => {
    console.log("state222",state)
    return{
    todos:getVisible(state.todos.present, state.visibilityFilter)
}}


const mapDispatchToProps = ({
    onTodoClick:toggleTodo
})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList