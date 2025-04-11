import { useEffect, useState } from 'react'
import carsData from '../data/mockCar'

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

type FilterParams = {
  brand?: string
  fuel?: string
  search?: string
  sort?: 'asc' | 'desc' | ''
}

const useCarFilters = (params: FilterParams): Car[] => {
  const [filteredCars, setFilteredCars] = useState<Car[]>([])

  useEffect(() => {
    let filtered = [...carsData]

    // Search
    if (params.search?.trim()) {
      const searchTerm = params.search.toLowerCase()
      filtered = filtered.filter(car =>
        car.name.toLowerCase().includes(searchTerm)
      )
    }

    // Brand filter
    if (params.brand) {
      filtered = filtered.filter(car => car.brand === params.brand)
    }

    // Fuel filter
    if (params.fuel) {
      filtered = filtered.filter(car => car.fuel === params.fuel)
    }

    // Price sorting
    if (params.sort === 'asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (params.sort === 'desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    setFilteredCars(filtered)
  }, [params])

  return filteredCars
}

export default useCarFilters
