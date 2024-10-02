import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../common/loader/Loader";
import { formatDate } from "../../../utils/dates";

export default function ApplicantJobsApplications() {
    const applicantId = useSelector(state => state.userInfo.userInfo._id);
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate();
    const [applicantJobApplications, setApplicantJobApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getApplicantJobsApplications = async (applicantId) => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/application/applicant/${applicantId}`, {
                headers: {
                    token,
                }
            })
            console.log(data);
            setApplicantJobApplications(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if (applicantId) {
            getApplicantJobsApplications(applicantId);
        }
    }, [])
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-y-4 justify-between  ">
                {applicantJobApplications && applicantJobApplications.length > 0 ? (
                    applicantJobApplications
                        .slice()
                        .reverse()
                        .map((jobApplication) => (
                            <div key={jobApplication._id} className="shadow-md rounded-lg p-6 bg-white w-[49%] flex flex-col gap-4">
                                <div className="postHeader">
                                    <h2 className="text-xl font-semibold text-black">{jobApplication.title}</h2>
                                    <div className="flex gap-2">
                                        {/* <p className="text-neutral-textSecondary capitalize">{jobPost.company} - </p> */}
                                        <p className="capitalize text-neutral-textSecondary">{jobApplication.location} - </p>
                                        <p className="text-neutral-textSecondary capitalize">{jobApplication.type}</p>
                                    </div>
                                </div>
                                <div className="postBody text-neutral-textSecondary">
                                </div>
                                <div className="postFooter flex flex-col gap-2">
                                    <div className="salaryTime flex justify-between">
                                        <span className="font-bold">N/A $</span>
                                        <span className="text-[10px]">{formatDate(jobApplication.createdAt)}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            className="text-neutral-textSecondary w-full text-[12px] px-[40px] py-[8px] border rounded-md transition-all duration-500 hover:text-white hover:bg-primary"
                                            onClick={() => {
                                                navigate(`/UserProfile/jobPost/${jobApplication._id}`)
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
