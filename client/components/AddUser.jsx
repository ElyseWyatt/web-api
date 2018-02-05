import React from 'react'
import request from 'superagent'

class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    request
      .post('/api/v1/users')
      .set('Content-Type', 'application/json')
      .send(this.state)
      .then(() => {
        console.log('Posted!')
      })
  }

  render () {
    return (
      <form>
        <div>
          Name: <input name='userName' onChange={this.handleChange} />
        </div>
        <button type='button' onClick={this.handleClick}>Add User</button>
      </form>
    )
  }
}

export default AddUser