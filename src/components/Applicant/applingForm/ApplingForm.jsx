import { useSelector } from "react-redux"
import Form from "../../form/Form";
import { ApplyForAJobValidationSchema } from "../../../validation/validation";
import { useState } from "react";
import { docxToText } from "../../../utils/ConvertFileToText";
import axios from "axios";
import { toast } from "sonner";
import ReusableModal from "../../common/modal/ReusableModal";

export default function ApplingForm({ jobPostId }) {
    const [isLoading, setIsLoading] = useState(false);
    const [notComplemantModal, setNotComplemantModal] = useState(false);
    const [notCompleatSectionMessage, setNotCompleatSectionMessage] = useState("");
    const [formValues, setFormValues] = useState(null);
    const applicantId = useSelector(state => state.userInfo.userInfo._id);
    const token = useSelector(state => state.auth.token);
    const openNotComplemantModal = () => setNotComplemantModal(true);
    const closeNotComplemantModal = () => setNotComplemantModal(false);
    const initialValues = {
        jobPost: jobPostId,
        applicant: applicantId,
        coverLetter: '',
        resume: null,
    }
    const applingFormFields = [
        { name: 'coverLetter', label: 'Cover Letter', type: 'textArea', placeholder: "Enter Your Cover Letter" },
        { name: 'resume', label: 'Resume', type: 'file', placeholder: "Upload your resume " },
    ];
    const handleSubmitFormClick = async (values, restForm, isCompletion = false) => {
        console.log("isCompletion", isCompletion)
        console.log("values", values);
        const supportedFormats = ['.pdf', '.docx', '.doc'];
        const { resume } = values;
        let resumeText = '';
        if (resume) {
            const isSupportedFormat = supportedFormats.some(format => resume.name.endsWith(format));
            if (isSupportedFormat) {
                let obj = {};
                if (resume.name.endsWith('.pdf')) {
                    // resumeText = await pdfToJson(resume);
                    console.log(resumeText);
                } else if (resume.name.endsWith('.docx')) {
                    // resumeText = await docxToText(resume);
                    obj = {
                        jobPost: jobPostId,
                        applicant: applicantId,
                        coverLetter: values.coverLetter,
                        resume: resumeText,
                    }
                }

                const formData = new FormData();
                formData.append('jobPost', jobPostId);
                formData.append('applicant', applicantId);
                formData.append('coverLetter', values.coverLetter);
                formData.append('file', resume);
                if (isCompletion) {
                    formData.append('completion', 'yes');
                }
                try {
                    setIsLoading(true);
                    console.log("formdata", formData)
                    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/application/create`, formData,
                        {
                            headers: {
                                token: token,
                            }
                        }
                    )
                    console.log(data);
                    if (data) {
                        toast.success(`Your job Application Submitted successfully`, {
                            position: 'top-center',
                        });
                        restForm();
                        setFormValues(null);
                        closeNotComplemantModal();
                    }
                } catch (error) {
                    if (error?.response.status === 403) {
                        toast.error('Unauthorized', {
                            position: 'top-center',
                        });
                    } else if (error?.response.status === 422) {
                        setNotCompleatSectionMessage(error.response.data.message);
                        setFormValues(values);
                        openNotComplemantModal();
                    } else {
                        toast.error(error?.response.data.message, {
                            position: 'top-center',
                        });
                    }
                    console.log(error)
                    console.log(error?.response.status);
                } finally {
                    setIsLoading(false);
                }
            } else {
                console.error('Unsupported file format');
                return;
            }
        }
    }
    return (
        <div>
            <Form
                fields={applingFormFields}
                initialValues={initialValues}
                onSubmit={handleSubmitFormClick}
                validationSchema={ApplyForAJobValidationSchema}
                buttonText="Submit Your Application"
                isLoading={isLoading}
            />
            <ReusableModal
                isOpen={notComplemantModal}
                onClose={closeNotComplemantModal}
                title="Not Compleat CV"
                footer={
                    <div className="w-full flex gap-4 items-center">

                        <button
                            className=" bg-secondary-hoverBackground text-black rounded-md px-4 py-2  hover:bg-secondary-lightBackground transition-all duration-500 disabled:bg-secondary-lightBackground"
                            disabled={isLoading}
                            onClick={() => {
                                closeNotComplemantModal();
                            }}
                        >
                            {
                                isLoading ? "Loading..." : "Cancel"
                            }
                        </button>
                        <button
                            disabled={isLoading}
                            className="bg-primary rounded-md px-4 py-2 text-white hover:bg-primary-hover transition-all duration-500 disabled:bg-primary-disabled"
                            onClick={() => {
                                if (formValues) {
                                    handleSubmitFormClick(formValues, () => { }, true);
                                }
                            }}
                        >
                            {
                                isLoading ? "Loading..." : "Continue"
                            }
                        </button>
                    </div>

                }
                closeOnOverlayClick={false}
                size={'xl'}
            >
                {
                    notCompleatSectionMessage
                }
            </ReusableModal>
        </div>
    )
}
