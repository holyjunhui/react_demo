import React from 'react';
import {render} from 'react-dom';
import './index.css';
// import counter from './reducers/index.js'
// import App from './App';
// import Counter from './component/Counter.js'
import {createStore} from 'redux'
import App from './components/App'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

// const store = createStore(counter)
// const render =()=> ReactDOM.render( <Counter
//     value = {store.getState()}
//     onIncrement={()=>store.dispatch({type:'INCREMENT'})}
//     onDecrement = {()=>store.dispatch({type:'DECREMENT'})}
//   />, document.getElementById('root'));
// render()
// store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
