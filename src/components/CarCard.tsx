type Car = {
    id: number
    name: string
    brand: string
    fuel: string
    price: number
    seating: number
    image: string
  }
  
  import { Link } from 'react-router-dom'

  const CarCard = ({ car }: { car: Car }) => {
    return (
      <Link to={`/car/${car.id}`}>
        <div className="border rounded-xl p-4 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition">
          <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded" />
          <h3 className="mt-2 text-lg font-semibold">{car.name}</h3>
          <p className="text-sm text-gray-500">{car.brand} • {car.fuel}</p>
          <p className="text-sm">Seating: {car.seating}</p>
          <p className="font-bold mt-2 text-blue-600 dark:text-blue-400">₹{car.price}</p>
        </div>
      </Link>
    )
  }
  
  export default CarCard
  