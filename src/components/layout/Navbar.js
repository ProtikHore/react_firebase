import React from 'react'
import { Link } from 'react-router-dom'

const Navabr = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">React Firebase</Link>
            </div>
        </nav>
    )
}

export default Navabr