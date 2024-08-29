import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "../../common/loader/Loader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../../../utils/dates";

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
            <div className="flex flex-col gap-3">
                {employerJobPosts && employerJobPosts.length > 0 ? (
                    employerJobPosts
                        .slice()
                        .reverse()
                        .map((jobPost) => (
                            <div key={jobPost._id} className="shadow-md rounded-lg p-6 bg-white">
                                <h2 className="text-xl font-semibold text-blue-600 mb-2">{jobPost.title}</h2>
                                <p className="text-gray-600 mb-2">{jobPost.company} - {jobPost.location}</p>
                                <p className="text-gray-500 mb-4">{jobPost.type}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-500">Posted on: {formatDate(jobPost.createdAt)}</p>
                                    <button
                                        className="text-primary text-[1rem]"
                                        onClick={() => {
                                            console.log("clicked")
                                            navigate(`/UserProfile/jobPost/${jobPost._id}`)
                                        }}
                                    >
                                        See Who Applied...
                                    </button>
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
