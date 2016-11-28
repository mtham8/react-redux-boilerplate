const React = require('react')
const { Link } = require('react-router')

const Component1 = () => (
  <div>
    <h1>This is Component 1</h1>
    <Link to='/' className='nav-button'>Back to Landing</Link>
  </div>
)

module.exports = Component1
