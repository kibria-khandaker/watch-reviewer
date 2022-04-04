import React from 'react';
import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full bg-white'>
            <div className='max-w-screen-xl  text-center  mx-auto p-4'>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <h2 className='text-3xl text-center  text-sky-400 mt-5'>Oops..... .!</h2>
                    <button onClick={() => navigate(-1)} className=' bg-sky-400 text-white ml-3 flex items-center text-3xl border px-5 py-2 rounded-lg  mt-5'>
                        <AiOutlineRollback /> Back
                    </button>
                </div>
                <img className=' w-2/5 mx-auto' src="NotFound_404.jpg" alt="" />
            </div>
        </div>
    );
};

export default NotFound;