import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css"
const List = () => {
    return (
        <div className='suppliers'>
            <h2>Suppliers Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Contact Name</th>
                        <th scope="col">Contact Title</th>
                        <th scope="col">Country</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Tokyo Traders</td>
                        <td>Yoshi Nagase</td>
                        <td>Marketing Manager</td>
                        <td>Japan</td>
                        <td>
                            <button>delete</button>
                            <button>edit</button>
                            <Link to="/detail/:postId">
                                <button>detail</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Tokyo Traders</td>
                        <td>Yoshi Nagase</td>
                        <td>Marketing Manager</td>
                        <td>Japan</td>
                        <td>
                            <button>delete</button>
                            <button>edit</button>
                            <Link to="/detail/:postId">
                                <button>detail</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Tokyo Traders</td>
                        <td>Yoshi Nagase</td>
                        <td>Marketing Manager</td>
                        <td>Japan</td>
                        <td>
                            <button>delete</button>
                            <button>edit</button>
                            <Link to="/detail/:postId">
                                <button>detail</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Tokyo Traders</td>
                        <td>Yoshi Nagase</td>
                        <td>Marketing Manager</td>
                        <td>Japan</td>
                        <td>
                            <button>delete</button>
                            <button>edit</button>
                            <Link to="/detail/:postId">
                                <button>detail</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Tokyo Traders</td>
                        <td>Yoshi Nagase</td>
                        <td>Marketing Manager</td>
                        <td>Japan</td>
                        <td>
                            <button>delete</button>
                            <button>edit</button>
                            <Link to="/detail/:postId">
                                <button>detail</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Tokyo Traders</td>
                        <td>Yoshi Nagase</td>
                        <td>Marketing Manager</td>
                        <td>Japan</td>
                        <td>
                            <button>delete</button>
                            <button>edit</button>
                            <Link to="/detail/:postId">
                                <button>detail</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Tokyo Traders</td>
                        <td>Yoshi Nagase</td>
                        <td>Marketing Manager</td>
                        <td>Japan</td>
                        <td>
                            <button>delete</button>
                            <button>edit</button>
                            <Link to="/detail/:postId">
                                <button>detail</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default List;
