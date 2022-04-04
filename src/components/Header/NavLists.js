import React from 'react';
import { NavLink } from "react-router-dom";

const NavLists = () => {
    return (
        <nav className='menuList flex flex-col md:flex-row  gap-4 text-xl'>
            <NavLink className={({ isActive }) => isActive ? 'text-cyan-500 underline decoration-wavy' : ' text-black'} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-cyan-500 underline decoration-wavy' : ' text-black'} to="/reviews">Reviews</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-cyan-500 underline decoration-wavy' : ' text-black'} to="/dashboard">Dashboard</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-cyan-500 underline decoration-wavy' : ' text-black'} to="/blogs">Blogs</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-cyan-500 underline decoration-wavy' : ' text-black'} to="/about">About</NavLink>
        </nav>
    );
};

export default NavLists;