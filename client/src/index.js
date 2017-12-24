import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import reducers from './reducers'
// import initialState from './utilities/initialState'

// const store = createStore(reducers, initialState, applyMiddleware(thunk))
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
