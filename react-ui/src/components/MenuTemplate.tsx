import React from 'react'
import "../css/MenuTemplate.css"
import {Link} from "react-router-dom"
const MenuTemplate = () => {
  return (
    <section className="menuSection">
        <div className='menuTitle'>
            <h1>Chicken</h1>
        </div>
        <div className='menuItem'>
            <h3>Chicken Lo Mein</h3>
            <p>Item Description: This is an example item description</p>
        </div>
        <div className='menuItem'>
            <h3>Sweet and Sour Chicken</h3>
            <p>Item Description: This is an example item description</p>
        </div>
        <div className='menuTitle'>
            <h1>Beef</h1>
        </div>
        <div className='menuItem'>
            <h3>Beef Lo Mein</h3>
            <p>Item Description: This is an example item description</p>
        </div>
        <div className='menuItem'>
            <h3>Beef and Broccoli</h3>
            <p>Item Description: This is an example item description</p>
        </div>
        <div className='menuTitle'>
            <h1>Chicken</h1>
        </div>
        <div className='menuItem'>
            <h3>Chicken Lo Mein</h3>
            <p>Item Description: This is an example item description</p>
        </div>
        <div className='menuItem'>
            <h3>Sweet and Sour Chicken</h3>
            <p>Item Description: This is an example item description</p>
        </div>
        <div className='menuTitle'>
            <h1>Beef</h1>
        </div>
        <div className='menuItem'>
            <h3>Beef Lo Mein</h3>
            <p>Item Description: This is an example item description</p>
        </div>
        <div className='menuItem'>
            <h3>Beef and Broccoli</h3>
            <p>Item Description: This is an example item description</p>
        </div>
    </section>
  )
}

export default MenuTemplate