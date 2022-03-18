import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav>
            <div className="Page-news">
                <Link to="/">New News</Link>    {/*This is to go to the home page */}
            </div>
            <div className="Sign-in">
                <Link to="/signin">SIGN-IN</Link>    {/*This is to go to the sign in page */}
            </div>
        </nav>
    )
}

export default Navbar