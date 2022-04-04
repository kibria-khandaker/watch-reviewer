import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full bg-white'>
            <div className='max-w-screen-xl mx-auto p-4'>
                <div className=' w-1/2 mx-auto'>
                    <img src="" alt="" />
                    <h2 className=' text-4xl font-semibold py-5'> <span className=''>Qustion: </span> What is the Context API and How does work?</h2>
                    <p className=' text-lg'>if we know about global scope, i think React Context API work like global scope. This is the alternative to "prop drilling". <br />
                        react props system follow parent to child by child for passing data,
                        But 'react Context API' directly able to pass data any where using <b>createContext()</b> and by pass with <b>Value</b>. every component able to receive directly with <b>useContext()</b>, here no need props by props step. But one thing very important : and need Bound a main content with our declare Context name the main component.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;