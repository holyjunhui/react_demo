import React from 'react'

import FilterLink from '../containers/FilterLink'

import {visibilityFilters} from '../actions'

const Footer = ()=>(
    <div>
        <span>show:</span>
        <FilterLink filter={visibilityFilters.SHOW_ALL}>
            show all
        </FilterLink>
        <FilterLink filter = {visibilityFilters.SHOW_ACTIVE}>
            active
        </FilterLink>
        <FilterLink filter ={visibilityFilters.SHOW_COMPLETED}>
            completed
        </FilterLink>
    </div>
)

export default Footer