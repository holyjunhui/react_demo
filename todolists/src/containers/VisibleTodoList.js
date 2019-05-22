import {connect} from 'react-redux'
import {toggleTodo, visibilityFilters} from '../actions'

import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter)=>{
    switch(filter){
        case visibilityFilters.SHOW_ALL:
            return todos
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter(t =>!t.completed)
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(t =>t.completed)
        default:
            throw new Error('unkown')
    }
}

const mapStateToProps = state =>{
    console.log("ataa",state)
    return ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})}
const mapDispatchToProps = dispatch =>({
    toggleTodo: id =>dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)