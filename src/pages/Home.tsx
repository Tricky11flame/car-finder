import { useState, useEffect } from 'react'
import useCarFilters from '../hooks/useCarFilters'
import CarCard from '../components/CarCard'

const Home = () => {
  const [search, setSearch] = useState<string>('')
  const [brand, setBrand] = useState<string>('')
  const [fuel, setFuel] = useState<string>('')
  const [sort, setSort] = useState<'asc' | 'desc' | ''>('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const carsPerPage = 10

  const filteredCars = useCarFilters({ search, brand, fuel, sort })
  const totalPages = Math.ceil(filteredCars.length / carsPerPage)

  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  )

  // Reset to first page on filter/sort/search change
  useEffect(() => {
    setCurrentPage(1)
  }, [search, brand, fuel, sort])

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🚗 Car Finder</h1>

      {/* Filters */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 border rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">All Brands</option>
          <option value="Honda">Honda</option>
          <option value="Toyota">Toyota</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Tata">Tata</option>
        </select>

        <select
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">All Fuel Types</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as 'asc' | 'desc' | '')}
          className="p-2 border rounded w-full"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Car Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedCars.length > 0 ? (
          paginatedCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No cars found 😕
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded border transition ${
                currentPage === page
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
