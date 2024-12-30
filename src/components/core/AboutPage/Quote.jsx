import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
        "We are passionate about revolutionizing the way we learn. Our innovative platform 
        <HighlightText text={"combines technology"} />,{" "}
        <span className='bg-gradient-to-b from-[#FF5129] to-[#F09819] bg-clip-text text-transparent font-bold'>
          {" "}
          expertise
        </span>
        ,and community to create an
        <span className='bg-gradient-to-b from-[#FF5129] to-[#F09819] bg-clip-text text-transparent font-bold'>
          {" "}
          unparalleled educational experience
        </span>"
    </div>
  )
}

export default Quote