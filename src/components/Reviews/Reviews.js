import React from 'react';
import useReviews from './../../hooks/useReviews';
import Rating from 'react-rating';
import { ImStarFull } from "react-icons/im";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='w-full bg-white'>
            <div className='max-w-screen-xl mx-auto p-2 md:p-4'>
                <h2 className=' text-center  text-xl md:text-4xl mt-10'> What Our Customers Say! ({reviews.length}) </h2>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 '>
                    {
                        reviews.map(review => (
                            <div className='border rounded-lg p-2 md:p-5'>
                                <div className='flex flex-col md:flex-row items-center gap-4'>
                                    <img className=' w-20 h-20 object-cover border-4 border-sky-400 rounded-full' src={review.img} alt="imageReviewer" />
                                    <div>
                                        <h3 className='font-medium pb-3'>{review.name}</h3>
                                        <p className='font-light text-xs'> Customer id : {review.id}</p>
                                        <p>
                                            <Rating
                                                initialRating={review.rate}
                                                emptySymbol={<ImStarFull />}
                                                fullSymbol={<ImStarFull style={{ color: 'goldenrod' }} />}
                                                readonly
                                            ></Rating>
                                        </p>
                                    </div>
                                </div>
                                <p className='mt-5'>
                                    <span className=' '>Customer Say:</span>
                                    <span className='indent-8 text-sm'> " {review.desc} "</span>
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;