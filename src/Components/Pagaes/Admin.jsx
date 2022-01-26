import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
    const [Psearch, setPsearch] = useState('');
    const [Usearch, setUsearch] = useState('');
    const [AllList, setAllList] = useState([]);
    const [UserList, setUserList] = useState([]);
    const [category, setCategory] = useState('');
    const [file, setFile] = useState('');
    const [inputData, setInputData] = useState({
        title: '',
        price: '',
        desc: '',
    })
    const SelectEvent = (e) => {
        setCategory(e.target.value);
    }
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setInputData({
            ...inputData, [name]: value
        })
    }
    const FileUpload = (upfile) => {
        setFile(upfile.target.files[0]);
    }
    const SubmiForm = async (e) => {
        e.preventDefault();
        axios.post(`https://fakestoreapi.com/products`, {
            title: inputData.title,
            price: inputData.price,
            desc: inputData.description,
            category: category,
            image: file,
        }).then(res=>{
            console.log(res.data)
        })
    }
    useEffect(() => {
        // all product api call
        const getAllData = async () => {
            const res = await axios.get('https://fakestoreapi.com/products').catch((error) => {
                console.log(error);
            })
            const actualData = res.data;
            setAllList(actualData);
        }
        // all users api call
        const getUserData = async () => {
            const res = await axios.get('https://fakestoreapi.com/users').catch((error) => {
                console.log(error);
            })
            const userData = res.data;
            setUserList(userData);
        }
        getAllData();
        getUserData();
    }, [])

    // alert msg
    const success_msg = () => toast("New Product Added");
    return (
        <>
            <div className="main_body">
                <div className="container-medium">
                    <div className="admin_sec">
                        <h1 className='main_title'>Admin</h1>
                        <div className="admin_inner">
                            <div className="admin_left">
                                <div className="admin_header">
                                    <h2>Add New Product</h2>
                                </div>
                                <form onSubmit={SubmiForm}>
                                    <div className="form_group">
                                        <label>Product Cateory</label>
                                        <select value={category} onChange={SelectEvent}>
                                            {/* <option disabled defaultValue>Select Category</option> */}
                                            <option>electronics</option>
                                            <option>jewelery</option>
                                            <option>men's clothing</option>
                                            <option>women's clothing</option>
                                        </select>
                                    </div>
                                    <div className="form_group">
                                        <label>Product Name</label>
                                        <input type="text" name="title" placeholder='Product name' value={inputData.title} onChange={InputEvent} />
                                    </div>
                                    <div className="form_group">
                                        <label>Product Price</label>
                                        <input type="text" name="price" placeholder='Product price' value={inputData.price} onChange={InputEvent} />
                                    </div>
                                    <div className="form_group">
                                        <label>Product Image</label>
                                        <input type="file" name="upload" placeholder='upload' onChange={FileUpload}
                                        />
                                    </div>
                                    <div className="form_group">
                                        <label>Product Description</label>
                                        <textarea name="desc" placeholder='product description' value={inputData.desc} onChange={InputEvent}></textarea>
                                    </div>
                                    <div className="btn_wrap">
                                        <button type='submit' onClick={success_msg}>Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="admin_right">
                                <div className="admin_header">
                                    <h2>Product List</h2>
                                    <input type='text' name='search_data' value={Psearch} onChange={(e) => { setPsearch(e.target.value) }} placeholder='Search' />
                                </div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>category</th>
                                            <th>Image</th>
                                            <th>Description</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {AllList.filter((value) => {
                                            if (Psearch == '') {
                                                return value;
                                            }
                                            else if (value.title.toLowerCase().includes(Psearch) || value.category.toLowerCase().includes(Psearch)) {
                                                return value;
                                            }
                                        }).map((value) => {
                                            return (
                                                <tr key={value.id}>
                                                    <td>{value.title}</td>
                                                    <td>{value.price}</td>
                                                    <td>{value.category}</td>
                                                    <td><img src={value.image} alt="" /></td>
                                                    <td>{value.description}</td>
                                                    <td><EditIcon className='edit' /></td>
                                                    <td><DeleteIcon className='edit' /></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <div className="pagination_wrap">
                                    <ul className="pagination">
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="all_user">
                            <div className="admin_right">
                                <div className="admin_header">
                                    <h2>Product List</h2>
                                    <input type='text' name='search_data' value={Usearch} onChange={(e) => { setUsearch(e.target.value) }} placeholder='Search' />
                                </div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>SL No</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>category</th>
                                            <th>Username</th>
                                            <th>Description</th>
                                            <th>City</th>
                                            <th>Street</th>
                                            <th>House No</th>
                                            <th>PIN</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {UserList.filter((value) => {
                                            if (Usearch == '') {
                                                return value;
                                            }
                                            else if (value.username.toLowerCase().includes(Usearch) || value.email.toLowerCase().includes(Usearch)) {
                                                return value;
                                            }
                                        }).map((value) => {
                                            return (
                                                <tr key={value.id}>
                                                    <td>{value.id}</td>
                                                    <td>{value.name.firstname}</td>
                                                    <td>{value.name.lastname}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.username}</td>
                                                    <td>{value.phone}</td>
                                                    <td>{value.address.city}</td>
                                                    <td>{value.address.street}</td>
                                                    <td>{value.address.number}</td>
                                                    <td>{value.address.zipcode}</td>
                                                    <td><EditIcon className='edit' /></td>
                                                    <td><DeleteIcon className='edit' /></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <div className="pagination_wrap">
                                    <ul className="pagination">
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </>
    )
}

export default Admin;
