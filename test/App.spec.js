/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Component1 = require('../js/Component1')
const { shallow } = require('enzyme')

describe('<Component1 /> ', () => {
  it('should render the title', () => {
    const wrapper = shallow(<Component1 />)
    expect(wrapper.contains(<h1>This is Component 1</h1>)).to.be.true
  })
})
