import React from 'react'
import request from 'superagent'
import {Link} from 'react-router-dom'

class UserList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            users: []
        }
      }
  
      componentDidMount () {
          request
          .get('/users')
          .then(res => {
              this.setState({
                  users: res.body.users
              })
          })
      }
    
      render () {
        return (
        <div>
            <h1>User List</h1>
        <ul>
            {this.state.users.map((item, key) => {
            return <li key={item.id}>{item.name}</li>
              })}
        </ul>
        </div>
        )
      }
}

export default UserList