import React, {Component} from 'react';
import axios from 'axios';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {button} from 'react-validation';


const required = (value) => {
    if (!value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return 'Не може бути пустим';
    }
};

class UniversityForm extends Component {
    constructor() {
        super();
        this.state = {
            universities: [],
            users: [],
            addresses: [],
            house_numbers: []
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
                users: response.data
            });
        });

        let urlAddresses = `http://localhost:3000/addresses/getAddresses`;
        axios.get(urlAddresses).then(response => {
            this.setState({
                addresses: response.data
            });
        });

        let urlHouse_numbers = `http://localhost:3000/house_numbers/getHouse_numbers`;
        axios.get(urlHouse_numbers).then(response => {
            this.setState({
                house_numbers: response.data
            });
        });

        let urlUniversities = `http://localhost:3000/universities/getUniversity/${params.id}`;
        axios.get(urlUniversities).then(response => {
            this.setState({
                university: response.data
            });
        });
    };

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state)
    };


    render() {
        const {
            universities,
            users,
            addresses,
            house_numbers
        } = this.state;

        if (universities[0]) {

            var address = addresses.map(function (address) {
                if (universities[0].fk_address_id == addresses.address_id) {
                    return address.address;
                }
            });

            var user = users.map(function (user) {
                if (universities[0].fk_user_id == user.user_id) {
                    return user.user_name;
                }
            });

            var house_number = house_numbers.map(function (house_number) {
                if (universities[0].fk_house_number_id == house_number.house_number_id) {
                    return house_number.house_number;
                }
            });


            return (<div className='main-login main-center'>
                <h2>Назва ВУЗу: {universities[0].university_name}</h2>
                <p>Ректор: {user}</p>
                <p>Адрес: {address}</p>
                <p>Номер будинку: {house_number}</p>
            </div>)
        }
        else {
            return <div></div>
        }
    }
}


export default UniversityForm;