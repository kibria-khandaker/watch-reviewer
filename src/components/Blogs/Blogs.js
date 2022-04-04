import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full bg-white'>
            <div className='max-w-screen-xl mx-auto p-4'>
                <div className=' w-4/6 mx-auto'>

                    <div className='py-10'>
                        <h2 className=' text-4xl font-medium'> <span className='text-sky-400'>Qustion 1: </span> What is the Context API and How does work?</h2>
                        <img className='  py-6 px-6 ' src="https://dmitripavlutin.com/90649ae4bdf379c482ad24e0dd220bc4/react-context-3.svg" alt="" />
                        <p className=' text-lg'> <span className='text-sky-400 font-bold'>Answer: </span>  if we know about global scope, i think React Context API work like global scope. This is the alternative to "prop drilling". <br />
                            react props system follow parent to child by child for passing data,
                            But 'react Context API' directly able to pass data any where using <span className='font-medium'>createContext()</span> and by pass with <span className='font-medium'>Value</span>. every component able to receive directly with <span className='font-medium'>useContext()</span>, here no need props by props step. But one thing very important : and need Bound a main content with our declare Context name the main component.
                        </p>
                    </div>
                    <hr />

                    <div className='py-10'>
                        <h2 className=' text-4xl font-medium'> <span className='text-sky-400'> Qustion 2: </span> Semantic tags? </h2>
                        <img className='mx-auto  py-8 px-6 ' src="https://www.w3schools.com/html/img_sem_elements.gif" alt="" />

                        <p>  <span className='text-sky-400 font-bold'>Answer: </span>
                            Semantics tags are those tags which modern browsers can understand what kind of particular section the web developer used. This tags has their own indentications in browser, but their visual output may be same somnetimes. This tags has been updated in html 5 from previous version. For example, In previous version of html, there was only 1 section tag which was <i>{`"<div>"`}</i> . Developer used only div tag for every section in a website and browser couldn't identify the section's identity. But now, html 5 has added some browser friendly semantic tags. Like <i>{`<section> `}</i>for a normal section, <i>{`<nav>`}</i> for navigation bar, <i>{`<form>`}</i> for a form section, <i>{`<footer>`}</i> for a footer section etc. There are also some semantic tags for content like <i>{`<h1>, <h2>,...,<h5>`}</i> and they have different outputs. <br /><br />
                            Here some semantic elements we use it different section of a web page
                            <i>{` <article>  <aside>  <details> <figcaption> <figure>  <footer> <header>  <main> <mark> <nav>  <section>  <summary>  <time> `}</i>
                        </p>
                    </div>
                    <hr />

                    <div className='py-10'>
                        <h2 className=' text-4xl font-medium mb-10'> <span className='text-sky-400'> Qustion 3: </span> Difference inline Vs block Vs inline-block </h2>
                        <p><span className='text-sky-400 font-bold'>Answer: </span></p>
                        <div className=' grid grid-cols-3'>
                            
                            <p className=' border p-2'>
                                <p className='text-center font-bold'>inline</p>
                                <br /><hr />
                                <b>(1)</b> We cannot define specific width and height, it will take automatically.
                                <br /><hr />
                                <b>(2)</b> It takes width and height from its child element or content
                                <br /><hr />
                                <b>(3)</b> Inline element doesn’t support top and bottom margin, But it supports left and right margin
                                <br /><hr />
                                <b>(4)</b> Multiple inline elements can be in a same line.
                                <br /><hr />
                                <b>(5)</b> {`<a>, <span>, <img>`} etc are Inline elements in html
                            </p>

                            <p className=' border p-2'>
                                <p className='text-center font-bold'>block</p>
                                <br /><hr />
                                <b>(1)</b> We can define width of its own but still it will take the full display size.
                                <br /><hr />
                                <b>(2)</b> It takes 100% display width and dont let any other elements to place inside of its area.
                                <br /><hr />
                                <b>(3)</b> Block element supports all the margins
                                <br /><hr />
                                <b>(4)</b> Multiple block element will be in multiple lines each of 100% display width
                                <br /><hr />
                                <b>(5)</b> {`<div>, <p>, <h1>`} etc are Inline elements in html
                            </p>

                            <p className=' border p-2'>
                                <p className='text-center font-bold'>inline-block</p>
                                <br /><hr />
                                <b>(1)</b> Its like inline elements but we can define width and height.
                                <br /><hr />
                                <b>(2)</b> It takes the width and height which is provided.
                                <br /><hr />
                                <b>(3)</b> Inline-Block elements also supports all the margins.
                                <br /><hr />
                                <b>(4)</b> Multiple inline-block element can be in same line if their total width is smaller or equal to 100% of display width.
                                <br /><hr />
                                <b>(5)</b> There is no specific inline-block element in html
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;