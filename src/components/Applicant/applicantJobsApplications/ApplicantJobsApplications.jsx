import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../common/loader/Loader";
import { formatDate } from "../../../utils/dates";
import { Button } from "@chakra-ui/react";
import ReusableModal from "../../common/modal/ReusableModal";

export default function ApplicantJobsApplications() {
    const applicantId = useSelector(state => state.userInfo.userInfo._id);
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate();
    const [applicantJobApplications, setApplicantJobApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [openDetailModalId, setOpenDetailModalId] = useState(null);
    const openDetailModal = (id) => setOpenDetailModalId(id);
    const closeDetailModal = () => setOpenDetailModalId(null);
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
                        .map((applicantJobApplication) => (
                            <div key={applicantJobApplication._id} className="shadow-md rounded-lg p-6 bg-white w-[49%] flex flex-col gap-4">
                                <div className="postHeader">
                                    <h2 className="text-xl font-semibold text-black ">{applicantJobApplication.jobPost.title}</h2>
                                    <div className="flex gap-2">
                                        <p className="text-neutral-textSecondary  capitalize">{applicantJobApplication.jobPost.company} - </p>
                                        <p className="capitalize text-neutral-textSecondary">{applicantJobApplication.jobPost.location} - </p>
                                        <p className="text-neutral-textSecondary capitalize">{applicantJobApplication.jobPost.type}</p>
                                    </div>
                                </div>
                                <div className="postBody text-neutral-textSecondary h-[50px] overflow-hidden">
                                    {
                                        applicantJobApplication.jobPost.description
                                    }
                                </div>
                                <div className="postFooter flex flex-col gap-2">
                                    <div className="salaryTime flex justify-between">
                                        <span className="font-bold">N/A $</span>
                                        <span className="text-[10px]">{formatDate(applicantJobApplication.jobPost.createdAt)}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            className="text-neutral-textSecondary text-[12px] px-[40px] py-[8px] border rounded-md transition-all duration-500 hover:text-white hover:bg-primary"
                                            onClick={() => openDetailModal(applicantJobApplication._id)}
                                        >
                                            View details...
                                        </button>
                                    </div>
                                </div>

                                <ReusableModal
                                    isOpen={openDetailModalId === applicantJobApplication._id}
                                    onClose={closeDetailModal}
                                    title={<div className="flex justify-center items-center gap-4">
                                        <h2>{applicantJobApplication.jobPost.title} Application Details</h2>
                                        <span className="text-sm text-neutral-textSecondary"> in {applicantJobApplication.jobPost.location}</span>
                                    </div>}
                                    footer={
                                        <div className="w-full flex justify-between items-center">
                                            <Button onClick={closeDetailModal}>Close</Button>
                                        </div>
                                    }
                                    size={'6xl'}
                                    height={'80%'}
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Company:</h3>
                                    <div>
                                        {applicantJobApplication.jobPost.company}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Description:</h3>
                                    <div>
                                        {
                                            applicantJobApplication.jobPost.description
                                        }
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Requirements:</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Languages: {applicantJobApplication.jobPost.requirements.Languages}</li>
                                        <li>Work Experience: {applicantJobApplication.jobPost.requirements.WorkExperience}</li>
                                        <li>Education: {applicantJobApplication.jobPost.requirements.Education}</li>
                                        <li>Skills: {applicantJobApplication.jobPost.requirements.Skills}</li>
                                        <li>Personal Information: {applicantJobApplication.jobPost.requirements.personalInformation}</li>
                                    </ul>
                                </ReusableModal>
                            </div>

                        ))
                ) : (
                    <div>There are no job applications</div>
                )}
            </div>
        </div>
    )
}
