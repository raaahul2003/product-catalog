import { useState } from 'react'
import Header from '../componenets/Header'
import { useNavigate } from 'react-router-dom'
import api from '../api.js'

function Addproduct() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

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
    } finally {
      setIsSubmitting(false)
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
                aria-label='Product name'
                value={name}
                onChange={(event) => setName(event.target.value)}
                className='rounded bg-white p-2'
                required
              />
              <input
                type='number'
                placeholder='Product Price'
                aria-label='Product price'
                value={price}
                onChange={(event) => setPrice(event.target.value)}
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
                onChange={(event) => setCategory(event.target.value)}
                className='rounded bg-white p-2'
                required
              />
              {error && <p role='alert' className='text-red-800'>{error}</p>}
              <button
                type='submit'
                disabled={isSubmitting}
                className='rounded bg-green-500 p-2 text-xl text-white disabled:opacity-60'
              >
                {isSubmitting ? 'Saving...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Addproduct