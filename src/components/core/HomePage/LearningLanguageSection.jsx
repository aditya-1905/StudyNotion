import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from "../../../assets/Images/Know_your_progress.svg"
import compare_with_others from "../../../assets/Images/Compare_with_others.svg"
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg"
import CTAButton from "../../../components/core/HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px]'>
        <div className='flex flex-col gap-5 items-center'>
        
            <div className='text-4xl font-semibold text-center'>
                Your Swiss Knife for
                <HighlightText text={" learning any language"}/>
            </div>

            <div className='text-center text-richblack-700 mx-auto text-base font-medium lg:w-[75%] leading-6 mt-3'>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,
                progress tracking, custom schedule and more.
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-0'>
                <img 
                    src= {know_your_progress}
                    alt='KnowYourProgressImage'
                    className='object-contain lg:-mr-32'
                />
                <img 
                    src= {compare_with_others}
                    alt='compareWithOthers'
                    className='object-contain lg:-ml-36 lg:-mt-5 -mt-16'
                />
                <img 
                    src= {plan_your_lessons}
                    alt='planYourLessons'
                    className='object-contain lg:-ml-36 lg:-mt-5 -mt-16'
                />
                
            </div>

            <div className='w-fit mx-auto lg:mb-20 mb-8 -mt-5'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div>
                        Learn More
                    </div>
                </CTAButton>
            </div>
        </div>
    </div>
  )
}

export default LearningLanguageSection