import axios from "axios";
import { useEffect, useState } from "react";
import ReusableModal from "../modal/ReusableModal";
import { Button } from "@chakra-ui/react";
import ApplingForm from "../../Applicant/applingForm/ApplingForm";
import Loader from "../loader/Loader";
import { formatDate } from "../../../utils/dates";
import { useSelector } from "react-redux";

export default function AllJobPosts() {
    const { jobLocation, jobType } = useSelector(state => state.filters);
    console.log('AllJobApllications jobType', jobType);
    const [jobPosts, setJobPosts] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [openDetailModalId, setOpenDetailModalId] = useState(null);
    const [openFormModalId, setOpenFormModalId] = useState(null);

    const openDetailModal = (id) => setOpenDetailModalId(id);
    const closeDetailModal = () => setOpenDetailModalId(null);

    const openFormModal = (id) => setOpenFormModalId(id);
    const closeFormModal = () => setOpenFormModalId(null);

    const getJobApplications = async () => {
        try {
            setIsloading(true);
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobPoste/all`);
            setJobPosts(data.jobPost);
        } catch (error) {
            console.log(error);
        } finally {
            setIsloading(false);
        }
    };

    useEffect(() => {
        getJobApplications();
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    // Apply the filters here
    const filteredJobPosts = jobPosts.filter(jobPost => {
        const matchesLocation = jobLocation === 'all' || jobPost.location.toLowerCase() === jobLocation;
        const matchesType = jobType === 'all' || jobPost.type === jobType;
        return matchesLocation && matchesType;
    });

    return (
        <div className="w-full ">
            <div className="flex flex-wrap gap-4 justify-between  ">
                {filteredJobPosts && filteredJobPosts.length > 0 ? (
                    filteredJobPosts
                        .slice()
                        .reverse()
                        .map((jobPost) => (
                            <div key={jobPost._id} className="shadow-md rounded-lg p-6 bg-white w-[49%] flex flex-col gap-4">
                                <div className="postHeader">
                                    <h2 className="text-xl font-semibold text-black ">{jobPost.title}</h2>
                                    <div className="flex gap-2">
                                        <p className="text-neutral-textSecondary  capitalize">{jobPost.company} - </p>
                                        <p className="capitalize text-neutral-textSecondary">{jobPost.location} - </p>
                                        <p className="text-neutral-textSecondary capitalize">{jobPost.type}</p>
                                    </div>
                                </div>
                                <div className="postBody text-neutral-textSecondary">
                                    {
                                        jobPost.description
                                    }
                                </div>
                                <div className="postFooter flex flex-col gap-2">
                                    <div className="salaryTime flex justify-between">
                                        <span className="font-bold">N/A $</span>
                                        <span className="text-[10px]">{formatDate(jobPost.createdAt)}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            className="text-neutral-textSecondary text-[12px] px-[40px] py-[8px] border rounded-md transition-all duration-500 hover:text-white hover:bg-primary"
                                            onClick={() => openDetailModal(jobPost._id)}
                                        >
                                            View details...
                                        </button>
                                        <button
                                            className=" text-[12px] px-[40px] py-[8px] border rounded-md font-bold transition-all duration-500 text-[#04ADE6] bg-primary-light hover:text-white hover:bg-primary"
                                            onClick={() => openFormModal(jobPost._id)}
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </div>

                                <ReusableModal
                                    isOpen={openDetailModalId === jobPost._id}
                                    onClose={closeDetailModal}
                                    title="Job Application Details"
                                    footer={
                                        <div className="w-full flex justify-between items-center">
                                            <button
                                                className="bg-primary rounded-md px-4 py-2 text-white hover:bg-primary-hover transition-all duration-500"
                                                onClick={() => openFormModal(jobPost._id)}
                                            >
                                                Apply for this job
                                            </button>
                                            <Button onClick={closeDetailModal}>Close</Button>
                                        </div>
                                    }
                                    size={'6xl'}
                                    height={'80%'}
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Requirements:</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Languages: {jobPost.requirements.Languages}</li>
                                        <li>Work Experience: {jobPost.requirements.WorkExperience}</li>
                                        <li>Education: {jobPost.requirements.Education}</li>
                                        <li>Skills: {jobPost.requirements.Skills}</li>
                                        <li>Personal Information: {jobPost.requirements.personalInformation}</li>
                                    </ul>
                                </ReusableModal>
                                <ReusableModal
                                    isOpen={openFormModalId === jobPost._id}
                                    onClose={closeFormModal}
                                    title="Apply for this Job"
                                    footer={
                                        <div className="w-full flex justify-between items-center">
                                            <Button
                                                className="bg-primary rounded-md px-4 py-2 text-white hover:bg-primary-hover transition-all duration-500"
                                                onClick={closeFormModal}
                                            >
                                                Submit Application
                                            </Button>
                                            <Button onClick={closeFormModal}>Close</Button>
                                        </div>
                                    }
                                    size={'6xl'}
                                    height={'80%'}
                                >
                                    <ApplingForm jobPostId={jobPost._id} />
                                </ReusableModal>
                            </div>
                        ))
                ) : (
                    <div>There are no job applications</div>
                )}
            </div>
        </div>
    );
}
