import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "../../common/loader/Loader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../../../utils/dates";
import JobPostUploader from "../jobPostUploader/JobPostUploader";

export default function EmployerJobPosts() {
    const employerId = useSelector(state => state.userInfo.userInfo._id);
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate();
    const [employerJobPosts, setEmployerJobPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getEmployerJobPosts = async (employerId) => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobPoste/postedBy/${employerId}`, {
                headers: {
                    token,
                }
            })
            console.log(data.jobPost);
            setEmployerJobPosts(data.jobPost);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if (employerId) {
            getEmployerJobPosts(employerId);
        }
    }, [])
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-y-4 justify-between  ">
                <div className="shadow-md rounded-lg  w-[49%]">
                    <JobPostUploader />
                </div>
                {employerJobPosts && employerJobPosts.length > 0 ? (
                    employerJobPosts
                        .slice()
                        .reverse()
                        .map((jobPost) => (
                            <div key={jobPost._id} className="shadow-md rounded-lg p-6 bg-white w-[49%] flex flex-col gap-4">
                                <div className="postHeader">
                                    <h2 className="text-xl font-semibold text-black">{jobPost.title}</h2>
                                    <div className="flex gap-2">
                                        {/* <p className="text-neutral-textSecondary capitalize">{jobPost.company} - </p> */}
                                        <p className="capitalize text-neutral-textSecondary">{jobPost.location} - </p>
                                        <p className="text-neutral-textSecondary capitalize">{jobPost.type}</p>
                                    </div>
                                </div>
                                <div className="postBody text-neutral-textSecondary">
                                </div>
                                <div className="postFooter flex flex-col gap-2">
                                    <div className="salaryTime flex justify-between">
                                        <span className="font-bold">N/A $</span>
                                        <span className="text-[10px]">{formatDate(jobPost.createdAt)}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            className="text-neutral-textSecondary w-full text-[12px] px-[40px] py-[8px] border rounded-md transition-all duration-500 hover:text-white hover:bg-primary"
                                            onClick={() => {
                                                navigate(`/UserProfile/jobPost/${jobPost._id}`)
                                            }}
                                        >
                                            See Who Applied...
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))
                ) : (
                    <div>There are no job applications</div>
                )}
            </div>
        </div>
    )
}
