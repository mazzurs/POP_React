import React, { Component } from 'react';
import '../../style.css';
import { Link } from 'react-router-dom'

class halls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            house_numbers: []
        };
    }

    componentDidMount() {
        let url = 'http://localhost:3000/house_numbers/getHouse_numbers';
        fetch(url)
            .then(response => response.json())
            .then(house_numbers => this.setState({ house_numbers }));
    }

    render() {
        const house_numbers = this.state.house_numbers;

        return (
            <div className='users'><h1 className="authors">Номера будинків</h1>
                <Link className="buttonAddAuthor" to={'/addHouse'}>Додати будинок</Link>
                {house_numbers.map(house_number =>
                    <div className='user' key={house_number.house_number_id}>
                        <h2>ID: {house_number.house_number_id}</h2>
                        <p>Номер будинку: {house_number.house_number}</p>
                    </div>
                )}
            </div>
        )
    }
}
export default house_numbers;
