import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo';
import App from './App'
import './styles/index.scss'
import registerServiceWorker from './registerServiceWorker'
import ApolloClient from './apollo/client';

ReactDOM.render(
    <ApolloProvider client={ApolloClient}>
        <App />
    </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
