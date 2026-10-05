import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../componenets/Header'
import api from '../api.js'

function EditProduct() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {

        fetchProduct();

    }, []);

    const fetchProduct = async () => {

        const response = await api.get(`/products/${id}`);

        setName(response.data.name);
        setPrice(response.data.price);
        setCategory(response.data.category);

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const updatedProduct = {
            name,
            price,
            category
        };

        await api.put(`/products/${id}`, updatedProduct);

        navigate("/");
    };

    return (
        <>
            <Header />
            <main className='min-h-screen bg-gray-400 p-8'>
                <div className='mx-auto max-w-xl'>
                    <h1 className='mb-8 text-center text-3xl font-bold'>Edit Product</h1>


                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-3'>
                            <input
                                type='text'
                                placeholder='Product Name'
                                aria-label='Product name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='rounded bg-white p-2'
                                required
                            />
                            <input
                                type='number'
                                placeholder='Product Price'
                                aria-label='Product price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className='rounded bg-white p-2'
                                min='0'
                                step='0.01'
                                required
                            />
                            <input
                                type='text'
                                placeholder='Product Category'
                                aria-label='Product category'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className='rounded bg-white p-2'
                                required
                            />
                            <button type="submit"
                            className='bg-green-600 p-2 text-white'>
                                Update Product
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default EditProduct
