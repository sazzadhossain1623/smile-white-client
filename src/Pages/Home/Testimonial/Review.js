import React from 'react'

function Review({ review }) {
    const { name, img, review: userReview, location } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-10">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt=''/>
                        </div>
                    </div>
                    <div>
                        <h5 className='lext-lg font-bold text-secondary'>{name}</h5>
                        <p className='font-bold'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review