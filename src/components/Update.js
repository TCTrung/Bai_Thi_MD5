import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Update() {

    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: ''
    });

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/products/' + id)
            .then(res => {
                console.log(res);
                setProduct(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/products/' + id, product)
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={handleUpdate}>
                    <h2>Cập nhật sản phẩm</h2>
                    <div>
                        <label htmlFor="title">Tên sản phẩm:</label>
                        <input type="text" name='title' className='form-control'
                               value={product.title}
                               onChange={event =>
                                   setProduct({...product, [event.target.name]: event.target.value})
                               }
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Thông tin:</label>
                        <input type="text" name='description' className='form-control'
                               value={product.description}
                               onChange={event =>
                                   setProduct({...product, [event.target.name]: event.target.value})
                               }
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Giá:</label>
                        <input type="number" name='phone' className='form-control'
                               value={product.price}
                               onChange={event =>
                                   setProduct({...product, [event.target.name]: event.target.value})
                               }
                        />
                    </div>
                    <br/>
                    <button className='btn btn-info'>Submit</button>
                    <div className='d-flex justify-content-between'>
                        <Link to='/' className='btn btn-success'>Back</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update;