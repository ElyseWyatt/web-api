import React from 'react'
import request from 'superagent'
import { Redirect } from 'react-router-dom'

class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      userEmail: ''
    }
    this.red = false
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  handleClick (evt) {
      request
      .post('/users/addUser')
      .send({
          name: this.state.name,
          email: this.state.email
      })
      .then(data => {
          this.red = true
          this.setState({
              name: '',
              email: ''
          })
      })
  }

  render () {
      if (this.red) {
          return (
              <Redirect to='/' />
          )
      }
    return (
      <form>
        <div>
          Name: <input name='userName' id='userName' type='text' onChange={this.handleChange} value={this.state.name} />
        </div>
        <div>
            <label>Email:</label>
            <input type='text' name='userEmail' id='userId' onChange={this.handleChange} value={this.state.email} />
        </div>
        <button type='button' onClick={this.handleClick}>Add User</button>
      </form>
    )
  }
}

export default AddUser