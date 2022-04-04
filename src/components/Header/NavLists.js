import React from 'react';
import { NavLink } from "react-router-dom";

const NavLists = () => {
    return (
        <nav className='menuList flex flex-col md:flex-row  gap-4 text-xl'>
            <NavLink className={({ isActive }) => isActive ? 'text-cyan-500 underline decoration-wavy' : ' text-black'} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-cyan-500 underline decoration-wavy' : ' text-black'} to="/reviews">reviews</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-cyan-500 underline decoration-wavy' : ' text-black'} to="/dashboard">dashboard</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-cyan-500 underline decoration-wavy' : ' text-black'} to="/blogs">blogs</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-cyan-500 underline decoration-wavy' : ' text-black'} to="/about">about</NavLink>
        </nav>
    );
};

export default NavLists;