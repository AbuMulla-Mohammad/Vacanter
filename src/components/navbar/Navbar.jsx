import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../features/auth/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { clearUserInfo } from "../../features/userInfo/userInfoSlice";
import './Navbar.css'
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const token = useSelector(state => state.auth.token)
    const userInfo = useSelector(state => state.userInfo.userInfo);
    useEffect(() => {
        console.log("from the navbar this is user info", userInfo)
    }, [userInfo])
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOutClick = () => {
        dispatch(clearToken());
        dispatch(clearUserInfo());
        navigate('/Login')
    }
    const handleNavBarScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleNavBarScroll);
        return () => {
            window.removeEventListener('scroll', handleNavBarScroll);
        };
    }, [])
    return (
        <header className={`rounded-lg z-50  w-full   bg-cover  backdrop-blur-3xl pt-1 sticky top-0 transition-all duration-700  ${isScrolled ? "bg-primary-light text-white " : "bg-white"}`} >
            <div className=" flex justify-between m-auto items-center py-2  px-4 ">
                <div className="logo font-semibold text-primary px-3">
                    <img className="w-[150px] " src="/images/VacanterLogo0.svg" alt="" />
                </div>
                <nav className="flex gap-2 ">
                    <NavLink to={'Home'} className={` NavLink nav-link px-2 py-1 transition-all duration-500 rounded-lg `}>
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
                        (<div className="auth flex gap-5 px-1">
                            <NavLink to={`/Login`} className={`px-6 py-1 bg-primary rounded-md text-white font-semibold  border-2 border-primary transition-all duration-500 hover:bg-primary-light hover:text-primary  `}>
                                Log in
                            </NavLink>
                            <NavLink to={`/Register`} className={`px-6 py-1 bg-primary-light rounded-md text-primary font-semibold  border border-primary transition-all duration-500 hover:bg-primary hover:text-white  `}>
                                Register
                            </NavLink>
                        </div>) : (
                            <div className="protectedLinks flex gap-7 items-center ">
                                <NavLink to={'/UserProfile/personalInfo'} className=' px-2 py-1 transition-all duration-500 rounded-lg flex justify-center items-center gap-2'>

                                    <svg width={20} className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
                                    </svg>
                                    <span className="text-neutral-textSecondary text-sm">
                                        {/* {
                                            userInfo.username
                                        } */}
                                    </span>
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
