import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { form, control, button } from 'react-validation';
import validator from 'validator';

const required = (value) => {
    if (!value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return 'Не може бути пустим';
    }
};

class AddAuthorForm extends Component {
    constructor() {
        super();
        this.state = {
            house_number: ''
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
        user.house_number = this.state.house_number;

        const url = 'http://localhost:3000/house_numbers/addHouse_number';
        axios.post(url, user)
            .then(() => {
                this.props.history.push('/house_numbers');
            });
    };

    render() {
        const {
            house_number,
        } = this.state;
        return (
            <Form className="form" ref={c => { this.form = c }} onSubmit={this.onSubmit}>

                <Input type="text" name="hall_name" value={house_number} onChange={this.onChange}
                       placeholder="Номер будинку:" validations={[required]} onFocus={this.removeApiError}
                       ref={c => { this.userInput = c }}/>
                <button type='submit'>Додати</button>
            </Form>
        );
    }
}

export default AddHouseForm;