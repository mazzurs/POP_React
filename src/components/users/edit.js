import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../style.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            user_name: '',
            date_of_birth: '',
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        let url = `http://localhost:3000/users/${params.id}/getUser`;
        axios.get(url).then(({data: user})=> {
            this.setState(user[0]);
            console.log(user[0]);
        });

    };


    onChange = (e) => {
        this.onChange.bind(this);
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    };

    onSubmit = (e) => {
        const { match: { params } } = this.props;
        e.preventDefault();
        const user = {};
        user.user_name = this.state.user_name;
        user.date_of_birth = this.state.date_of_birth;

        const url = `http://localhost:3000/users/updateUser/${params.id}`;
        axios.put(url, user)
            .then(() => {
                this.props.history.push('/users');
            });
    };

    render() {
        const user = this.state;
        console.log(user);
        return (<div className='main-login main-center'>
            <form className="form" onSubmit={this.onSubmit}>
                <label>Ім'я</label>
                <input type="text" name="user_name" value={user.user_name} onChange={this.onChange} />
                <label>Дата народження:</label>
                <input type="text" name="date_of_birth" value={user.date_of_birth} onChange={this.onChange} />
                <button className='btn btn-primary btn-lg btn-block login-button' type="submit">Зберегти</button>
            </form>
        </div>)
    }
}
export default Form;