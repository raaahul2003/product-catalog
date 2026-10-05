import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../componenets/Header'
import api from '../api.js'


function Product() {
    const [productList, setProductList] = useState()

   
    const fetchProducts = async () => {

        const response = await api.get("/products");

        setProductList(response.data);

    };

    useEffect(() => {

        fetchProducts();

    }, []);



    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) {
            return;
        }

        await api.delete(`/products/${id}`);

        setProductList(
            productList.filter((product) => product.id !== id)
        );

        fetchProducts();
    };



    return (

        <>
            <Header />
            <div className='min-h-screen bg-gray-400 p-8 '>

                <div className='mx-auto'>
                    <h2 className='text-3xl font-bold text-center mb-8'>Products</h2>

                    <div className='rounded-lg bg-white shadow-md overflow-auto'>
                        <table className='w-full text-left'>
                            <thead className='bg-gray-200 text-gray-700'>
                                <tr>
                                    <th className='px-6 py-4 font-bold'>Name</th>
                                    <th className='px-6 py-4 font-bold'>Price</th>
                                    <th className='px-6 py-4 font-bold'>Category</th>
                                    <th className='px-6 py-4 font-bold'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productList?.map((product) => (
                                    <tr key={product.id}>
                                        <td className='px-6 py-4 font-medium'>{product.name}</td>
                                        <td className=' px-6 py-4'>₹{product.price}</td>
                                        <td className=' px-6 py-4'>{product.category}</td>
                                        <td className=' px-6 py-4'>
                                            <div className='flex gap-4'>
                                                <Link
                                                    to={`/product/${product.id}/view`}
                                                    className='font-medium bg-blue-400 text-white p-1 rounded hover:text-black'
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    type='button'
                                                    onClick={() => handleDelete(product.id)}
                                                    className='font-medium bg-red-600 text-white p-1 rounded hover:text-black'
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {productList?.length === 0 && (
                                    <tr>
                                        <td className='px-6 py-8 text-center text-gray-500'>
                                            No products to display.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className='p-5 w-full text-center'>
                        <Link to={'/addproduct'} className='bg-green-600 p-2 text-white rounded ps-10 pe-10'>Add Product</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product