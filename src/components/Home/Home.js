import React from 'react';

const Home = () => {
    return (
        <div className='w-full bg-white py-12'>
            <div className='max-w-screen-xl mx-auto p-4 md:flex justify-center md:justify-between items-center'>
                <div className='w-auto md:w-1/2'>
                    <img className='h-[500px]  mx-auto md:mx-0' src="https://raw.githubusercontent.com/kibria-khandaker/api_for_watch_review/master/watch.jpg" alt="watchImage" />
                </div>
                <div className='w-auto md:w-1/2 text-center md:text-right'>
                    <h2 className='text-4xl lg:text-6xl font-bold my-10 '>Watch <span className=' text-cyan-500'>save time</span> And Enhances personality </h2>
                    <p className=' text-xl mg:text-2xl '> Watches not only remind you about your time, and that you need to value it greatly, but watches also gives you the occasion to partake in your passion for time with like-inclined people who also carry the passion for timekeepers.
</p>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto p-4'>
                    <h2>For review</h2>
            </div>
        </div>
    );
};

export default Home;