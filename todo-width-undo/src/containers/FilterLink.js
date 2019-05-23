import { connect } from 'react-redux'
import Link from '../components/Link'
import { setFilter } from '../actions'

const mapStateToProps = (state, ownProps) => {
    console.log("state",state,ownProps)
   return {
    active:ownProps.filter === state.visibilityFilter
}}


const mapDispatchToProps = (dispatch, ownProps) =>({
    onClick: () =>{
        dispatch(setFilter(ownProps.filter))
    }
})

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink
