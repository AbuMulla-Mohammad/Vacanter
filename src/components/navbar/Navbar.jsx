import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../features/auth/authSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { clearUserInfo } from "../../features/userInfo/userInfoSlice";
import './Navbar.css'

export default function Navbar() {
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOutClick = () => {
        dispatch(clearToken());
        dispatch(clearUserInfo());
        navigate('/Login')
    }
    return (


        // <nav className=" fixed w-full z-20 top-0 start-0 bg-white">
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <Link to={`/`} className="flex items-center space-x-3 rtl:space-x-reverse">
        //             <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">Vacanter</span>
        //         </Link>
        //         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        //             <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
        //             <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        //                 <span className="sr-only">Open main menu</span>
        //                 <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        //                 </svg>
        //             </button>
        //         </div>
        //         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        //             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
        //                 <li>
        //                     <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <header className="  rounded-full  w-full   bg-cover  backdrop-blur-3xl pt-1">
            <div className=" flex justify-between m-auto items-center py-2 bg-white px-4 rounded-full">
                <div className="logo font-semibold text-primary">
                    VACANTER
                </div>
                <nav className="flex gap-2 ">
                    <NavLink className={` NavLink nav-link px-2 py-1 transition-all duration-500 rounded-lg `}>
                        Home
                    </NavLink>
                    <NavLink to={'/test'} className={`NavLink px-2 py-1 transition-all duration-500 rounded-lg `}>
                        Services
                    </NavLink>
                    <NavLink to={'/test2'} className={`NavLink px-2 py-1 transition-all duration-500 rounded-lg`}>
                        About
                    </NavLink>
                    <NavLink to={'/test'} className={`NavLink px-2 py-1 transition-all duration-500 rounded-lg `}>
                        Pricing
                    </NavLink>
                </nav>
                <div>
                    {token == null ?
                        (<div className="auth">
                            <button>
                                Log in
                            </button>
                            <button>
                                Register
                            </button>
                        </div>) : (
                            <div className="protectedLinks flex gap-7 items-center ">
                                <NavLink to={'/UserProfile'} className=' px-2 py-1 transition-all duration-500 rounded-lg '>

                                    <svg width={20} className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
                                    </svg>

                                </NavLink>
                                {/* <div>
                                    notification
                                </div> */}
                                <button className="bg-red-500 px-3 py-2 text-white rounded-md transition-all duration-500 hover:bg-red-400" onClick={handleLogOutClick}>Logout</button>
                            </div>
                        )

                    }
                </div>
            </div>

        </header>

    )
}
