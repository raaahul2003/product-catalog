import { useState } from 'react'
import Header from '../componenets/Header'
import { useNavigate } from 'react-router-dom'
import api from '../api.js'

function Addproduct() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            await api.post('/products', {
                name: name,
                price: price,
                category: category,
            })
            navigate('/')
        } catch (requestError) {
            setError(
                'Unable to save the product.'
            )
        }
    }

    return (
        <>
            <Header />
            <div className='min-h-screen bg-gray-400 p-8'>
                <div className='mx-auto max-w-xl'>
                    <h1 className='mb-8 text-center text-3xl font-bold'>Add Products</h1>

                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-3'>
                            <input
                                type='text'
                                placeholder='Product Name'
                                onChange={(e) => setName(e.target.value)}
                                className='rounded bg-white p-2'
                                required
                            />
                            <input
                                type='number'
                                placeholder='Product Price'
                                onChange={(e) => setPrice(e.target.value)}
                                className='rounded bg-white p-2'
                                min='0'
                                step='0.01'
                                required
                            />
                            <input
                                type='text'
                                placeholder='Product Category'
                                onChange={(e) => setCategory(e.target.value)}
                                className='rounded bg-white p-2'
                                required
                            />
                            {error && <p className='text-red-800'>{error}</p>}
                            <button
                                type='submit'
                                className='rounded bg-green-500 p-2 text-xl text-white '
                            >Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addproduct