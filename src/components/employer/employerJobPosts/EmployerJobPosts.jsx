import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import Loader from "../../common/loader/Loader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../../../utils/dates";
import JobPostUploader from "../jobPostUploader/JobPostUploader";
import ReusableModal from "../../common/modal/ReusableModal";
import { Button } from "@chakra-ui/react";

export default function EmployerJobPosts() {
    const employerId = useSelector(state => state.userInfo.userInfo._id);
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate();
    const [employerJobPosts, setEmployerJobPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [openJopDetailsModalId, setOpenJopDetailsModalId] = useState(null);
    const openJobDetailModal = (id) => setOpenJopDetailsModalId(id);
    const closeJobDetailModal = () => setOpenJopDetailsModalId(null);
    const getEmployerJobPosts = async (employerId) => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobPoste/postedBy/${employerId}`, {
                headers: {
                    token,
                }
            })
            console.log("data.jobPost", data.jobPost);
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
                            <Fragment key={jobPost._id}>
                                <div className="shadow-md rounded-lg p-6 bg-white w-[49%] flex flex-col gap-4">
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
                                        <div className="flex items-center justify-between gap-4">
                                            <button
                                                className="text-neutral-textSecondary w-[50%] text-[12px]  py-[8px] border rounded-md transition-all duration-500 hover:text-white hover:bg-primary"
                                                onClick={() => {
                                                    navigate(`/UserProfile/jobPost/ApplicantsForTheJobPost/${jobPost._id}`)
                                                }}
                                            >
                                                See Who Applied...
                                            </button>
                                            <button
                                                className="text-primary font-semibold w-[50%] text-[12px]  py-[8px] border border-primary bg-primary-light rounded-md transition-all duration-500 hover:text-white hover:bg-primary"
                                                onClick={() => {
                                                    openJobDetailModal(jobPost._id)
                                                }}
                                            >
                                                View Post Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <ReusableModal
                                    isOpen={openJopDetailsModalId === jobPost._id}
                                    onClose={closeJobDetailModal}
                                    title={<div className="flex items-center justify-between px-6">
                                        <span>{jobPost.title} Job Post Details</span>
                                        <span className="text-sm font-normal text-green-400 animate-pulse ">{jobPost.type}</span>
                                    </div>}
                                    footer={
                                        <div className="w-full flex justify-between items-center">
                                            <Button onClick={closeJobDetailModal}>Close</Button>
                                        </div>
                                    }
                                    size={'6xl'}
                                    height={'80%'}
                                >
                                    <div className="resumeDetailes flex flex-col gap-6">
                                        <div className="jobDetails bg-secondary-lightBackground p-4  rounded-lg">
                                            <h2 className="capitalize text-lg font-bold mb-4">Job Details</h2>
                                            <ul className="px-4 flex flex-col gap-6">
                                                <li className="list-disc">
                                                    <h2 className="capitalize text-base font-semibold mb-[10px]">company Name</h2>
                                                    <p className="px-4">
                                                        {
                                                            jobPost.company
                                                        }
                                                    </p>
                                                </li>
                                                <li className="list-disc">
                                                    <h2 className="capitalize text-base font-semibold mb-[10px]">Jop location</h2>
                                                    <p className="px-4">
                                                        {
                                                            jobPost.location
                                                        }
                                                    </p>
                                                </li>
                                                <li className="list-disc">
                                                    <h2 className="capitalize text-base font-semibold mb-[10px]">created At</h2>
                                                    <p className="px-4">
                                                        {
                                                            formatDate(jobPost.createdAt)
                                                        }
                                                    </p>
                                                </li>
                                                <li className="list-disc">
                                                    <h2 className="capitalize text-base font-semibold mb-[10px]">Jop description</h2>
                                                    <p className="px-4">
                                                        {
                                                            jobPost.description
                                                        }
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="applicantRequirements bg-secondary-lightBackground p-4  rounded-lg">
                                            <h2 className="capitalize text-lg font-bold mb-4">requirements</h2>

                                            <ul className="px-4 flex flex-col gap-6">
                                                <li className="list-disc">
                                                    <h2 className="capitalize text-base font-semibold mb-[10px]">Personal Information</h2>
                                                    <p className="px-4">
                                                        {
                                                            jobPost.requirements.personalInformation
                                                        }
                                                    </p>
                                                </li>
                                                <li className="list-disc">
                                                    <h2 className="capitalize text-base font-semibold mb-[10px]">Education</h2>
                                                    <p className="px-4">
                                                        {
                                                            jobPost.requirements.Education
                                                        }
                                                    </p>
                                                </li>
                                                <li className="list-disc">
                                                    <h2 className="capitalize text-base font-semibold mb-[10px]">Languages</h2>
                                                    <p className="px-4">
                                                        {
                                                            jobPost.requirements.Languages
                                                        }
                                                    </p>
                                                </li>
                                                <li className="list-disc">
                                                    <h2 className="capitalize text-base font-semibold mb-[10px]">Skills</h2>
                                                    <p className="px-4">
                                                        {
                                                            jobPost.requirements.Skills
                                                        }
                                                    </p>
                                                </li>
                                                <li className="list-disc">
                                                    <h2 className="capitalize text-base font-semibold mb-[10px]">Work Experience</h2>
                                                    <p className="px-4">
                                                        {
                                                            jobPost.requirements.WorkExperience
                                                        }
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </ReusableModal>
                            </Fragment>
                        ))
                ) : (
                    <div>There are no job Posts</div>
                )}

            </div>
        </div >
    )
}
