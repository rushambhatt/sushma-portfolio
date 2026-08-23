import { Link } from "react-router-dom"

function NavBar(){
    return <nav className="nav-bar">
        <div className="navbar-title">
            <h1>Sushma's Hair and Beauty Portfolio</h1>
            <div className="navbar-links">
                <Link to="/home" className="nav-link">HomePage</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </div>
    </nav>
}

export default NavBar