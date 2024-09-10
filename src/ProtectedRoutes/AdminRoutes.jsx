import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

export default function AdminRoutes({ children }) {
    const token = localStorage.getItem('userToken');
    let tokenDecoded;
    try {
        tokenDecoded = jwtDecode(token);
    } catch (error) {
        console.log(error)
        return <Navigate to={'/'} replace />;
    }
    if (!token || !tokenDecoded.isAdmin) {
        return <Navigate to={'/'} replace />;
    }
    return children;
}