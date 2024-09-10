import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./SideBar.css"

export default function SideBar() {
    const userRole = useSelector((state) => state.userInfo.userInfo.UserType);
    const renderContent = () => {
        switch (userRole) {
            case 'Employer':
                return (
                    <>
                        <ul className="flex flex-col gap-4 px-4 py-4 ">
                            <li className="w-full">
                                <NavLink to="/UserProfile/personlaInfo" className="px-4 py-2  flex gap-4 font-medium  transition-all duration-500 rounded-lg hover:bg-primary-light hover:text-primary">
                                    <svg width={13} className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
                                    </svg>
                                    Profile
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/UserProfile/settings" className="px-4 py-2  flex gap-4 font-medium  transition-all duration-500 rounded-lg hover:bg-primary-light hover:text-primary">
                                    <svg width={13} className="icon settingIcon transition-all duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4 .6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
                                    </svg>
                                    Settings
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/UserProfile/jobPost" className="px-4 py-2  flex gap-4 font-medium  transition-all duration-500 rounded-lg hover:bg-primary-light hover:text-primary">
                                    <svg width={13} className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M290.7 93.2l128 128-278 278-114.1 12.6C11.4 513.5-1.6 500.6 .1 485.3l12.7-114.2 277.9-277.9zm207.2-19.1l-60.1-60.1c-18.8-18.8-49.2-18.8-67.9 0l-56.6 56.6 128 128 56.6-56.6c18.8-18.8 18.8-49.2 0-67.9z" />
                                    </svg>
                                    Job Posts
                                </NavLink>
                            </li>
                        </ul>
                    </>
                );
            case 'Applicant':
                return (
                    <>
                        <ul>
                            <li>
                                <NavLink>
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    setting
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    Job Applications
                                </NavLink>
                            </li>
                        </ul>
                    </>
                );
            default:
                return <div>Unknown role</div>;
        }
    };
    return (
        <aside className="profileSideBar">
            {renderContent()}
        </aside>
    )
}
