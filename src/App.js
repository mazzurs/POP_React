import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './style.css';

class App extends Component {
    render() {
        return (
            <div className="menu">
                <Link className='list' to={'/users'}>Users</Link>
                <Link className='list' to={'/universities'}>Universities</Link>
                <Link className='list' to={'/addresses'}>Addresses</Link>
                <Link className='list' to={'/house_numbers'}>House_numbers</Link>
            </div>
        );
    }
}

export default App;
