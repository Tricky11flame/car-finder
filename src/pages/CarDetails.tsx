import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import WishlistButton from '../components/WishlistButton'

type Car = {
  id: number
  name: string
  brand: string
  fuel: string
  price: number
  seating: number
  image: string
  description: string
}

const CarDetails = () => {
  const { id } = useParams()
  const [car, setCar] = useState<Car | null>(null)

  useEffect(() => {
    const fetchCar = async () => {
      const data: Car[] = await fetch('/cars.json').then(res => res.json())
      const selected = data.find(car => car.id === Number(id))
      setCar(selected || null)
    }

    fetchCar()
  }, [id])

  if (!car) return <div className="text-center py-10">Car not found!</div>

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-block mb-4 text-blue-600 hover:underline text-sm"
      >
        ← Back to Search
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-80 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/fallback.jpg'
          }}
        />

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
              {car.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-1">Brand: <span className="font-medium">{car.brand}</span></p>
            <p className="text-gray-500 dark:text-gray-400 mb-1">Fuel Type: <span className="font-medium">{car.fuel}</span></p>
            <p className="text-gray-500 dark:text-gray-400 mb-1">Seating Capacity: <span className="font-medium">{car.seating}</span></p>
            <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mt-3">
              ₹{car.price.toLocaleString()}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">{car.description}</p>
          </div>

          <div className="mt-6">
            <WishlistButton carId={car.id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetails
