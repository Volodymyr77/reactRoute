import React from 'react';

export  default class User extends  React.Component {

    state = {
        user: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('https://jsonplaceholder.typicode.com/users' + id)
            .then(response => response.json())
            .then(user => {
                this.setState({user})
            })
    }

    render() {
        return(
         <div>
             {
                 this.state.user && <div>
                     <p>{this.state.user.name}</p>
                     <p>{this.state.user.username}</p>
                     <p>{this.state.user.email}</p>

                 </div>
             }
        </div>
)
}

}