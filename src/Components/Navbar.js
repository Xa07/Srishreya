import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-secondary navabar-dark">
            <div className="container-fluid">
            <Link className="nav-link" to="/">
               
                            </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">

                        <li className="nav-item" to="/">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item" to="/">
                            <Link className="nav-link" to="/menu">
                                Menu
                            </Link>
                        </li>
                        <li className="nav-item" to="/">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar