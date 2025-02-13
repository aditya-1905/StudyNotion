import React, { useEffect, useState } from 'react'
import RatingStars from "../../common/RatingStars"
import { Link } from 'react-router-dom'
import GetAvgRating from '../../../utils/avgRating';

const Course_Card = ({course,Height}) => {

    const [avgReviewCount,setAvgReviewCount] = useState(0);

    useEffect(() => {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    },[course])

  return (
    <div>
        <Link to={`/courses/${course._id}`}>
            <div className= " ">
                <div className="rounded-lg">
                    <img src={course?.thumbnail}
                    alt='course thumbnail'
                    className={`${Height} w-full rounded-xl object-cover`}/>
                </div>

                <div className="flex flex-col gap-2 px-1 py-3">
                    <p className="text-xl text-richblack-5">{course?.courseName}</p>
                    <p className="text-sm text-richblack-50">{course?.instructor?.firstName} {course?.instructor?.lastName}</p>
                    <div className="flex items-center gap-2">
                        <RatingStars Review_Count={avgReviewCount}/>
                    </div>
                    <p className="text-xl text-richblack-5">{course?.price}</p>
                </div>

            </div>
        </Link>
    </div>
  )
}

export default Course_Card
