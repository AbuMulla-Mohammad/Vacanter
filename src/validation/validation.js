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
    UserType:Yup.string().oneOf(['Applicant', 'Employee'], 'Invalid User Type').required('User Type is required'),
});

// Add more validation schemas for other forms as needed.
