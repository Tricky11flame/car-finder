// src/components/WishlistButton.tsx
import { useEffect, useState } from 'react'
import { addToWishlist, removeFromWishlist, isInWishlist } from '../utils/wishlistUtils'

const WishlistButton = ({ carId }: { carId: number }) => {
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setAdded(isInWishlist(carId))
  }, [carId])

  const handleToggle = () => {
    if (added) {
      removeFromWishlist(carId)
    } else {
      addToWishlist(carId)
    }
    setAdded(!added)
  }

  return (
    <button
      onClick={handleToggle}
      className={`mt-4 px-4 py-2 rounded transition font-medium ${
        added
          ? 'bg-red-600 text-white hover:bg-red-700'
          : 'bg-indigo-600 text-white hover:bg-indigo-700'
      }`}
    >
      {added ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  )
}

export default WishlistButton
