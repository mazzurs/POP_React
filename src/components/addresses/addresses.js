import React, { Component } from 'react';
import '../../style.css';
import { Link } from 'react-router-dom'
import axios from 'axios'

class genres extends Component {
    constructor(props) {
        super(props);

        this.state = {address: { name: ''}};
    }

    componentDidMount() {
        let url = 'http://localhost:3000/addresses/getAddress';
        fetch(url)
            .then(response => response.json())
            .then(address => this.setState({ address }));
    }

    render() {
        if(this.state.address.name !== '') {
            const {address} = this.state;

            return (
                <div className='users'><h1 className="authors">Адреси</h1>
                    <Link className="buttonAddAuthor" to={'/addAddress'}>Додати адресу</Link>
                    {address.map(address =>
                        <div className='user' key={address.id}>
                            <h2>ID: {address.address_id}, name: {address.address}</h2>
                            <Link to={`/editAddress/${address.address_id}`}>Редагувати</Link>
                        </div>
                    )}
                </div>
            )
        }
        else return <div></div>
    }
}
export default addresses;
