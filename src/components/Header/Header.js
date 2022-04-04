import React, { useState } from 'react';
import { GrClose } from "react-icons/gr";
import { HiMenu } from 'react-icons/hi';
import Logo from './Logo';
import NavLists from './NavLists';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (

<div className='bg-slate-100 w-full'>
<div className='max-w-screen-xl mx-auto py-2'>
            <div onClick={() => setOpen(!open)} className='cursor-pointer w-10 h-10 md:hidden ml-5 text-4xl'>
                {open ? <GrClose className=''></GrClose> : <HiMenu className=''> </HiMenu>}
            </div>
            <div className={`for_responsive_kib z-10 md:flex justify-between  p-5 bg-slate-100 w-full md:static absolute duration-500 ease-in ${open ? 'top-11' : 'top-[-550px]'}`}>
                <Logo></Logo>
                <NavLists></NavLists>
            </div>
        </div>
</div>
    );
};

export default Header;