import axios from 'axios';
import "./style.css"
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";


const Detail = () => {

    const [detail, setdetail] = useState({});
    let { postId } = useParams();
    const navigate = useNavigate();


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers/' + postId)
            .then(res => {
                setdetail(res.data);
            })


    }, [postId, navigate])


    return (
        <div className='container detailHG'>
            <div className='supplierDetail'>
                <h1 >{detail?.id}. {detail?.companyName}</h1>
                <h2>Contact Title: <span>{detail?.contactTitle}</span></h2>
                <h2>Contact Name: <span>{detail?.contactName}</span></h2>
            </div>
        </div>
    );
}

export default Detail;
