import React from 'react'
import request from 'superagent'
import {HashRouter as Router, Route} from 'react-router-dom'

import UserList from './UserList'
import AddUser from './AddUser'
import UserInfo from './UserInfo'




const App = () => {
    return (
        <Router>
        <div>
            <Route exact path='/' component={UserList} />
            <Route path='/users/:id' component={UserInfo} />
            <Route path='addUser' component={AddUser} />
        </div>
        </Router>

    )
  }
  


export default App