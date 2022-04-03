import React from 'react';
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to="/" className='font-sans font-bold text-xl'>
                Watch Reviewer
            </Link>
        </div>
    );
};

export default Logo;