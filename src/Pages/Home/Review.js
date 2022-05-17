import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg shadow-xl text-primary-content">
            <div className="card-body">

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, quod quasi perferendis beatae facilis qui.</p>
               
                <div className="flex items-center gap-2 pt-5">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-md md:text-xl">{review.name}</h4>
                        <h4 className="text-md md:text-xl">{review.location}</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;