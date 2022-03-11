import React from 'react'
import "../css/Header.css"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <h1>Company Name</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/order">Order</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header