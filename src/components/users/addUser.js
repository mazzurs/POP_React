import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { form, control, button } from 'react-validation';
import validator from 'validator';
import '../../style.css';

const required = (value) => {
    if (!value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return 'Не може бути пустим';
    }
};

class AddUserForm extends Component {
    constructor() {
        super();
        this.state = {
            user_name: '',
            date_of_birth: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        debugger;
        // Emulate async API call
        setTimeout(() => {
            this.form.showError(this.userInput, <span>API error</span>);
        }, 1000);
    };

    removeApiError = () => {
        this.form.hideError(this.userInput);
    };


    componentDidMount() {
        const { match: { params } } = this.props;
    };

    onChange = (e) => {

        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state)
    };

    onSubmit = (e) => {
        e.preventDefault();
        const user = {};
        user.author_name = this.state.author_name;
        user.date_of_birth = this.state.date_of_birth;
        debugger;

        const url = 'http://localhost:3000/users/postUser';
        axios.post(url, user)
            .then(() => {
                this.props.history.push('/users');
            });
    };

    render() {
        const {
            user_name,
            date_of_birth,
        } = this.state;
        return (
            <Form className="form" ref={c => { this.form = c }} onSubmit={this.onSubmit}>

                <Input type="text" name="user_name" value={user_name} onChange={this.onChange}
                       placeholder="Ім'я" validations={[required]} onFocus={this.removeApiError}
                       ref={c => { this.userInput = c }}/>

                <input type="text" name="date_of_birth" value={date_of_birth} onChange={this.onChange}
                       placeholder="Дата народження" />


                <button type='submit'>Додати</button>
            </Form>
        );
    }
}

export default AddUserForm;