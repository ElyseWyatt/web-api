const express = require('express')

const router = express.Router()

const userData = {
    users: [
    {id: 1, name: 'Elyse'},
    {id: 2, name: 'Steve'}
 ]
}

router.get('/users', (req, res) => {
    res.json(userData)
})

router.post('/users', (req, res) => {
    userData.users.push({
        id: userData.users.length + 1,
        name: req.body.userName
    })
    res.status(200)
})

module.exports = router

//The +1 needs to change