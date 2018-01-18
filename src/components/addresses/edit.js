import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            genre_genrescol: ''
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        let url = `http://localhost:3000/genres/getGenre/${params.id}`;
        axios.get(url).then(({data: genre})=> {
            this.setState(genre[0]);
            console.log(genre[0]);
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
        const genre = {};
        genre.genre_genrescol = this.state.genre_genrescol;

        const url = `http://localhost:3000/genres/updateGenre/${params.id}`;
        axios.put(url, genre)
            .then(() => {
                this.props.history.push('/addresses');
            });
    };

    render() {
        const genre = this.state;
        console.log(genre);
        return (<div className='main-login main-center'>Редагувати назву жанру
            <form onSubmit={this.onSubmit}>
                <label>Ім'я</label>
                <input type="text" name="genre_genrescol" value={genre.genre_genrescol} onChange={this.onChange} />
                <button className='btn btn-primary btn-lg btn-block login-button' type="submit">Submit</button>
            </form>
        </div>)
    }
}
export default Form;