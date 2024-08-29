import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function SideBar() {
    const userRole = useSelector((state) => state.userInfo.userInfo.UserType);
    const renderContent = () => {
        switch (userRole) {
            case 'Employer':
                return (
                    <>
                        <ul>
                            <li>
                                <NavLink to="/UserProfile">
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/UserProfile/settings">
                                    Settings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/UserProfile/jobPost">
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
        <aside>
            {renderContent()}
        </aside>
    )
}
