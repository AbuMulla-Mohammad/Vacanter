import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const Root = () => {
    return (
        <>
            <div className='bg-[#E7E6E6]'>
                <div className=' w-[85%] m-auto' >
                    <Navbar />
                    <div className="m-auto p-2 ">

                        <Outlet />
                    </div>
                </div >
            </div >
        </>
    )
}

export default Root
