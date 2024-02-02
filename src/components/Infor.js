import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

function Infor() {
    const [product, setProduct] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/products/' + id)
            .then(res => {
                console.log(res);
                setProduct(res.data);
            })
            .catch(err => console.error(err))
    }, [])


    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Thông tin sản phẩm</h3>
                <div className=' text-white'>
                    <div>
                        <label htmlFor="title">Tên sản phẩm:</label>
                        <input type="text" name='title' className='form-control'
                               value={product.title}
                               disabled={product.title}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Thông tin:</label>
                        <input type="text" name='description' className='form-control'
                               value={product.description}
                               disabled={product.description}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Giá:</label>
                        <input type="number" name='phone' className='form-control'
                               value={product.price}
                               disabled={product.price}
                        />
                    </div>
                    <Link to={`/update/${id}`} className='btn btn-info'>Edit</Link>
                    <div className='d-flex justify-content-between'>
                        <Link to='/' className='btn btn-success'>Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Infor;