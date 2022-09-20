import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Space, Spin } from 'antd';

import { Link } from 'react-router-dom';



import "./style.css"
const List = () => {

    console.log('list page');
    const [suppliers, setSuppliers] = useState([]);

    const [status, setStatus] = useState(true);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setSuppliers(res.data);

                setStatus(false)
            })

    }, [])

    return (
        <div className='suppliers'>
            {status
                ?
                <div className='loader'>
                    <Space size="middle">
                        <Spin size="small" />
                        <Spin />
                        <Spin size="large" />
                    </Space>
                </div>
                :
                <>
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
                            {suppliers && suppliers.map((item) =>

                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.companyName}</td>
                                    <td>{item.contactName}</td>
                                    <td>{item.contactTitle}</td>
                                    <td>{item.address.country}</td>
                                    <td>
                                        <button>delete</button>
                                        <button>edit</button>

                                        <Link to={'/detail/' + item.id}>
                                            <button>detail</button>
                                        </Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            }
        </div >
    );
}

export default List;
