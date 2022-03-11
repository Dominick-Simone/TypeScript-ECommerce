import React from 'react'
import "../css/Header.css"
const Header = () => {
    return (
        <header>
            <h1>Company Name</h1>
            <nav>
            <ul>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#Menu">Menu</a>
                </li>
                <li>
                    <a href="#order">Order</a>
                </li>
            </ul>
        </nav>
        </header>
    )
}

export default Header