import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/trending">Trending</Link>
      <Link to="/top-hits">Top Hits</Link>
    </div>
  )
}

export default Navbar
