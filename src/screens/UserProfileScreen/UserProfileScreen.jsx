import { useSelector } from "react-redux";
import EmployerJobPosts from "../../components/employer/employerJobPosts/EmployerJobPosts";
import JobPostUploader from "../../components/employer/jobPostUploader/JobPostUploader";
import SideBar from "../../components/common/sideBar/SideBar";
import { Outlet } from "react-router-dom";


export default function UserProfileScreen() {
    const userRole = useSelector((state) => state.userInfo.userInfo.UserType);
    const renderContent = () => {
        switch (userRole) {
            case 'Employer':
                return (
                    <>
                        <div className="grid grid-cols-12 gap-3  min-h-screen bg-[url(public/images/beams-components-24fbfee2.png)]">
                            <div className="col-start-1 col-span-3 bg-red-200">
                                <SideBar />
                            </div>
                            <div className="col-start-4 col-span-6 ">
                                <Outlet />
                            </div>
                            <div className="col-start-10 col-span-3 ">
                                <JobPostUploader />
                            </div>
                        </div>
                    </>
                );
            case 'Applicant':
                return <div>Applicent</div>;
            default:
                return <div>Unknown role</div>;
        }
    };
    return (
        <div className="min-h-screen">
            {renderContent()}
        </div>
    )
}
