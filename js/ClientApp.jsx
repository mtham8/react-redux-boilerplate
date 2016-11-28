const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Component1 = require('./Component1')
const { Router, Route, hashHistory } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/component1' component={Component1} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
