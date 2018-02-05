import React from 'react'
import request from 'superagent'
import {HashRouter as Router, Route} from 'react-router-dom'

import UserList from './UserList'
import AddUser from './AddUser'




const App = () => {
    return (
        <Router>
        <div>
            <Route exact path='/' component={UserList} />
        </div>
        </Router>

    )
  }
  


export default App