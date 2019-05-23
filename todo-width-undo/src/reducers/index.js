import { combineReducers } from "redux";
// import React from 'react'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const toApp = combineReducers({
    todos,
    visibilityFilter
})

export default toApp