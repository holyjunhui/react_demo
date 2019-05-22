import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSubreddit,fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends Component {
    static propTypes = {
        selectSubreddit: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
      }
    componentDidMount(){
        const { dispatch, selectSubreddit} = this.props
        // console.log("this.propsdidi",this.props)
        dispatch(fetchPostsIfNeeded(selectSubreddit))
    }
    componentDidUpdate(prevProps){
        // console.log("prevProps",prevProps,this.props.selectSubreddit);
        if(prevProps.selectSubreddit !== this.props.selectSubreddit){
            console.log("update")
            const {dispatch, selectSubreddit} = this.props
            dispatch(fetchPostsIfNeeded(selectSubreddit))
        }
    }
    handleChange = nextSubreddit =>{
        // console.log("handlechange",nextSubreddit)
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }
    handleRefreshClick = e => {
        e.preventDefault()
        const { dispatch, selectSubreddit } = this.props
        dispatch(invalidateSubreddit(selectSubreddit))
        dispatch(fetchPostsIfNeeded(selectSubreddit))
    }
    render() {
        // console.log("render",this.props)
        const { selectSubreddit, posts, isFetching, lastUpdated } = this.props
        const isEmpty = posts.length === 0
        return (
            <div>
                <Picker
                    value = {selectSubreddit}
                    onChange = {this.handleChange}
                    options = {['reactJs','frontend']}
                ></Picker>

                <p>
                    {lastUpdated && 
                        <span>
                            last updated at {new Date(lastUpdated).toLocaleTimeString()}
                            {'  '}
                        </span>
                    }
                    {!isFetching &&
                        <button onClick = {this.handleRefreshClick}> 
                            Refresh
                        </button>
                    }
                </p>
                {isEmpty 
                    ? (isFetching ? <h2>Loading</h2> : <h2> Empty.</h2>)
                    : <div style = {{opacity: isFetching ? 0.5 :1}}>
                        <Posts posts = {posts}></Posts>
                    </div>
                }
            </div>
        )
    }
}


const mapStateToProps = state => {
    // console.log("mapStatetoprops",state)
    const {selectSubreddit, postsBySubreddit } = state

    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectSubreddit] || {
        isFetching:true,
        items:[]
    }
    return {
        selectSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
    
}
// console.log("object",mapStateToProps);
export default connect(mapStateToProps)(App)


