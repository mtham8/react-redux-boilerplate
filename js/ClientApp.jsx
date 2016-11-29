const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Component1 = require('./Component1')
const Layout = require('./Layout')
const { Router, Route, hashHistory, IndexRoute } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/component1' component={Component1} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
