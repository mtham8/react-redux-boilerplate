const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='app-container'>
    <h1>Landing Component</h1>
    <Link to='/component1' className='nav-button'> Go to Component1 </Link>
  </div>
)

module.exports = Landing
