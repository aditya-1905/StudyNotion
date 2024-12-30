import React, { useEffect } from 'react'
import { VscAdd } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../common/IconBtn"
import CoursesTable from "./InstructorCourses/CoursesTable"

const MyCourses = () => {
    const {token} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [courses,setCourses] = useState([])

    useEffect(() => {
        const fetchCourses = async () => {
            const result = await fetchInstructorCourses(token)
            if(result){
                setCourses(result)
            }
        }
        fetchCourses() 
    },[])

  return (
    <div className='flex flex-col gap-y-10'>
        <div className='flex justify-between'>
            <div className='text-3xl font-medium text-richblack-5'>
                My Courses
            </div>

            <IconBtn 
                text="Add Course"
                onclick={() => navigate("/dashboard/add-course")}>
                <VscAdd />
            </IconBtn>
        </div>

        {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}

export default MyCourses