import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



import "./style.css"
const List = () => {

    const [suppliers, setSuppliers] = useState([]);


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setSuppliers(res.data);
            })

    }, [])

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
                                <Link to="/detail/:postId">
                                    <button>detail</button>
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
}

export default List;
