import React from 'react';
import { Link } from "react-router-dom";

const NavLists = () => {
    return (
        <nav className='menuList flex flex-col md:flex-row  gap-4 text-xl'>
            <Link to="/">Home</Link>
            <Link to="/reviews">reviews</Link>
            <Link to="/dashboard">dashboard</Link>
            <Link to="/blogs">blogs</Link>
            <Link to="/about">about</Link>
        </nav>
    );
};

export default NavLists;