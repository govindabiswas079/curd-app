import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Edituser = () => {
    let history = useHistory();
    const { id } = useParams();
    //alert(id);

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

    useEffect(() => {
        loadUsers();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        /* await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, users); */
        await axios.put(`http://localhost:3001/users/${id}`, users);
        history.push("/");
    }

    const loadUsers = async () => {
        /* const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`); */
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        //console.log(result);
        setUsers(result.data);
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
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
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default Edituser;
