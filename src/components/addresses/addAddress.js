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

class AddGenreForm extends Component {
    constructor() {
        super();
        this.state = {
            address: '',
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
        debugger;
        e.preventDefault();
        const address = {};
        address.address = this.state.address;

        const url = 'http://localhost:3000/addresses/postAddress';
        axios.post(url, genre)
            .then(() => {
                this.props.history.push('/addresses');
            });
    };

    render() {
        const {address} = this.state;
        return (
            <Form className="form" ref={c => { this.form = c }} onSubmit={this.onSubmit}>

                <Input type="text" name="address" value={address} onChange={this.onChange}
                       placeholder="Назва:" validations={[required]} onFocus={this.removeApiError}
                       ref={c => { this.userInput = c }}/>
                <button type='submit'>Додати</button>
            </Form>
        );
    }
}

export default AddAddressForm;