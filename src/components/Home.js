import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => {
                console.log(res);
                setProducts(res.data);
            })
            .catch(err => console.error(err))
    }, [])
    const navigate = useNavigate();
    const handleDelete = (id) => {
        const confirm = window.confirm('Bạn chắc chắn muốn xóa sản phẩm này ?');
        if (confirm) {
            axios.delete('http://localhost:3000/products/' + id)
                .then(res => {
                    alert("Xóa thành công !");
                    window.location.reload();
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            <h1>Danh Sách Sản Phẩm</h1>
            <div>
                <table className='table table-striped'>
                    <thead>
                    <div><Link to='/create' className='btn btn-success'>Thêm sản phẩm mới</Link></div>

                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><Link to={`/read/${product.id}`}>{product.title}</Link></td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/update/${product.id}`}
                                          className='btn btn-sm btn-primary me-2'>Sửa</Link>
                                    <button className='btn btn-sm btn-danger'
                                            onClick={event => handleDelete(product.id)}>Xóa
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Home