import DarkModeToggle from './DarkModeToggle'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="bg-gray-100 dark:bg-gray-800 p-4 shadow">
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <h1 className="text-xl font-bold">
        <Link to="/">Car Finder</Link>
      </h1>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
        <DarkModeToggle />
      </nav>
    </div>
  </header>
)

export default Header
