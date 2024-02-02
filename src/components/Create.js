import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Create() {

    const [values, setValues] = useState({
        title: '',
        description: '',
        price: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/products', values)
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={handleSubmit}>
                    <h2>Thêm một sản phẩm</h2>
                    <div>
                        <label htmlFor="title">Tên sản phẩm:</label>
                        <input type="text" name='title' className='form-control'
                               onChange={event =>
                                   setValues({...values, [event.target.name]: event.target.value})
                               }/>
                    </div>
                    <div>
                        <label htmlFor="description">Thông tin:</label>
                        <input type="text" name='description' className='form-control'
                               onChange={event =>
                                   setValues({...values, [event.target.name]: event.target.value})
                               }/>
                    </div>
                    <div>
                        <label htmlFor="phone">Giá:</label>
                        <input type="number" name='price' className='form-control'
                               onChange={event =>
                                   setValues({...values, [event.target.name]: event.target.value})
                               }/>
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

export default Create;