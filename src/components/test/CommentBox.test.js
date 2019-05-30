import React from 'react'
import { mount } from 'enzyme'

import App from '../App'
import CommentBox from '../CommentBox'

let wrapper
beforeEach(() => {
  wrapper = mount(<CommentBox />)
})

afterEach(() => {
  wrapper.unmount()
})

it('shows a comment box with form, textarea, button', () => {
  expect(wrapper.find('form').length).toEqual(1)
  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})
describe('the text area', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {target: {value: 13421}})
    wrapper.update()
  })

  it('has a text area that user can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual(13421)
  })
  
  it('after submit, textarea empties', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual(13421)
    wrapper.find('form').simulate('submit')
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('')
  })
})
