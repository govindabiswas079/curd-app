import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, TablePagination, TableSortLabel } from '@material-ui/core';
import MaterialTable from 'material-table';



const Home = () => {
    const [users, setUsers] = useState([]);
    const [page, setpage] = useState(0);
    const [rowsPerPage, setrowsPerPage] = useState(5);

    const loadUsers = async () => {
        /* const result = await axios.get('https://jsonplaceholder.typicode.com/users'); */
        const result = await axios.get('http://localhost:3001/users');
        setUsers(result.data.reverse());

    }

    useEffect(() => {
        loadUsers();
    }, []);

    const onChangePage = (event, nextPage) => {
        setpage(nextPage);
    }
    const onChangeRowsPerPage = (event) => {
        setrowsPerPage(event.target.value);
    }

    const deleteUsers = async id => {
        /* await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`); */
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>All User's</h1>
                {/* <MaterialTable> */}
                <Container>
                     
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sr.</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>User Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                                        <TableRow>
                                            <TableHead>{index + 1}</TableHead>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.username}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                                <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                                <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                                <Link class="btn btn-outline-primary" onClick={() => deleteUsers(user.id)}>Delete</Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <TablePagination rowsPerPageOptions={[5, 10,]} count={users.length} rowsPerPage={rowsPerPage} page={page} onChangePage={onChangePage} onChangeRowsPerPage={onChangeRowsPerPage} />
                        </TableContainer>
                    
                </Container>
            {/* </MaterialTable> */}
            </div>
        </div>
    );
};

export default Home;


{/* <div className="container">
            <div className="py-4">
                <h1>All User's</h1>
                <table class="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link class="btn btn-primary mr-2" to={`/users/${users.id}`}>View</Link>
                                    <Link class="btn btn-outline mr-2" to={`/users/edit/${users.id}`}>Edit</Link>
                                    <Link class="btn btn-outline-primary" onClick={() => deleteUsers(users.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>  */}