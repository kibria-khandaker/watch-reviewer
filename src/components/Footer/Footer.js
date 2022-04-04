import React from 'react';
import { TiSocialFacebook, TiSocialGithub, TiSocialLinkedin, TiSocialSkype, TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className='bg-slate-100  w-full py-8 '>
            <div className='max-w-screen-xl mx-auto px-4 flex-auto md:flex justify-around items-center'>
                <p className=' text-xs  text-center py-2'> Copyright &copy;Watch Reviewer, All Rights Reserved</p>
                <p className='flex justify-center md:justify-end items-center gap-6'> 
                    <TiSocialFacebook className='cursor-pointer border border-sky-400 rounded-full' /> 
                    <TiSocialSkype className='cursor-pointer border border-sky-400 rounded-full' />
                    <TiSocialTwitter className='cursor-pointer border border-sky-400 rounded-full' />
                    <TiSocialGithub className='cursor-pointer border border-sky-400 rounded-full' />
                    <TiSocialLinkedin className='cursor-pointer border border-sky-400 rounded-full' />
                </p>
            </div>
        </footer>
    );
};

export default Footer;