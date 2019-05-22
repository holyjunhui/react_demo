let nextTodoId = 0;
export const addTodo = text =>({
    type:'ADD_TODO',
    id:nextTodoId++,
    text
})
export const visibilityFilters = {
    SHOW_ALL:'SHOW_ALL',
    SHOW_ACTIVE:'SHOW_AXTIVE',
    SHOW_COMPLETED:'SHOW_COMPLETEDs'
}
export const toggleTodo = (id)=>({
    type:'TOGGLE_TODO',
    id
})
export const setVisibilityFilter = filter =>({
    type:'SET_VISIBILITY_FILTER',
    filter
})