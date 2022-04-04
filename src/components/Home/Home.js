import React from 'react';
import { VscCommentDiscussion } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import useReviews from './../../hooks/useReviews';
import Rating from 'react-rating';
import { ImStarFull } from "react-icons/im";

const Home = () => {

    const [reviews, setReviews] = useReviews();

    const navigate = useNavigate();

    return (
        <div className='w-full bg-white py-12'>

            <div className='max-w-screen-xl   mx-auto  p-2 md:p-4 flex flex-col md:flex-row justify-center md:justify-between items-center'>
                <div className='w-auto md:w-1/2'>
                    <img className=' max-h-[500px]  mx-auto md:mx-0' src="https://raw.githubusercontent.com/kibria-khandaker/api_for_watch_review/master/watch.jpg" alt="watchImage" />
                </div>
                <div className='w-auto md:w-1/2 text-center md:text-right'>
                    <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold my-10 '>Watch <span className=' text-sky-400'>save time</span> And Enhances personality </h2>
                    <p className=' text-xl mg:text-2xl '> Watches not only remind you about your time, and that you need to value it greatly, but watches also gives you the occasion to partake in your passion for time with like-inclined people who also carry the passion for timekeepers.
                    </p>
                </div>
            </div>

            <div className='max-w-screen-xl mx-auto p-2 md:p-4'>
                <h2 className=' text-center text-2xl md:text-4xl mt-36'> Customer Reviews (3) </h2>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 '>
                    {
                        reviews.map(review => (
                            <div key={review.id} className='border rounded-lg p-2 md:p-5'>
                                <div className='flex flex-col md:flex-row  items-center gap-4'>
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
                                    <span className='indent-8 text-sm'>" {review.desc} "</span>
                                </p>
                            </div>
                        )).slice(0, 3)
                    }
                </div>
                <button onClick={() => navigate('/reviews')} className=' bg-sky-400 text-white  flex items-center md:text-3xl border px-5 py-2 rounded-lg mx-auto'>
                    <VscCommentDiscussion /> &nbsp; See All Reviews
                </button>
            </div>
        </div>
    );
};

export default Home;