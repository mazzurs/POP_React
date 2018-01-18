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

class AddUniversityForm extends Component {
    constructor() {
        super();
        this.state = {
            university_name: '',
            information: '',
            fk_user_id: '',
            fk_address_id: '',
            fk_house_number_id: '',
            users: [],
            house_numbers: [],
            addresses: []
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
        const {match: {params}} = this.props;
        let url = `http://localhost:3000/users/getUsers`;
        axios.get(url).then(response => {
            this.setState({
                authors: response.data
            });
        });

        let urlAddresses = `http://localhost:3000/addresses/getAddresses`;
        axios.get(urlAddresses).then(response => {
            this.setState({
                genres: response.data
            });
        });

        let urlHouse_numbers = `http://localhost:3000/house_numbers/getHouse_numbers`;
        axios.get(urlHouse_numbers).then(response => {
            this.setState({
                halls: response.data
            });
        });
    };

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state)
    };


    onSubmit = (e) => {
        e.preventDefault();

        const university = {};
        university.university_name = this.state.university_name;
        university.information = this.state.information;
        university.fk_user_id = parseInt(this.state.fk_user_id);
        university.fk_address_id = parseInt(this.state.fk_address_id);
        university.fk_house_number_id = parseInt(this.state.fk_house_number_id);

        const url = 'http://localhost:3000/universities/addUniversity';
        axios.post(url, university)
            .then(() => {
                this.props.history.push('/universities');
            });
    };

    render() {
        const {
            university_name,
            information,
            fk_user_id,
            fk_address_id,
            fk_house_number_id,
            users,
            house_numbers,
            addresses
        } = this.state;

        return (
            <Form className='form' ref={c => { this.form = c }} onSubmit={this.onSubmit}>

                <label>Назва ВУЗу:</label>
                <Input name="university_name" value={university_name} onChange={this.onChange}
                       placeholder="Назва ВУЗу:" validations={[required]} onFocus={this.removeApiError}
                       ref={c => { this.userInput = c }}/>

                <label>Інформація:</label>
                <input name="information" value={information} onChange={this.onChange}
                       placeholder="Інформація:"/>

                <label>Ректор:</label>
                <select type="text" name="fk_user_id" value={fk_user_id} onChange={this.onChange}>
                    {users && users.map(item => (
                        <option key={item.user_id}
                                value={item.user_id}>
                            {item.user_name}
                        </option>
                    ))}
                </select>

                <label>Адреса:</label>
                <select type="text" name="fk_address_id" value={fk_address_id} onChange={this.onChange}>
                    {addresses && addresses.map(item => (
                        <option key={item.fk_address_id}
                                value={item.fk_address_id}>
                            {item.address}
                        </option>
                    ))}
                </select>

                <label>Номер будинку:</label>
                <select type="text" name="fk_house_number_id" value={fk_house_number_id} onChange={this.onChange}>
                    {house_numbers && house_numbers.map(item => (
                        <option key={item.fk_house_number_id}
                                value={item.fk_house_number_id}>
                            {item.house_number}
                        </option>
                    ))}
                </select>
                <button className='btn btn-primary btn-lg btn-block login-button' type='submit'>Додати</button>
            </Form>
        );
    }
}

export default AddUniversityForm;