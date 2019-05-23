import React from 'react'
import Footer from './Footer'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'
const App = () =>(
    <div>
        <AddTodo></AddTodo>
        {/* <Todo></Todo> */}
        <VisibleTodoList></VisibleTodoList>
        <Footer></Footer>
        {/* <TodoLists></TodoLists> */}
        <UndoRedo></UndoRedo>
    </div>
)

export default App