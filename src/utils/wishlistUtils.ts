// src/utils/wishlistUtils.ts
export const getWishlist = (): number[] => {
    const data = localStorage.getItem('wishlist')
    return data ? JSON.parse(data) : []
  }
  
  export const addToWishlist = (id: number) => {
    const wishlist = getWishlist()
    if (!wishlist.includes(id)) {
      localStorage.setItem('wishlist', JSON.stringify([...wishlist, id]))
    }
  }
  
  export const removeFromWishlist = (id: number) => {
    const wishlist = getWishlist().filter(item => item !== id)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }
  
  export const isInWishlist = (id: number): boolean => {
    return getWishlist().includes(id)
  }
  