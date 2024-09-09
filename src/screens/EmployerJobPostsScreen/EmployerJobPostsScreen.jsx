import React from 'react'
import EmployerJobPosts from '../../components/employer/employerJobPosts/EmployerJobPosts'
import { Outlet } from 'react-router-dom'

export default function EmployerJobPostsScreen() {
    return (
        <div>
            <EmployerJobPosts />
        </div>
    )
}
