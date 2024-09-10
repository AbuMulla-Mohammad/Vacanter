import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

export default function ApplicantRoutes({ children }) {
    const token = localStorage.getItem('userToken');
    let tokenDecoded;
    try {
        tokenDecoded = jwtDecode(token);
    } catch (error) {
        console.error(error)
        return <Navigate to={'/'} replace />;
    }
    if (!token || tokenDecoded.UserType !== "Applicant") {
        return <Navigate te to={'/'} replace />;
    }
    return children;
}


