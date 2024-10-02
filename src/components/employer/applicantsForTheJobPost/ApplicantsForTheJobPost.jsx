import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../common/loader/Loader";
import { useSelector } from "react-redux";
import { formatDate } from "../../../utils/dates";
import ReusableModal from "../../common/modal/ReusableModal";
import { Button } from "@chakra-ui/react";

export default function ApplicantsForTheJobPost({ id }) {
    const token = useSelector(state => state.auth.token);
    const [applicantsForTheJob, setApplicantsForTheJob] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [openDetailModalId, setOpenDetailModalId] = useState(null);
    const [isToggled, setIsToggled] = useState(false);
    const openDetailModal = (id) => setOpenDetailModalId(id);
    const closeDetailModal = () => setOpenDetailModalId(null);

    const getApplicantsForTheJob = async (jobId, top10 = false) => {
        try {
            setIsLoading(true);
            const endpoint = top10
                ? `${import.meta.env.VITE_API_URL}/application/sort/${jobId}?limit=10&page=1`
                : `${import.meta.env.VITE_API_URL}/application/jobPost/${jobId}`;
            const { data } = await axios.get(`${endpoint}`, {
                headers: {
                    token,
                }
            });
            console.log(data)
            setApplicantsForTheJob(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    const toggleButton = () => {
        setIsToggled(!isToggled);
        getApplicantsForTheJob(id, !isToggled);
    };
    useEffect(() => {
        if (id) {
            getApplicantsForTheJob(id, isToggled);
        }
    }, [id, isToggled]);

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="p-6  rounded-lg">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-neutral-text mb-4">Applicants</h2>
                <div className="flex gap-4 items-center">
                    <span className="font-semibold text-[10px]">
                        Top 10 Matchs
                    </span>
                    <label className="switch">
                        <input type="checkbox" checked={isToggled} onChange={toggleButton} />
                        <span className="slider" />
                    </label>
                </div>
            </div>
            {applicantsForTheJob.length === 0 ? (
                <p className="text-neutral-text">No applicants found for this job post.</p>
            ) : (
                <ul className="space-y-4">
                    {applicantsForTheJob.map(applicant => (
                        <li key={applicant._id} className="bg-neutral-white p-4 rounded-lg shadow-md ">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-primary-hover">{applicant.applicant.username}</h3>
                                    <p className="text-neutral-text">{applicant.applicant.email}</p>
                                </div>
                                <div>
                                    <div className="flex flex-col items-end">
                                        <div className="text-xs w-fit ">
                                            {
                                                `${applicant.similarityRatio.toFixed(2)} %`
                                            }
                                        </div>
                                        <p className="text-xs text-neutral-text mt-2">Applied At: {formatDate(applicant.createdAt)}</p>
                                        <button className="px-4 py-2 text-primary font-medium"
                                            onClick={() => openDetailModal(applicant._id)}
                                        >
                                            View More . . .
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ReusableModal
                                isOpen={openDetailModalId == applicant._id}
                                onClose={closeDetailModal}
                                title={`${applicant.applicant.username} Job Application `}
                                footer={
                                    <div className="w-full flex justify-between items-center">
                                        <Button onClick={closeDetailModal}>Close</Button>
                                    </div>
                                }
                                size={'6xl'}
                                height={'80%'}
                            >
                                <div>
                                    {
                                        <div>
                                            <div className="mb-6">
                                                <h3 className="text-lg font-semibold text-primary-hover">{applicant.applicant.username}</h3>
                                                <p className="text-neutral-text">{applicant.applicant.email}</p>
                                            </div>
                                            <div className="resumeDetailes bg-secondary-lightBackground p-4 rounded-lg">
                                                <h2 className="capitalize text-lg font-bold mb-4">resume Detailes</h2>

                                                <ul className="px-4 flex flex-col gap-6">
                                                    <li className="list-disc">
                                                        <h2 className="capitalize text-base font-semibold mb-[10px]">Personal Information</h2>
                                                        <p className="px-4">
                                                            {
                                                                applicant.resumeSegmentation.PersonalInformation
                                                            }
                                                        </p>
                                                    </li>
                                                    <li className="list-disc">
                                                        <h2 className="capitalize text-base font-semibold mb-[10px]">Education</h2>
                                                        <p className="px-4">
                                                            {
                                                                applicant.resumeSegmentation.Education
                                                            }
                                                        </p>
                                                    </li>
                                                    <li className="list-disc">
                                                        <h2 className="capitalize text-base font-semibold mb-[10px]">Languages</h2>
                                                        <p className="px-4">
                                                            {
                                                                applicant.resumeSegmentation.Languages
                                                            }
                                                        </p>
                                                    </li>
                                                    <li className="list-disc">
                                                        <h2 className="capitalize text-base font-semibold mb-[10px]">Skills</h2>
                                                        <p className="px-4">
                                                            {
                                                                applicant.resumeSegmentation.Skills
                                                            }
                                                        </p>
                                                    </li>
                                                    <li className="list-disc">
                                                        <h2 className="capitalize text-base font-semibold mb-[10px]">WorkExperience</h2>
                                                        <p className="px-4">
                                                            {
                                                                applicant.resumeSegmentation.WorkExperience
                                                            }
                                                        </p>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    }
                                </div>
                            </ReusableModal>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
