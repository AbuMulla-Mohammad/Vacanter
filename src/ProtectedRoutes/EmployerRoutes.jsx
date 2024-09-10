import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

export default function EmployerRoutes({ children }) {
    const token = localStorage.getItem('userToken');
    let tokenDecoded;
    try {
        tokenDecoded = jwtDecode(token);
    } catch (error) {
        console.error(error)
        return <Navigate to={'/'} replace />;
    }
    if (!token || tokenDecoded.UserType !== "Employer") {
        return <Navigate te to={'/'} replace />;
    }
    return children;
}


