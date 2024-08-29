import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('email is Required').max(255).trim(),
    password: Yup.string().required('password is Required').min(8, 'Password must be at least 8 characters')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?`~])[A-Za-z\d!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?`~]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
});

export const registerValidationSchema = Yup.object({
    username: Yup.string().required('username is Required'),
    email: Yup.string().email('Invalid email address').required('email is Required').max(255).trim(),
    password: Yup.string().required('password is Required').min(8, 'Password must be at least 8 characters')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?`~])[A-Za-z\d!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?`~]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
    // confirmPassword: Yup.string()
    // .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //     .required('confirm password is Required'),
    UserType:Yup.string().oneOf(['Applicant', 'Employer'], 'Invalid User Type').required('User Type is required'),
});

export const jobPostValidationSchema = Yup.object({
    title: Yup.string().required('Title is required').max(255, 'Title cannot exceed 255 characters'),
    company: Yup.string().required('Company is required').max(255, 'Company cannot exceed 255 characters'),
    location: Yup.string().required('Location is required').max(255, 'Location cannot exceed 255 characters'),
    description: Yup.string().required('Description is required').min(10,'Description section must be at least 10 characters'),
    type: Yup.string().required('Type is required').oneOf(['full-time', 'part-time', 'contract', 'temporary']),
    Languages: Yup.string().required('Languages are required'),
    WorkExperience: Yup.string().required('Work Experience is required'),
    Education: Yup.string().required('Education is required'),
    Skills: Yup.string().required('Skills are required'),
    personalInformation: Yup.string().required('Personal Information is required')
});
export const ApplyForAJobValidationSchema = Yup.object().shape({
    coverLetter: Yup.string()
        .required('Cover Letter is required')
        .min(50, 'Cover Letter must be at least 50 characters long')
        .max(1500, 'Cover Letter must be less than 1500 characters long'),
    resume: Yup.mixed()
        .required('Resume is required')
        .test('fileFormat', 'Unsupported Format', value => {
            if (value) {
                const fileName = value.name.toLowerCase();
                const supportedFormats = ['.pdf', '.docx', '.doc'];
                return supportedFormats.some(format => fileName.endsWith(format));
            }
            return false;
        }),
});
