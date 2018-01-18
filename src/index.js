import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import addUser from './components/users/addUser';
import user from './components/users/user';
import users from './components/users/users';
import editUser from './components/users/edit';

import getAddresses from './components/addresses/addresses';
import editAddress from './components/addresses/edit';
import addAddress from './components/addresses/addAddress';

import house_numbers from './components/house_numbers/house_numbers';
import addHouse from './components/house_numbers/addHouse';

import universities from './components/universities/universities';
import university from './components/universities/university';
import addUniversity from './components/universities/addUniversity';

import { Route} from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render((
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/addUser" component={addUser} />
            <Route path="/:id/getUser" component={user} />
            <Route path="/users" component={users} />
            <Route path="/updateUser/:id" component={editUser} />

            <Route path="/addresses/" component={getAddresses} />
            <Route path="/editAddress/:id" component={editAddress} />
            <Route path="/addAddress" component={addAddress} />

            <Route path="/house_numbers" component={house_numbers} />
            <Route path="/addHouse" component={addHouse} />

            <Route path="/universities" component={universities} />
            <Route path="/getUniversity/:id" component={university} />
            <Route path="/addUniversity" component={addUniversity} />
        </div>
    </Router>
), document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();