import React from 'react'
import request from 'superagent'


class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            user: {}
        }
    }

    componentDidMount() {
        request
        .get(`users/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                user: res.body.user
            })
        })
    }
        render() {
            return (
            <div>
                <ul>
                    <li>
                        <label>name:</label> {this.state.user.name}
                    </li>
                    <li>
                        <label>email:</label> {this.state.user.email}
                    </li>
                </ul>
            </div>
            )
        }
    }

    export default UserInfo
