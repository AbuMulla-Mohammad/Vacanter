import { useSelector } from "react-redux"
import Form from "../../form/Form";
import { ApplyForAJobValidationSchema } from "../../../validation/validation";
import { useState } from "react";
import { docxToText } from "../../../utils/ConvertFileToText";
import axios from "axios";
import { toast } from "sonner";

export default function ApplingForm({ jobPostId }) {
    const [isLoading, setIsLoading] = useState(false);
    const applicantId = useSelector(state => state.userInfo.userInfo._id);
    const token = useSelector(state => state.auth.token);
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
    const handleSubmitFormClick = async (values, restForm) => {
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
                    resumeText = await docxToText(resume);
                    obj = {
                        jobPost: jobPostId,
                        applicant: applicantId,
                        coverLetter: values.coverLetter,
                        resume: resumeText,
                    }
                }
                try {
                    setIsLoading(true);
                    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/application`, obj,
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
                    }
                } catch (error) {
                    if (error.response.status === 403) {
                        toast.error('Unauthorized', {
                            position: 'top-center',
                        });
                    } else {
                        toast.error(error.response.data, {
                            position: 'top-center',
                        });
                    }
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
        </div>
    )
}
