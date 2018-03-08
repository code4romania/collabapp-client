import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { ApolloProvider } from 'react-apollo'
import App from './App'
import './styles/index.scss'
import registerServiceWorker from './registerServiceWorker'
import ApolloClient from './apollo/client'
import reducers from './redux/reducers'
import initialState from './redux/initialState.json'
import middleware from './redux/middleware'

const history = createHistory()

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      ...middleware,
      routerMiddleware(history)
    )
  )
)

ReactDOM.render(
  <ApolloProvider client={ApolloClient}>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
