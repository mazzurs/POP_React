import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {user: { name: ''}};

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        let url = `http://localhost:3000/users/${params.id}/getUser`;
        axios.get(url).then(({data: user}) => {
            this.setState({user});
        });
    };

    handleDelete = function () {
        const { match: { params } } = this.props;
        let url = `http://localhost:3000/users/delUser/${params.id}`;
        axios.delete(url).then(()=> {
            this.props.history.push('/users');
        })
    };

    render() {
        if(this.state.user.name !== ''){
            const {user} = this.state;
            return (<div className='main-login main-center'>
                <div key={user.id}>
                    <h2>Ім'я: {user[0].user_name}</h2>
                    <p>Дата народження: {user[0].date_of_birth}</p>
                    <button className='button' onClick={this.handleDelete}>Видалити</button>
                    <button className='button'><Link to={`/updateUser/${user[0].user_id}`}>Редагувати</Link></button>
                </div>
            </div>)
        }
        else return <div></div>


    }
}

export default User;