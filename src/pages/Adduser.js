import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Adduser = () => {
    let history = useHistory();

    const [users, setUsers] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const { name, username, email, phone, website } = users;

    const onInputChange = e => {
        console.log(e.target.value);
        setUsers({ ...users, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        /* await axios.post("https://jsonplaceholder.typicode.com/users", users); */
        await axios.post("http://localhost:3001/users", users);
        history.push("/");
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" name="name" value={name} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your username" name="username" value={username} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your E-main Address" name="email" value={email} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Phone Number" name="phone" value={phone} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Website Name" name="website" value={website} onChange={e => onInputChange(e)} />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default Adduser;
