import React, { Component } from 'react';
import '../../style.css';
import { Link } from 'react-router-dom'
import axios from 'axios'

class authors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            universities: []
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        let url = 'http://localhost:3000/universities/getUniversities';
        fetch(url)
            .then(response => response.json())
            .then(universities => this.setState({ universities }));
    }

    handleDelete = function (e) {
        let url = `http://localhost:3000/universities/delUniversity/${e._targetInst.return.key}`;
        axios.delete(url).then(()=> {
            alert("OK");
        })
    };

    render() {
        const universities = this.state.universities;
        return (
            <div className='users'><h1 className="universities">ВУЗи</h1>
                <Link className="buttonAddUniversity" to={'/addUniversity'}>Додати ВУЗ</Link>
                {universities.map(university =>
                    <div className='user' key={university.university_id}>
                        <h2>Назва ВУЗу: {university.university_name}</h2>
                        <p>Інформація: {university.information}</p>
                        <Link to={`/getUniversity/${university.university_id}`}>Деталі</Link>
                        <button className='button' onClick={this.handleDelete}>Видалити</button>
                    </div>
                )}
            </div>
        )
    }
}
export default authors;
