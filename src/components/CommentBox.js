import React, {Component} from 'react'

export default class CommentBox extends Component {
  state = {
    comment: ''
  }

  handleChange = (event) => {
    this.setState({comment: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({comment: ''})
  }

  render () {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea onChange={this.handleChange} value={this.state.comment} />
            <button>submit</button>
          </form>
        </div>
      </div>
    )
  }
}