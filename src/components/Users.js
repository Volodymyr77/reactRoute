import React from 'react';

export  default class Users extends  React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user =>(
                        <div>
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <p>{user.email}</p>

                            <hr/>
                        </div>
                    ))
                }
            </div>
        )
    }
}