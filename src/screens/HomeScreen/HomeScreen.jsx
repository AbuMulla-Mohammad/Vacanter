import { useSelector } from "react-redux"
import AllJobPosts from "../../components/common/allJobPosts/AllJobPosts";
import JobPostUploader from "../../components/employer/jobPostUploader/JobPostUploader";
import FilterData from "../../components/common/filterData/FilterData";

export default function HomeScreen() {
    const userInfo = useSelector(state => state.userInfo.userInfo);

    return (
        <div className="grid grid-cols-12  min-h-screen gap-3 ">
            <div className="col-start-1 col-span-3">
                <FilterData />
            </div>
            <div className="col-start-4 col-span-9 ">
                {
                    (userInfo && userInfo.UserType === 'Employer') && <div className="mb-4">
                        <JobPostUploader />
                    </div>
                }
                <AllJobPosts />
            </div>

        </div>
    )
}
