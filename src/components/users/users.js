import React, { Component } from 'react';
import '../../style.css';
import { Link } from 'react-router-dom'

class users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        let url = 'http://localhost:3000/users/getUsers';
        fetch(url)
            .then(response => response.json())
            .then(users => this.setState({ users }));
    }

    render() {
        const users = this.state.users;

        return (
                <div className='users'><h1 className="users">Автори</h1>
                    <Link className="buttonAddUser" to={'/addUser'}>Додати автора</Link>
                    {users.map(user =>
                        <div className='user' key={user.user_id}>
                            <h2>Ім'я: {user.user_name}</h2>
                            <p>Дата народження: {user.date_of_birth}</p>
                            <Link to={`${user.user_id}/getUser`}>Деталі</Link>
                        </div>
                    )}
                </div>
        )
    }
}
export default users;
