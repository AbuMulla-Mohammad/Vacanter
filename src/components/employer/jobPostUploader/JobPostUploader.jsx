import { useState } from "react"
import ReusableModal from "../../common/modal/ReusableModal";
import { Button } from "@chakra-ui/react";
import Form from "../../form/Form";
import { jobPostValidationSchema } from "../../../validation/validation";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";

export default function JobPostUploader() {
    const userId = useSelector(state => state.userInfo.userInfo._id)
    const userToken = useSelector(state => state.auth.token);
    console.log('userId', userId, "token", userToken)
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const sections = [
        { name: 'title', label: 'job title', type: 'text', placeholder: "Enter Jop Title" },
        { name: 'company', label: 'company name', type: 'text', placeholder: "Enter company name" },
        { name: 'location', label: 'job Location', type: 'text', placeholder: "Job Location" },
        { name: 'description', label: 'job description', type: 'textArea', placeholder: "job description" },
        { name: 'type', label: 'Job type', type: 'select', options: ['full-time', 'part-time', 'contract', 'temporary'], placeholder: "Select Job Type" },
        { name: 'Languages', label: 'Languages', type: 'textArea', placeholder: "Enter Languages" },
        { name: 'WorkExperience', label: 'Work Experience', type: 'textArea', placeholder: "Experience" },
        { name: 'Education', label: 'Education', type: 'textArea', placeholder: "Education" },
        { name: 'Skills', label: 'Skills', type: 'textArea', placeholder: "Skills" },
        { name: 'personalInformation', label: 'personal Information', type: 'textArea', placeholder: "personalInformation" },
    ];
    const initialValues = {
        title: "",
        company: "",
        location: "",
        description: "",
        type: "",
        postedBy: userId,
        Languages: "",
        WorkExperience: "",
        Education: "",
        Skills: "",
        personalInformation: ""
    };
    const handleSubmitClick = async (values, restForm) => {
        const obj = {
            title: values.title,
            company: values.company,
            location: values.location,
            description: values.description,
            type: values.type,
            postedBy: userId,
            requirements: {
                Languages: values.Languages,
                WorkExperience: values.WorkExperience,
                Education: values.Education,
                Skills: values.Skills,
                personalInformation: values.personalInformation,
            }
        }
        try {
            setIsLoading(true);
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jobPoste/create`, obj,
                {
                    headers: {
                        token: userToken,
                    }
                }
            )
            console.log("data", data);
            if (data) {
                toast.success(`Your job post posted successfully`, {
                    position: 'top-center',
                });
                restForm();
            }

        } catch (error) {
            console.log(error)
            if (error.response?.status == 401) {
                toast.error('Unauthorized', {
                    position: 'top-center',
                });
            } else if (error.message == 'Network Error') {
                toast.error('Network Error', {
                    position: 'top-center',
                });
            } else {
                toast.error(error.response.data.message, {
                    position: 'top-center',
                });
            }
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
            <div className="bg-white flex justify-center items-center  rounded-lg shadow-lg p-4 h-full">
                <div className="flex flex-col justify-evenly  w-full h-full ">
                    <h1>
                        Add A Job Post
                    </h1>
                    <button onClick={() => {
                        openModal();
                    }} className="border-[3px] border-dashed border-primary-hover bg-[#edf2ff] flex flex-col items-center justify-evenly  p-4 rounded-lg w-full h-[80%] text-primary-hover hover:bg-white transition-all duration-500   ">
                        <div className="iconWraper w-[50px] h-[50px]">
                            <img src="/icons/add.svg" className="w-[100%]" alt="" />
                        </div>
                        <span>Click To Add A Job Post </span>
                    </button>
                </div>
            </div>
            <ReusableModal
                isOpen={isOpen}
                onClose={closeModal}
                title="Job Post Form"
                footer={<Button onClick={closeModal}>Close</Button>}
                height="80%"
                size={'6xl'}
            >
                <Form
                    fields={sections}
                    initialValues={initialValues}
                    onSubmit={handleSubmitClick}
                    validationSchema={jobPostValidationSchema}
                    buttonText="Submit Job Post"
                    isLoading={isLoading}
                />
            </ReusableModal>

        </>
    )
}