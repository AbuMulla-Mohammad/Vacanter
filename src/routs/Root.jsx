import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const Root = () => {
    return (
        <>
            <Navbar />
            <div className="container  w-[85%] m-auto">
                <Outlet />
            </div>
        </>
    )
}

export default Root
